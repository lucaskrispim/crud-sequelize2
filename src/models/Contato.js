const {Model,DataTypes} = require('sequelize');
const { STRING } = require('sequelize');

class Contato extends Model{
    static init(connection){
        super.init({
            name:DataTypes.STRING,
            phone:DataTypes.STRING,
        },{
            sequelize:connection,
        })
    }
}

module.exports = Contato;