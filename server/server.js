const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const checkPort = require('../lib/middlewares/checkPort')
const app = next({dir: '.', dev})
const handle = app.getRequestHandler()

const startServer = () => {
  app
    .prepare()
    .then(() => {
      const server = express()
      if (process.env.NODE_ENV === 'production') {
        server.use((req, res, next) => {
          if (req.hostname === 'localhost' || req.subdomains.length > 0)
            return next()
          res.redirect(301, `https://www.${req.headers.host}${req.url}`)
        })
      }

      server.use(function(req, res, next) {
        res.locals.app = app
        next()
      })

      server.get(
        '/athletes/:slug',
        (req, res) => {
          const actualPage = '/index'
          const queryParams = {id: req.params.slug, ...req.query}
          res.locals.app.render(req, res, actualPage, queryParams)
        }
      )

      server.get('*', (req, res) => {
        return handle(req, res)
      })

      server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
        return server
      })
    })
    .catch((ex) => {
      console.error(ex.stack)
      process.exit(1)
    })
}

checkPort(port)
  .then(() =>
    console.log(`> Server already running on http://localhost:${port}`)
  )
  .catch(() => startServer())

module.exports = startServer
