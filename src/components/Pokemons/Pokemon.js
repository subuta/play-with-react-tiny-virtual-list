// App.js
import React from 'react'
import { hot } from 'react-hot-loader'

import Promise from '../../utils/promise'
import fetch from '../../utils/fetch'

import _ from 'lodash'

import {
  compose,
  lifecycle,
  withState,
  branch,
  renderComponent
} from 'recompose'

const getPokemonDetail = (id) => {
  return Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
  ]).then(([info, spec]) => {
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

    return {
      id,
      frontImage,
      backImage,
      names,
      flavorTexts,
      randomLang
    }
  })
}

const enhance = compose(
  hot(module),
  withState('detail', 'setDetail', null),
  lifecycle({
    componentDidMount () {
      const { pokemon, setDetail } = this.props
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
  } = props

  const {
    id,
    names = {},
    flavorTexts = {},
    frontImage,
    backImage
  } = detail

  const lang = props.lang === 'random' ? detail.randomLang : props.lang
  const { name } = names[lang]

  const flavorText = flavorTexts[lang] ? flavorTexts[lang] : flavorTexts['en']
  const { flavor_text, version } = flavorText

  return (
    <div style={{padding: '8px 0'}}>
      <p style={{margin: 0}}>id={id} name={name} lang={lang}</p>

      <a href={pokemon.url} target="_blank">
        <img src={frontImage} alt="" />
        <img src={backImage} alt="" />
      </a>

      <p style={{margin: 0}}>version={version.name}</p>

      <pre style={{margin: 0, padding: '0 0 16px'}}>
        {flavor_text}
      </pre>
    </div>
  )
}

export default enhance(Pokemon)