import express, { Router } from 'express';
const db = require('../models');
const { ToDo } = db;

const todo: Router = express.Router();

// READ
todo.get('/', async(req: any, res: any) => {
    try {
        const foundItems = await ToDo.findAll()
        res.status(200).json(foundItems)
    } catch (error) {
        res.status(500).json(error)
    }
});

todo.get('/:id', async(req: any, res: any) => {
    try {
        const {id} = req.params
        const foundItem = await ToDo.findOne({
            where: {todo_id: `${id}`}
        })
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
});

// CREATE
todo.post('/', async(req: any, res: any) => {
    try {
        const { description } = req.body;
        const newTodo = await ToDo.create(
            { todo_item: `${description}` },
            { fields: ['todo_item'] }
        );
        res.json(newTodo.rows[0]);
        window.location.href = '/';
    } catch (err) {
        res.status(500).json(err.message)
    }
});


// UPDATE
todo.put('/:id', async (req: any, res: any) => {
    try {
        const { description } = req.body;
        const { id } = req.params;
        await ToDo.update(
            { todo_item: `${description}` },
            { where: { todo_id: `${id}` } }
        );
        res.status(200).json({
            message: 'Successful ammendment of todo!!'
        });
    } catch (error) {
        res.status(500).json(error)
    }
});

// DELETE
todo.delete('/:id', async (req: any, res: any) => {
    try {
        const { id } = req.params
        await ToDo.destroy({ where: { todo_id: `${id}` } });

        res.status(200).json({
            message: 'Successful abolition of todo!!',
        })
    } catch (error) {
        res.status(500).json(error)
    }
});

export default todo;

// const todo = require('express').Router();
// const db = require('../models');
// const { ToDo, ToChat, ToBuy } = db;


// // READ
// todo.get('/', async(req,res) => {
//     try {
//         const foundItems = await ToDo.findAll()
//         res.status(200).json(foundItems)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

// todo.get('/:id', async(req,res) => {
//     try {
//         const {id} = req.params
//         const foundItem = await ToDo.findOne({
//             where: {todo_id: `${id}`}
//         })
//         res.status(200).json(foundItem)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

// // CREATE
// todo.post('/', async(req,res) => {
// try{
//     const {description} = req.body;
//     const newTodo = await ToDo.create({
//         todo_item: `${description}`}, { fields: ['todo_item']});
//     res.json(newTodo.rows[0]);
//     window.location = '/'
// } catch (err) {
//     res.status(500).json(err.message)
// }})


// // UPDATE
// todo.put('/:id', async (req,res) => {
//     try {
//         const {description} = req.body;
//         const {id} = req.params
//         const reDo = await ToDo.update({
//         todo_item: `${description}`},
//         {where: {todo_id: `${id}`}
//         }) 

//         res.status(200).json({
//             message: 'Successful ammendment of todo!!'
//         })
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

// // DELETE

// todo.delete('/:id', async (req,res) => {
//     try {
//         const {id} = req.params
//             const noDo = await ToDo.destroy({where: {todo_id: `${id}`}}) 

//         res.status(200).json({
//             message: 'Successful abolition of todo!!',
//         })
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

// module.exports = todo;