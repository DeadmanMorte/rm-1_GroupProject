'use strict';

const ToChat = require('../models/tochat');
// import {OBJECT} from frontend

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await ToChat.create({
      tochat_item: `${OBJECT}`,
    })
  },

  async down (queryInterface, Sequelize) {
    await ToChat.destroy({
      where: { tochat_item: `${OBJECT}` }
    });
  }
};
