import {
  compose,
  lifecycle,
  withProps,
} from 'recompose'
import _ from 'lodash'

export default compose(
  withProps(() => {
    let ref = null

    return {
      setRefForForceUpdate: (_ref) => {
        ref = _ref
      },

      forceUpdate: () => {
        if (!ref) return
        ref.forceUpdate()
      }
    }
  }),
  lifecycle({
    componentWillUnmount () {
      // Clear old ref.
      this.props.setRef(null)
    }
  })
)