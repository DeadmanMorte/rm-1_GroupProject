// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI);

// MODEL 
class ToDo extends Model {
    static association(){
        // Todo.belongsTo({})
    }
};

ToDo.init({
    todo_item:{
        type:DataTypes.STRING,
        allowNull:true
    }
}, {
    sequelize,
    modelName: 'ToDo',
    tableName: 'to_do_list'
});

// EXPORT 
module.exports = ToDo;