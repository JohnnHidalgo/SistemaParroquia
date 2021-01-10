'use strict'

const express = require('express')
    //const port = (process.env.PORT || 3000)
const port = (process.env.PORT)

// Inizializations
const app = express()

// settings
app.set('port', port)

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use(require('./routes/document.route'))

app.listen(port, () => {
    console.log("Server running on port 3000");
});
module.exports = app