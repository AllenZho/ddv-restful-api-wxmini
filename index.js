var ddvRestFulApi = require('./api.js')
var onAccessKey = require('./lib/onAccessKey.js')
var request = require('./lib/request.js')
module.exports = ddvRestFulApi.getApi(function (api) {
  api.setHeadersPrefix('x-ddv-')
  api.onAccessKey = onAccessKey
  api.request = request
  // eslint-disable-next-line no-undef
  if (typeof define !== 'undefined' && typeof requirejs !== 'undefined') {
    // eslint-disable-next-line no-undef
    define(ddvRestFulApi)
  }
  if (typeof window !== 'undefined' && window.window === window) {
    window.ddvRestFulApi = ddvRestFulApi
  }
})

