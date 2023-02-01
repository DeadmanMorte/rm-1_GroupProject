// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI);

// MODEL 
class ToBuy extends Model {
    static association(){
        // ToBuy.belongsTo({})
    }
};

ToBuy.init({
    tobuy_item:{
        type:DataTypes.STRING,
        allowNull:true
    }
}, {
    sequelize,
    modelName: 'ToBuy',
    tableName: 'to_buy_list'
});

// EXPORT 
module.exports = ToBuy;