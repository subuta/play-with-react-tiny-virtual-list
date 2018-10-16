import React from 'react'
import { hot } from 'react-hot-loader'

import { Link } from 'react-router-dom'
import faker from 'faker'

import _ from 'lodash'

import VirtualList from 'react-tiny-virtual-list'

import {
  compose,
  withHandlers,
  withState,
  withPropsOnChange
} from 'recompose'

import mapVh from '../hocs/mapVh'
import withSize from '../hocs/withSize'
import withRTVLHandlers from '../hocs/withRTVLHandlers'

const enhanceText = compose(
  withSize,
  withPropsOnChange(
    (props, nextProps) => !_.isEqual(props.size, nextProps.size),
    ({ size, onMeasure = _.noop }) => {
      if (size.height === 0) return
      onMeasure(size)
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
  withRTVLHandlers({
    isReversed: true,
    virtualRowsSize: 50,
    rows: _.fill(new Array(50), 1),
    onLoadMore: ({ rows, appendRows }) => () => {
      // Simulate slow network.
      _.delay(() => {
        appendRows(_.fill(new Array(50), 1))
      }, 300)
    }
  }),
  withPropsOnChange(
    (props, nextProps) => {
      return props.itemCount !== nextProps.itemCount
    },
    ({ rows, getActualIndex, setCachedHeight, refresh }) => ({
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
                setCachedHeight(index, height)
                refresh(index)
              }}
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
    getCachedHeight,
    renderItem
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
        itemSize={(index) => getCachedHeight()[index] || 120}
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