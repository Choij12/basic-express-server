'use strict';
const Clothing = (sequelize, DataTypes) => sequelize.define('Clothing', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Clothing;