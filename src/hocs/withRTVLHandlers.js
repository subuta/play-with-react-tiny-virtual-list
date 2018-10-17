import {
  compose,
  withHandlers,
  withPropsOnChange,
  withStateHandlers
} from 'recompose'
import _ from 'lodash'

const SCROLL_DIRECTION_UP = 'SCROLL_DIRECTION_UP'
const SCROLL_DIRECTION_NONE = 'SCROLL_DIRECTION_NONE'
const SCROLL_DIRECTION_DOWN = 'SCROLL_DIRECTION_DOWN'

export default (options = {}) => {
  const {
    isReversed = false,
    virtualRowsSize = 0,
    estimatedSize = 100
  } = options

  return compose(
    withStateHandlers(({ rows }) => ({
      overScanCount: 3,
      initialScrollToIndex: rows.length + virtualRowsSize - 1
    }), {}),
    withPropsOnChange(
      (props, nextProps) => props.rows.length !== nextProps.rows.length,
      ({ rows }) => ({
        itemCount: rows.length + virtualRowsSize
      })
    ),
    withHandlers(() => {
      let listRef = null
      let cachedHeight = []
      let refresh = _.noop
      let forceUpdate = _.noop

      return {
        getActualIndex: ({ itemCount }) => (index) => {
          return isReversed ? itemCount - index - 1 : index + 1
        },

        setListRef: () => (ref) => {
          if (ref === null) return
          listRef = ref
          refresh = (index) => listRef.recomputeSizes(index)
          forceUpdate = _.debounce(() => listRef.forceUpdate(), 1000 / 60)
        },

        refresh: () => (index) => refresh(index),
        forceUpdate: () => (index) => forceUpdate(index),

        cacheHeight: () => (index, height) => cachedHeight[index] = height,
        getCachedHeight: () => () => cachedHeight
      }
    }),
    withHandlers(({ overScanCount }) => {
      let lastArg = {
        startIndex: -1,
        stopIndex: -1
      }
      let scrollDirection = SCROLL_DIRECTION_NONE

      return {
        compareScroll: () => (arg) => {
          // Assign lastStartIndex at first render.
          if (lastArg.startIndex === -1) lastArg.startIndex = arg.startIndex
          // Ignore no-change.
          if (lastArg.startIndex === arg.startIndex) return { scrollDirection: SCROLL_DIRECTION_NONE }

          scrollDirection = lastArg.startIndex > arg.startIndex ? SCROLL_DIRECTION_UP : SCROLL_DIRECTION_DOWN

          // Get in-visible (includes overScan) row index.
          const currentIndex = scrollDirection === SCROLL_DIRECTION_UP ? arg.startIndex : arg.stopIndex
          // Get visible row index.
          const visibleCurrentIndex = scrollDirection === SCROLL_DIRECTION_UP ? (arg.startIndex + overScanCount) : (arg.stopIndex - overScanCount)

          // Keep lastArg.
          lastArg = arg

          return {
            scrollDirection,
            currentIndex,
            visibleCurrentIndex
          }
        }
      }
    }),
    withHandlers((initialProps) => {
      // Ignore fast scroll.
      let onLoadMore = initialProps.onLoadMore || (() => {})
      onLoadMore = _.debounce(onLoadMore, 100, { leading: true, trailing: false })

      return {
        onItemsRendered: (props) => (arg) => {
          const {
            rows,
            getActualIndex,
            compareScroll
          } = props

          // Swap args for reversed list.
          const startIndex = isReversed ? getActualIndex(arg.stopIndex) : getActualIndex(arg.startIndex)
          const stopIndex = isReversed ? getActualIndex(arg.startIndex) : getActualIndex(arg.stopIndex)

          const { scrollDirection, currentIndex } = compareScroll({ startIndex, stopIndex })

          // Ignore no-change.
          if (scrollDirection === SCROLL_DIRECTION_NONE) return

          const IsAtFirstOfRows = scrollDirection === SCROLL_DIRECTION_UP && startIndex === 0
          const IsAtLastOfRows = scrollDirection === SCROLL_DIRECTION_DOWN && stopIndex >= rows.length - 1

          if (IsAtFirstOfRows || IsAtLastOfRows) {
            requestAnimationFrame(() => {
              onLoadMore({
                scrollDirection,
                currentIndex,
                isAtFirst: IsAtFirstOfRows,
                isAtLast: IsAtLastOfRows
              })
            })
          }
        },

        itemSize: ({ getCachedHeight }) => (index) => getCachedHeight()[index] || estimatedSize
      }
    })
  )
}