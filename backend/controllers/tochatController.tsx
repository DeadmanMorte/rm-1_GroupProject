const tochat = require('express').Router();
const chatdb = require('../models');
const {ToChat} = chatdb;
// const { Op } = require('sequelize');

// READ
tochat.get('/', async (req:any,res:any) => {
    try {
        res.status(200).json
    } catch (error) {
        res.status(500).json(error)
    }
});

// CREATE
tochat.post('/', async(req:any,res:any) => {
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
tochat.put('/:id', async (req:any,res:any) => {
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

tochat.delete('/:id', async (req:any,res:any) => {
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