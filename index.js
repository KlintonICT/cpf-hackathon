const path = require('path')
const express = require('express')

const app = express()

const DEFAULT_PORT = 3000 || process.env.port || process.env.PORT

// app.use(express.static('dist'))
app.get('/', (req, res) => {
  res.json({
    msg: 'Hello',
  })
})

app.listen(DEFAULT_PORT, () => {
    console.log('TRAGK app is listening on', DEFAULT_PORT)
})