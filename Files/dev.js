// yarn add express http-proxy-middleware compression

const Bundler = require('parcel-bundler')
const express = require('express')
const proxyMiddleware = require('http-proxy-middleware')
const compression = require('compression')

// Proxy
var app = express()
app.use(compression())
var api = process.argv[2] || 'https://google.se'
console.log(`Using api server: ${api}`)
app.use(
  '/api',
  proxyMiddleware({
    target: api,
    changeOrigin: true
  })
)
app.use('/', proxyMiddleware('http://localhost:1234'))
app.listen(3800)

// Bundler
const file = './src/index.html' // Pass an absolute path to the entrypoint here
const options = {} // See options section of api docs, for the possibilities
var bundler = new Bundler(file, options)
server = bundler.serve()
