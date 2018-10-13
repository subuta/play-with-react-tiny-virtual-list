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

const getPokemonDetail = (id, lang = 'en') => {
  return Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
  ]).then(([info, spec]) => {
    // Fetch attributes from response.
    const enName = _.get(info, 'name', '')
    const frontImage = _.get(info, 'sprites.front_default', null)
    const backImage = _.get(info, 'sprites.back_default', null)
    const name = _.get(_.find(spec.names, (name) => name.language.name === lang), 'name', '')
    const flavorText = _.get(_.find(spec.flavor_text_entries, (flavorText) => flavorText.language.name === lang), 'flavor_text', '')

    return {
      id,
      enName,
      frontImage,
      backImage,
      name,
      flavorText
    }
  })
}

const enhance = compose(
  hot(module),
  withState('detail', 'setDetail', null),
  lifecycle({
    componentDidMount () {
      const { id, lang, setDetail } = this.props
      // Keep promise reference for cancel.
      this.promise = getPokemonDetail(id, lang).then(detail => setDetail(detail))
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
    detail = {}
  } = props

  const {
    id,
    enName,
    frontImage,
    backImage,
    name,
    flavorText
  } = detail

  return (
    <div>
      <span>id={id} name={name} enName={enName}</span>
      <img src={frontImage} alt="" />
      <img src={backImage} alt="" />
      <pre>{flavorText}</pre>
    </div>
  )
}

export default enhance(Pokemon)