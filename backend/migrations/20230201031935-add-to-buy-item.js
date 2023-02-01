'use strict';

const ToBuy = require('../models/tobuy');
// import {OBJECT} from frontend

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await ToBuy.create({
      tobuy_item: `${OBJECT}`,
    })
  },

  async down (queryInterface, Sequelize) {
    await ToBuy.destroy({
      where: { tobuy_item: `${OBJECT}` }
    });
  }
};

