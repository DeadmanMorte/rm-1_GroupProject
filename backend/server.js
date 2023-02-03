// DEPENDENCIES
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const {Sequelize} = require('sequelize');
const todo = require('./controllers/todoController');
const cors = require('cors');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // may need to be false
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());

try {
    console.log(`Connected on ${process.env.PG_URI}`)
} catch (err) {
    console.log(`Unable to connect cause ${err}`)
}

// ROOT
app.get('/', (req,res) => {
    res.status(200).json({
        message: 'Live and well.'
    })
});

// app.get('*', (req,res) => {
//     res.status(404).render('error404')
// });

// CONTROLLERS
app.use('/tobuy', require('./controllers/tobuyController'));
const todoController = require('./controllers/todoController');
app.use('/todo', todoController);
 app.use('/tochat', require('./controllers/tochatController'));



// LISTEN FOR CONNECTION
app.listen(process.env.PORT, () => {
    console.log(`Linked in on port ${process.env.PORT}!`)
});



