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
  withState
} from 'recompose'

import mapVh from '../../hocs/mapVh'

const POKE_URL_ID_REGEX = 'https://pokeapi.co/api/v2/pokemon/([0-9]+)/'

const enhance = compose(
  hot(module),
  mapVh,
  withState('query', 'setQuery', {}),
  withState('pokemons', 'setPokemons', []),
  withPropsOnChange(
    (props, nextProps) => !_.isEqual(props.location, nextProps.location),
    ({ location }) => {
      return {
        query: qs.parse(location.search.split('?')[1])
      }
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
  withPropsOnChange(
    (props, nextProps) => {
      const isPokemonsChanged = props.pokemons.length !== nextProps.pokemons.length
      const isQueryChanged = !_.isEqual(props.query, nextProps.query)
      return isPokemonsChanged || isQueryChanged
    },
    ({ pokemons, query }) => {
      return {
        renderItem: ({ style, index }) => {
          const pokemon = pokemons[index]
          return (
            <div className="Row" style={{ ...style }} key={index}>
              <span style={{ background: 'white', padding: '0 8px' }}>
                Row #{index} name={pokemon.name}
              </span>

              <div style={{color: 'white'}}>
                <Pokemon
                  pokemon={pokemon}
                  lang={query.lang}
                />
              </div>
            </div>
          )
        }
      }
    }
  )
)

const Pokemons = (props) => {
  const {
    query,
    vh,
    pokemons,
    renderItem,
    setRef
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

  return (
    <>
      <VirtualList
        // Extra props for update list on query changes.
        lang={query.lang}
        width='100vw'
        height={vh}
        itemCount={pokemons.length}
        renderItem={renderItem}
        // itemSize={(index) => pokemons[index].randomSize}
        itemSize={224}
        ref={setRef}
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
          <Link to={`/pokemons?lang=${nextLang}`} style={{ marginRight: 16 }}>/pokemons?lang={nextLang}</Link>
          <Link to="/images">/images</Link>
        </span>
        <span>SEE: <a href='https://pokeapi.co/' target='_blank'>PokéAPI</a> for more Pokemons!</span>
      </footer>
    </>
  )
}

export default enhance(Pokemons)