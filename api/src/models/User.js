const {DataTypes} = require('sequelize');

module.exports = function(sequelize) {
    sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        jwt: {
            type: DataTypes.STRING,
            
        }
    })
}