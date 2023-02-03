'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ToDo.init({
    todo_item: {
        type: DataTypes.STRING,
        primaryKey:true,
        allowNull:false
    },
  }, {
    sequelize,
    modelName: 'ToDo',
    tableName: 'to_do_list',
    timestamps: false
  });
  return ToDo;
};