// App.js
import React from 'react'
import { hot } from 'react-hot-loader'

import { Link } from 'react-router-dom'
import VirtualList from 'react-tiny-virtual-list'
import qs from 'qs'

import fetch from '../../utils/fetch'

import _ from 'lodash'

import Pokemon from './Pokemon'

import {
  compose,
  lifecycle,
  withPropsOnChange,
  withStateHandlers
} from 'recompose'

import mapVh from '../../hocs/mapVh'
import withRTVLHandlers from '../../hocs/withRTVLHandlers'

const POKE_URL_ID_REGEX = 'https://pokeapi.co/api/v2/pokemon/([0-9]+)/'

const enhance = compose(
  hot(module),
  mapVh,
  withStateHandlers(
    () => ({
      rows: [],
      scrollToIndex: null,
      draftScrollToIndex: ''
    }),
    {
      setRows: () => (rows) => ({ rows }),
      setDraftScrollToIndex: () => (e) => ({ draftScrollToIndex: e.target.value }),
      setScrollToIndex: () => (value) => {
        if (value === '') return { scrollToIndex: null }
        return {
          scrollToIndex: _.isNaN(Number(value)) ? null : Number(value) // For array.
        }
      }
    }
  ),
  lifecycle({
    async componentDidMount () {
      let response = await fetch('https://pokeapi.co/api/v2/pokemon/')

      const rows = _.map(response.results, pokemon => {
        pokemon.id = pokemon.url.match(POKE_URL_ID_REGEX)[1]
        return pokemon
      })

      this.props.setRows(rows)
    }
  }),
  withRTVLHandlers({
    estimatedSize: 200
  }),
  withPropsOnChange(
    (props, nextProps) => !_.isEqual(props.location, nextProps.location),
    ({ location }) => {
      const query = qs.parse(location.search.split('?')[1])
      return {
        query: {
          lang: query.lang || 'en'
        }
      }
    }
  ),
  withPropsOnChange(
    (props, nextProps) => {
      const isRowsChanged = props.rows.length !== nextProps.rows.length
      const isQueryChanged = !_.isEqual(props.query, nextProps.query)
      return isRowsChanged || isQueryChanged
    },
    ({ rows, query, cacheHeight, forceUpdateList }) => {
      // Call forceUpdateList once at itemCount changed.
      _.delay(() => forceUpdateList())
      return {
        renderItem: ({ style, index }) => {
          const pokemon = rows[index]
          return (
            <div className="row" style={{ ...style }} key={index}>
              <Pokemon
                pokemon={pokemon}
                lang={query.lang}
                onMeasure={({ height }) => cacheHeight(index, height)}
              />
            </div>
          )
        }
      }
    }
  )
)

// Looks like PokeAPI does not provides `Pokemon Sun & Moon` data currently(2018/10/14) ;)
// SEE: https://github.com/PokeAPI/pokeapi/issues/112
const Pokemons = (props) => {
  const {
    query,
    vh,
    rows,
    draftScrollToIndex,
    setDraftScrollToIndex,
    setScrollToIndex,
    scrollToIndex,
    renderItem,
    setListRef,
    itemSize
  } = props

  // Toggle lang.
  let nextLang = 'en'
  if (query.lang === 'en') {
    nextLang = 'ja'
  } else if (query.lang === 'ja') {
    nextLang = 'random'
  } else if (query.lang === 'random') {
    nextLang = 'en'
  }

  const itemCount = rows.length

  return (
    <>
      <div className="c-search-form">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setScrollToIndex(draftScrollToIndex)
          }}
        >
          <label>
            <span style={{ marginRight: 4 }}>No</span>

            <input
              type="number"
              onChange={setDraftScrollToIndex}
              value={draftScrollToIndex}
              style={{width: 40}}
            />
          </label>

          <button
            style={{ marginLeft: 8 }}
            onClick={() => setScrollToIndex(draftScrollToIndex)}
          >
            Go
          </button>
        </form>
      </div>

      <VirtualList
        // Extra props for update list on query changes.
        lang={query.lang}

        // react-tiny-virtual-list props.
        width='100vw'
        height={vh}
        itemCount={itemCount}
        renderItem={renderItem}
        itemSize={itemSize}
        overscanCount={5}
        scrollToIndex={scrollToIndex == null ? null : scrollToIndex - 1}
        ref={setListRef}
      />

      <footer>
        <span>
          <Link to="/load-more">/load-more</Link> |&nbsp;
          <Link to="/images">/images</Link> |&nbsp;
          <Link to={`/pokemons?lang=${nextLang}`} style={{ marginRight: 16 }}>/pokemons?lang={nextLang}</Link>
        </span>
        <span className="c-comment">SEE: <a href='https://pokeapi.co/' target='_blank'>PokéAPI</a> for more Pokemons!</span>
      </footer>
    </>
  )
}

export default enhance(Pokemons)