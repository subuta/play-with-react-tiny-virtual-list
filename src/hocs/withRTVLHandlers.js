import {
  compose,
  withHandlers,
  withStateHandlers
} from 'recompose'
import _ from 'lodash'

const SCROLL_DIRECTION_UP = 'SCROLL_DIRECTION_UP'
const SCROLL_DIRECTION_NONE = 'SCROLL_DIRECTION_NONE'
const SCROLL_DIRECTION_DOWN = 'SCROLL_DIRECTION_DOWN'

export default (options) => {
  const {
    isReversed = false,
    virtualRowsSize = 0,
    rows = [],
    onLoadMore = () => () => {}
  } = options

  return compose(
    withStateHandlers(
      () => {
        const itemCount = rows.length + virtualRowsSize

        return {
          rows,
          overScanCount: 3,
          itemCount,
          initialScrollToIndex: itemCount - 1
        }
      },
      {
        appendRows: (state) => (rows) => {
          const nextRows = [...state.rows, ...rows]
          return {
            itemCount: nextRows.length + virtualRowsSize,
            rows: nextRows
          }
        }
      }
    ),
    withHandlers(() => {
      let listRef = null
      let cachedHeight = []
      let refresh = _.noop

      return {
        onLoadMore,

        getActualIndex: ({ itemCount }) => (index) => {
          return isReversed ? itemCount - index - 1 : index + 1
        },

        setListRef: () => (ref) => {
          if (ref === null) return
          listRef = ref
          refresh = (index) => listRef.recomputeSizes(index)
        },

        refresh: () => (index) => refresh(index),

        setCachedHeight: () => (index, height) => cachedHeight[index] = height,
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
      const onLoadMore = _.debounce(initialProps.onLoadMore, 100, { leading: true, trailing: false })

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
        }
      }
    })
  )
}