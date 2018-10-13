// App.js
import React from 'react'
import { hot } from 'react-hot-loader'

import VirtualList from 'react-tiny-virtual-list'

import _ from 'lodash'

import {
  compose,
  lifecycle,
  withState,
  withProps,
  withPropsOnChange
} from 'recompose'

const enhance = compose(
  hot(module),
  withState('vh', 'setVh', 0),
  withState('photoList', 'setPhotoList', []),
  withProps(({ setVh }) => ({
    listen: () => {
      const listener = _.debounce((e) => setVh(window.innerHeight), 300)

      window.addEventListener('resize', listener)

      // Load once.
      listener()

      return () => window.removeEventListener('resize', listener)
    }
  })),
  lifecycle({
    async componentDidMount () {
      this.unlisten = this.props.listen()

      let photoList = await fetch('https://picsum.photos/list').then(res => res.json())

      photoList = _.map(photoList, (photo) => {
        photo.randomSize = _.random(3, 8) * 100
        return photo
      })

      this.props.setPhotoList(photoList)
    },

    componentWillUnmount () {
      this.unlisten && this.unlisten()
    }
  }),
  withPropsOnChange(
    (props, nextProps) => props.photoList.length !== nextProps.photoList.length,
    ({ photoList }) => {
      return {
        renderItem: ({ style, index }) => {
          const photo = photoList[index]
          return (
            <div className="Row" style={{ ...style }} key={index}>
              <span style={{ background: 'white', position: 'absolute', top: 0, left: 0, padding: '0 8px' }}>
                Row #{index} By {photo.author} <small>randomSize={photo.randomSize}</small>
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

const App = ({ photoList, renderItem, vh }) => {
  return (
    <div>
      <style type="text/css">{`
        body {
          background-color: #242424;
          margin: 0;
          font-family: menlo, "andale mono", "courier new", system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
      `}</style>

      <VirtualList
        width='100vw'
        height={vh}
        itemCount={photoList.length}
        renderItem={renderItem}
        itemSize={(index) => photoList[index].randomSize}
      />

      <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: 8, background: 'white', textAlign: 'right' }}>
        SEE: <a href="https://picsum.photos/" target='_blank'>https://picsum.photos/</a> for more images.
      </footer>
    </div>
  )
}

export default enhance(App)