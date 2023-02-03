const todo = require('express').Router();
const db = require('../models');
const { ToDo, ToChat, ToBuy } = db;
const { Op } = require('sequelize');


// READ
todo.get('/', async(req,res) => {
    try {
        const foundItem = await ToDo.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
});

// CREATE
todo.post('/', async(req,res) => {
//     try {
//         const newDo = await ToDo.create(req.body) 

//         res.status(200).json({
//             message: 'Successful appendage of todo!!',
//             data: newDo
//         })
//     } catch (error){
//         res.status(500).json(error)
//     }
// });
try{

    const {description} = req.body;
    const newTodo = await ToDo.create({
        todo_item: `${description}`});
    res.json(newTodo.rows[0]);
    window.location = '/'
} catch (err) {
    console.error(err.message)
}})


// UPDATE
todo.put('/:id', async (req,res) => {
    try {
        const reDo = await ToDo.update(req.body) 

        res.status(200).json({
            message: 'Successful ammendment of todo!!',
            data: reDo
        })
    } catch (error) {
        res.status(500).json(error)
    }
});

// DELETE

todo.delete('/:id', async (req,res) => {
    try {
        const noDo = await ToDo.destroy(req.body) 

        res.status(200).json({
            message: 'Successful abolition of todo!!',
        })
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = todo;