// imports the sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db (using env to pass in my username and pw here)
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
