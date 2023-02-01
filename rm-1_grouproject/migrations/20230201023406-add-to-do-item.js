'use strict';

const ToDo = require('../models/todo');
// import {OBJECT} from frontend

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await ToDo.create({
      todo_item: `${OBJECT}`,
    })
  },

  async down (queryInterface, Sequelize) {
    await ToDo.destroy({
      where: { todo_item: `${OBJECT}` }
    });
  }
};
