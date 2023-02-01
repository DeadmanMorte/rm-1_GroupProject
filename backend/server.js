// DEPENDENCIES
const express = require('express');
const app = express();
const {Sequelize} = require('sequelize');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // may need to be false

// ROOT
app.get('/', (req,res) => {
    res.status(200).json({
        message: 'Live and well.'
    })
});

app.get('*', (req,res) => {
    res.status(404).render('error404')
});

// CONTROLLERS


// LISTEN FOR CONNECTION
app.listen(process.env.PORT, () => {
    console.log(`Connected on port ${process.env.PORT}!`)
});



