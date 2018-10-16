// App.js
import React from 'react'
import { hot } from 'react-hot-loader'

import Promise from '../../utils/promise'
import fetch from '../../utils/fetch'

import withSize from '../../hocs/withSize'

import _ from 'lodash'

import {
  compose,
  lifecycle,
  withState,
  branch,
  renderComponent
} from 'recompose'

const getPokemonDetail = (id) => new Promise(async (resolve) => {
  const info = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

  const speciesUrl = _.get(info, 'species.url', `https://pokeapi.co/api/v2/pokemon-species/${id}/`)

  const spec = await fetch(speciesUrl)

  const randomLang = _.get(_.sample(spec.names), 'language.name')

  const getLocaled = (collection) => {
    const grouped = _.groupBy(collection, 'language.name')
    const picked = _.pick(grouped, ['ja', 'en', randomLang])
    return _.transform(picked, (result, values, key) => {
      result[key] = _.first(values)
    }, {})
  }

  // Fetch attributes from response.
  const names = getLocaled(spec.names)
  const frontImage = _.get(info, 'sprites.front_default', null)
  const backImage = _.get(info, 'sprites.back_default', null)
  const flavorTexts = getLocaled(spec.flavor_text_entries)

  resolve({
    id,
    frontImage,
    backImage,
    names,
    flavorTexts,
    randomLang
  })
})

const enhance = compose(
  hot(module),
  withSize,
  withState('detail', 'setDetail', null),
  lifecycle({
    componentDidMount () {
      const { pokemon, setDetail, observe } = this.props
      // Keep promise reference for cancel.
      this.promise = getPokemonDetail(pokemon.id).then(detail => setDetail(detail))
    },

    componentWillUnmount () {
      if (this.promise) {
        this.promise.cancel()
      }
    }
  }),
  branch(
    ({ detail }) => !detail,
    renderComponent(() => null),
    _.identity
  )
)

const Pokemon = (props) => {
  const {
    detail = {},
    pokemon,
    setSizeRef
  } = props

  const {
    id,
    names = {},
    flavorTexts = {},
    frontImage,
    backImage
  } = detail

  const lang = props.lang === 'random' ? detail.randomLang : props.lang
  const nameEntry = names[lang] ? names[lang] : names['en']
  const { name } = nameEntry

  const flavorTextEntry = flavorTexts[lang] ? flavorTexts[lang] : flavorTexts['en']
  const { flavor_text, version } = flavorTextEntry

  return (
    <div ref={setSizeRef} style={{color: 'white'}}>
      <p style={{margin: 0}}>
        <span style={{ background: 'white', padding: '0 8px', color: 'black' }}>
          No.{id} name={name} lang={lang}
        </span>
      </p>

      <a href={pokemon.url} target="_blank">
        {/* All images are 96x96 at PokeAPI */}
        <img src={frontImage} style={{minHeight: 96}} alt="" />
        <img src={backImage} style={{minHeight: 96}} alt="" />
      </a>

      <pre style={{
        margin: '0 0 0 8px',
        padding: '0 0 16px',
        wordBreak: 'break-word',
        whiteSpace: 'pre-wrap'
      }}>
        {flavor_text}
        <b>({version.name})</b>
      </pre>
    </div>
  )
}

export default enhance(Pokemon)