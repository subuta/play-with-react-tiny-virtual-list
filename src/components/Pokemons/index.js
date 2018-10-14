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
  withHandlers,
  withPropsOnChange,
  withStateHandlers
} from 'recompose'

import mapVh from '../../hocs/mapVh'

const POKE_URL_ID_REGEX = 'https://pokeapi.co/api/v2/pokemon/([0-9]+)/'

const enhance = compose(
  hot(module),
  mapVh,
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
  withStateHandlers(
    () => ({
      pokemons: [],
      scrollToIndex: 0,
      draftScrollToIndex: ''
    }),
    {
      setPokemons: () => (pokemons) => ({ pokemons }),
      setDraftScrollToIndex: () => (e) => ({ draftScrollToIndex: e.target.value }),
      setScrollToIndex: () => (value) => ({
        scrollToIndex: _.isNaN(Number(value)) ? 0 : Number(value)
      })
    }
  ),
  lifecycle({
    async componentDidMount () {
      let response = await fetch('https://pokeapi.co/api/v2/pokemon/')

      const pokemons = _.map(response.results, pokemon => {
        pokemon.id = pokemon.url.match(POKE_URL_ID_REGEX)[1]
        return pokemon
      })

      this.props.setPokemons(pokemons)
    }
  }),
  withHandlers(() => {
    let itemSizesCache = []
    let listRef = null
    let refresh = _.noop
    let debouncedForceUpdate = _.noop

    return {
      setListRef: () => (ref) => {
        listRef = ref

        if (listRef) {
          refresh = _.debounce(() => listRef.recomputeSizes(), 1000 / 60)
          debouncedForceUpdate = _.debounce(() => listRef.forceUpdate(), 100)
        }
      },

      setItemSizesCache: () => (index, height) => {
        itemSizesCache[index] = height
        refresh()
      },

      forceUpdate: () => () => {
        if (!listRef) return
        debouncedForceUpdate()
      },

      getItemSizesCache: () => () => itemSizesCache
    }
  }),
  withPropsOnChange(
    (props, nextProps) => {
      const isPokemonsChanged = props.pokemons.length !== nextProps.pokemons.length
      const isQueryChanged = !_.isEqual(props.query, nextProps.query)
      return isPokemonsChanged || isQueryChanged
    },
    ({ pokemons, query, setItemSizesCache, getItemSizesCache, forceUpdate }) => {
      return {
        renderItem: ({ style, index }) => {
          const pokemon = pokemons[index]
          return (
            <div className="Row" style={{ ...style }} key={index}>
              <span style={{ background: 'white', padding: '0 8px' }}>
                Row #{index} name={pokemon.name}
              </span>

              <div style={{ color: 'white' }}>
                <Pokemon
                  pokemon={pokemon}
                  lang={query.lang}
                  onMeasure={({ height }) => {
                    setItemSizesCache(index, height)
                    forceUpdate()
                  }}
                />
              </div>
            </div>
          )
        },

        getItemSizes: () => {
          const filled = _.fill(new Array(pokemons.length), 200)
          const itemSizesCache = getItemSizesCache()
          return _.merge(filled, itemSizesCache)
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
    pokemons,
    draftScrollToIndex,
    setDraftScrollToIndex,
    setScrollToIndex,
    scrollToIndex,
    renderItem,
    setListRef,
    getItemSizes
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

  const itemCount = pokemons.length

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'white',
        padding: 8
      }}>
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
        itemSize={(index) => {
          return getItemSizes()[index] || 200
        }}

        scrollToIndex={scrollToIndex}
        ref={setListRef}
      />

      <footer style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '8px 8px 32px',
        background: 'white',
        color: '#242424',
        textAlign: 'right',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <span>
          <Link to="/images">/images</Link> |&nbsp;
          <Link to={`/pokemons?lang=${nextLang}`} style={{ marginRight: 16 }}>/pokemons?lang={nextLang}</Link>
        </span>
        <span>SEE: <a href='https://pokeapi.co/' target='_blank'>PokéAPI</a> for more Pokemons!</span>
      </footer>
    </>
  )
}

export default enhance(Pokemons)