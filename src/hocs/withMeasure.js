import {
  compose,
  lifecycle,
  withProps,
} from 'recompose'
import _ from 'lodash'

import ResizeObserver from 'resize-observer-polyfill'

export default compose(
  withProps(({ onMeasure = _.noop }) => {
    let ref = null
    let unobserve = _.noop

    const ro = new ResizeObserver((entries) => {
      const {contentRect} = _.first(entries)
      const { top, right, bottom, left, height, width } = contentRect
      const paddingBottom = bottom - height
      const paddingRight = right - width
      const clientHeight = top + paddingBottom + height
      const clientWidth = left + paddingRight + width

      const size = {
        height: clientHeight,
        width: clientWidth
      }

      onMeasure(size)
    })

    const observe = () => {
      if (!ref) return
      ro.observe(ref)
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