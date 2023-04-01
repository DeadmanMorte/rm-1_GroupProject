const tobuy = require('express').Router();
const buydb = require('../models');
const { ToBuy } = buydb;
// const { Op } = require('sequelize');

// READ
tobuy.get('/', async (req:any,res:any) => {
    try {
        res.status(200).json
    } catch (error) {
        res.status(500).json(error)
    }
});

// CREATE
tobuy.post('/', async(req:any,res:any) => {
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
tobuy.put('/:id', async (req:any,res:any) => {
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

tobuy.delete('/:id', async (req:any,res:any) => {
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