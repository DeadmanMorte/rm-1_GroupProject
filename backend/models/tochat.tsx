'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToChat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ToChat.init({
    tochat_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    chat_id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
  }, {
    sequelize,
    modelName: 'ToChat',
    tableName: 'to_chat_list',
    timestamps: false
  });
  return ToChat
}