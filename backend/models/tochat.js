// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI);

// MODEL 
class ToChat extends Model {
    static association(){
        // ToChat.belongsTo({})
    }
};

ToChat.init({
    tobuy_item:{
        type:DataTypes.STRING,
        allowNull:true
    }
}, {
    sequelize,
    modelName: 'ToChat',
    tableName: 'to_chat_list'
});

// EXPORT 
module.exports = ToChat;