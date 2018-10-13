import Promise from 'bluebird'

// Set here for enable Promise.cancel()
Promise.config({
  // Enable warnings
  // warnings: true,
  // Enable long stack traces
  // longStackTraces: true,
  // Enable cancellation
  cancellation: true
  // Enable monitoring
  // monitoring: true
})

export default Promise
