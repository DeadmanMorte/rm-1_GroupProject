const tochat = require('express').Router();
const db = require('../models');
const { ToDo, ToChat, ToBuy } = db;
const { Op } = require('sequelize');

// READ
tochat.get('/', async (req,res) => {
    try {
        res.status(200).json
    } catch (error) {
        res.status(500).json(error)
    }
});

// CREATE
tochat.post('/', async(req,res) => {
    try {
        const newChat = await ToChat.create(req.body) 

        res.status(200).json({
            message: 'Successful appendage of tochat!!',
            data: newChat
        })
    } catch (error){
        res.status(500).json(error)
    }
});


// UPDATE
tochat.put('/:id', async (req,res) => {
    try {
        const reChat = await ToChat.update(req.body) 

        res.status(200).json({
            message: 'Successful ammendment of tochat!!',
            data: reChat
        })
    } catch (error) {
        res.status(500).json(error)
    }
});

// DELETE

tochat.delete('/:id', async (req,res) => {
    try {
        const noChat = await ToChat.destroy(req.body) 

        res.status(200).json({
            message: 'Successful abolition of tochat!!',
        })
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = tochat;