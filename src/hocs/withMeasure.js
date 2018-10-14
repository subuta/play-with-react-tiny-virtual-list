import {
  compose,
  lifecycle,
  withProps,
} from 'recompose'
import _ from 'lodash'

import Promise from 'bluebird'

import ResizeObserver from 'resize-observer-polyfill'

export default compose(
  withProps(({ onMeasure = _.noop }) => {
    let ref = null
    let unobserve = _.noop

    let size = { height: 0, width: 0 }

    const ro = new ResizeObserver((entries) => {
      const {contentRect} = _.first(entries)
      const { top, right, bottom, left, height, width } = contentRect
      const paddingBottom = bottom - height
      const paddingRight = right - width
      const clientHeight = top + paddingBottom + height
      const clientWidth = left + paddingRight + width

      size = {
        height: clientHeight,
        width: clientWidth
      }

      onMeasure(size)
    })

    const observe = () => {
      if (!ref) return
      ro.observe(ref)

      const imgs = ref.querySelectorAll('img')

      Promise.map(imgs, (img) => new Promise((resolve) => {
        // Resolve on each image loaded.
        img.onload = () => resolve()
      })).then(() => requestAnimationFrame(() => onMeasure({ ...size, isLoaded: true })))

      return () => {
        ro.unobserve(ref)
        ref = null
      }
    }

    return {
      observe,

      setMeasureRef: (_ref) => {
        ref = _ref
        unobserve = observe()
      },

      unobserve: () => {
        unobserve()
      }
    }
  }),
  lifecycle({
    componentWillUnmount () {
      this.props.unobserve()
    }
  })
)