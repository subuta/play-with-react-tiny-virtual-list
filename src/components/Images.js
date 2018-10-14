// App.js
import React from 'react'
import { hot } from 'react-hot-loader'

import { Link } from 'react-router-dom'
import VirtualList from 'react-tiny-virtual-list'

import fetch from '../utils/fetch'

import _ from 'lodash'

import {
  compose,
  lifecycle,
  withState,
  withPropsOnChange
} from 'recompose'

import mapVh from '../hocs/mapVh'

const hasLargeScreen = window.innerWidth >= 576

const enhance = compose(
  hot(module),
  mapVh,
  withState('photos', 'setPhotos', []),
  lifecycle({
    async componentDidMount () {
      let photos = await fetch('https://picsum.photos/list')

      photos = _.map(photos, (photo) => {
        console.log('hasLargeScreen = ', hasLargeScreen)
        if (hasLargeScreen) {
          photo.randomSize = _.random(3, 8) * 100
        } else {
          photo.randomSize = _.random(1, 4) * 100
        }
        return photo
      })

      this.props.setPhotos(photos)
    }
  }),
  withPropsOnChange(
    (props, nextProps) => props.photos.length !== nextProps.photos.length,
    ({ photos }) => {
      return {
        renderItem: ({ style, index }) => {
          const photo = photos[index]
          return (
            <div className="Row" style={{ ...style }} key={index}>
              <span style={{ background: 'white', position: 'absolute', top: 0, left: 0, padding: '0 8px' }}>
                Row #{index} By {photo.author}
                <small>randomSize={photo.randomSize}</small>
              </span>
              <a href={photo.post_url} target="_blank">
                <img src={`https://picsum.photos/${photo.randomSize}?image=${photo.id}`} alt="" />
              </a>
            </div>
          )
        }
      }
    }
  )
)

const Images = ({ photos, renderItem, vh }) => {
  return (
    <>
      <VirtualList
        width='100vw'
        height={vh}
        itemCount={photos.length}
        renderItem={renderItem}
        itemSize={(index) => photos[index].randomSize}
      />

      <footer>
        <Link to="/pokemons">/pokemons</Link>
        <span className="c-credits">SEE: <a href="https://picsum.photos/" target='_blank'>Lorem Picsum</a> for more images.</span>
      </footer>
    </>
  )
}

export default enhance(Images)