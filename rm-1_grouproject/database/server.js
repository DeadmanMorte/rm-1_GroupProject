// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the name'
    })
})

// CONTROLLERS


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Live' on port: ${process.env.PORT}`)
})