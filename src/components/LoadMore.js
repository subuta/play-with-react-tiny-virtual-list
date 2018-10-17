import React from 'react'
import { hot } from 'react-hot-loader'

import { Link } from 'react-router-dom'
import faker from 'faker'

import _ from 'lodash'

import VirtualList from 'react-tiny-virtual-list'

import {
  compose,
  withState,
  withHandlers,
  withPropsOnChange
} from 'recompose'

import mapVh from '../hocs/mapVh'
import withSize from '../hocs/withSize'
import withRTVLHandlers from '../hocs/withRTVLHandlers'

const enhanceText = compose(
  withSize,
  withPropsOnChange(
    (props, nextProps) => !_.isEqual(props.size, nextProps.size),
    ({ size, onMeasure = _.noop, forceUpdate = _.noop }) => {
      if (size.height === 0) return
      onMeasure(size)
      forceUpdate()
    }
  )
)

const MeasurableText = enhanceText(({ text, setSizeRef, style }) => {
  return (
    <p
      ref={setSizeRef}
      style={{ ...style, margin: 0 }}
    >
      {text}
    </p>
  )
})

const enhance = compose(
  hot(module),
  mapVh,
  withState('rows', 'setRows', _.fill(new Array(100), 1)),
  withHandlers({
    onLoadMore: ({ rows, setRows }) => ({ isAtFirst }) => {
      if (isAtFirst) return
      // Simulate slow network.
      _.delay(() => {
        setRows([...rows, ..._.fill(new Array(100), 1)])
      }, 300)
    }
  }),
  withRTVLHandlers({
    isReversed: true,
    virtualRowsSize: 50,
    estimatedSize: 200
  }),
  withPropsOnChange(
    (props, nextProps) => {
      return props.itemCount !== nextProps.itemCount
    },
    ({ rows, getActualIndex, cacheHeight, refresh, forceUpdate }) => ({
      renderItem (arg) {
        const { index, style } = arg

        const actualIndex = getActualIndex(index)
        const row = rows[actualIndex]

        // Fix faker seed for getting same result.
        faker.seed(index)
        const text = faker.lorem.paragraphs()

        return (
          <div className={`row-${index}`} style={{ ...style }} key={index}>
            <span style={{
              background: 'white',
              color: 'black',
              position: 'absolute',
              top: 0,
              left: 0,
              height: 20
            }}>{row ? `Row ${actualIndex}` : 'Loading...'}</span>
            <MeasurableText
              text={row ? text : ''}
              style={{ paddingTop: 20 }}
              onMeasure={({ height }) => {
                cacheHeight(index, height)
                refresh(index)
              }}
              forceUpdate={() => forceUpdate()}
            />
          </div>
        )
      }
    })
  )
)

const LoadMore = enhance((props) => {
  const {
    vh,
    setListRef,
    overScanCount,
    itemCount,
    initialScrollToIndex,
    onItemsRendered,
    renderItem,
    itemSize
  } = props

  return (
    <div style={{ color: 'white' }}>
      <VirtualList
        ref={setListRef}
        width="auto"
        height={vh || window.innerHeight}
        itemCount={itemCount}
        overscanCount={overScanCount}
        renderItem={renderItem}
        itemSize={itemSize}
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