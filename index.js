const path = require('path')
const express = require('express')

const app = express()

const DEFAULT_PORT = 3000 || process.env.PORT

app.use(express.static('dist'))

app.listen(DEFAULT_PORT, () => {
    console.log('TRAGK app is listening on', DEFAULT_PORT)
})
