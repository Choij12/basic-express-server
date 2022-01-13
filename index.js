'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const ClothingModel = require('./clothing.js');
const FoodModel = require('./food.js');

console.log(process.env.NODE_ENV);

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const options = process.env.NODE_ENV === 'production' 
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  } : {};

const sequelizeInstance = new Sequelize(DATABASE_URL, options);

const FoodTable = FoodModel(sequelizeInstance, DataTypes);
const ClothingTable = ClothingModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  Food: FoodTable,
  Clothing: ClothingTable,
};