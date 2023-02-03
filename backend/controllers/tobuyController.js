const tobuy = require('express').Router();
const db = require('../models');
const { ToDo, ToChat, ToBuy } = db;
const { Op } = require('sequelize');

// READ
tobuy.get('/', async (req,res) => {
    try {
        res.status(200).json
    } catch (error) {
        res.status(500).json(error)
    }
});

// CREATE
tobuy.post('/', async(req,res) => {
    try {
        const newBuy = await ToBuy.create(req.body) 

        res.status(200).json({
            message: 'Successful appendage of tobuy!!',
            data: newBuy
        })
    } catch (error){
        res.status(500).json(error)
    }
});


// UPDATE
tobuy.put('/:id', async (req,res) => {
    try {
        const reBuy = await ToBuy.update(req.body) 

        res.status(200).json({
            message: 'Successful ammendment of tobuy!!',
            data: reBuy
        })
    } catch (error) {
        res.status(500).json(error)
    }
});

// DELETE

tobuy.delete('/:id', async (req,res) => {
    try {
        const noBuy = await ToBuy.destroy(req.body) 

        res.status(200).json({
            message: 'Successful abolition of tobuy!!',
        })
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = tobuy;