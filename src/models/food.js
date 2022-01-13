'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Food;