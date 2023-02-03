'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToBuy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ToBuy.init({
    tobuy_item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tobuy_id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
  }, {
    sequelize,
    modelName: 'ToBuy',
    tableName: 'to_buy_list',
    timestamps: false
  });
  return ToBuy
}