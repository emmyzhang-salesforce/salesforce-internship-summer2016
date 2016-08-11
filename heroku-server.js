const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))
    const stylesPath = express.static(path.join(__dirname, 'styles'))

    app.use('/public', publicPath)
    app.use('/styles', stylesPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
