import React from 'react'
import { hot } from 'react-hot-loader'

import { Link } from 'react-router-dom'

import _ from 'lodash'

import VirtualList from 'react-tiny-virtual-list'

import {
  compose,
  withHandlers,
  withPropsOnChange,
  withStateHandlers,
} from 'recompose'

import mapVh from '../hocs/mapVh'

const SCROLL_DIRECTION_UP = 'SCROLL_DIRECTION_UP'
const SCROLL_DIRECTION_NONE = 'SCROLL_DIRECTION_NONE'
const SCROLL_DIRECTION_DOWN = 'SCROLL_DIRECTION_DOWN'

const VIRTUAL_ROWS_SIZE = 50

const enhance = compose(
  hot(module),
  mapVh,
  withStateHandlers(
    () => {
      const rows = _.fill(Array(20), 1)
      const virtualRowsCount = rows.length + VIRTUAL_ROWS_SIZE
      return {
        overScanCount: 3,
        virtualRowsCount,
        rows,
        initialScrollToIndex: virtualRowsCount - 1
      }
    },
    {
      prependRows: (state) => (rows) => {
        const nextRows = [...state.rows, ...rows]
        const nextVirtualRowsCount = nextRows.length + VIRTUAL_ROWS_SIZE
        return {
          virtualRowsCount: nextVirtualRowsCount,
          rows: nextRows
        }
      }
    }
  ),
  withHandlers({
    getVirtualIndex: ({ virtualRowsCount }) => (index) => {
      return virtualRowsCount - index - 1
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
  withPropsOnChange(
    ['prependRows'],
    ({ prependRows }) => ({
      // Prevent duplicate call.
      prependRows: _.debounce(prependRows, 300, { leading: true, trailing: false })
    })
  ),
  withHandlers({
    onLoadMore: ({ prependRows }) => ({ isAtFirst }) => {
      if (isAtFirst) return
      // Simulate delay of loading.
      _.delay(() => prependRows(_.fill(Array(20), 1)), 300)
    }
  }),
  withHandlers((props) => {
    const onLoadMore = _.debounce(props.onLoadMore, 100, { leading: true })

    return {
      onItemsRendered: ({ virtualRowsCount, rows, getVirtualIndex }) => (arg) => {
        // Swap args for reversed list.
        const startIndex = getVirtualIndex(arg.stopIndex)
        const stopIndex = getVirtualIndex(arg.startIndex)

        const { scrollDirection, currentIndex } = props.compareScroll({ startIndex, stopIndex })

        // Ignore no-change.
        if (scrollDirection === SCROLL_DIRECTION_NONE) return

        const IsAtFirstOfRows = scrollDirection === SCROLL_DIRECTION_UP && startIndex === 0
        const IsAtLastOfRows = scrollDirection === SCROLL_DIRECTION_DOWN && stopIndex >= rows.length - 1

        if (IsAtFirstOfRows || IsAtLastOfRows) {
          onLoadMore({
            scrollDirection,
            currentIndex,
            isAtFirst: IsAtFirstOfRows,
            isAtLast: IsAtLastOfRows
          })
        }
      }
    }
  }),
  withPropsOnChange(
    (props, nextProps) => {
      return props.rows.length !== nextProps.rows.length
    },
    ({ rows, getVirtualIndex }) => ({
      renderItem (arg) {
        const { style } = arg

        const index = getVirtualIndex(arg.index)
        const row = rows[index]

        return (
          <div className="Row" style={style} key={index}>
            {row ? `Row ${index}` : 'Loading...'}
          </div>
        )
      }
    })
  )
)

const LoadMore = enhance((props) => {
  const {
    vh,
    overScanCount,
    virtualRowsCount,
    initialScrollToIndex,
    onItemsRendered,
    renderItem
  } = props

  return (
    <div style={{color: 'white'}}>
      <VirtualList
        width="auto"
        height={vh || window.innerHeight}
        itemCount={virtualRowsCount}
        overscanCount={overScanCount}
        renderItem={renderItem}
        itemSize={50}
        scrollToIndex={initialScrollToIndex}
        onItemsRendered={onItemsRendered}
      />

      <footer>
        <span>
          <Link to="/images">/images</Link> |&nbsp;
          <Link to="/pokemons">/pokemons</Link>
        </span>

        <span className="c-comment">Scroll up to load more(Slack-like behavior).</span>
      </footer>
    </div>
  )
})

export default LoadMore