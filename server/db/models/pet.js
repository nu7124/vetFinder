const Sequelize = require('sequelize')
const db = require('../db')

const Pet = db.define('pet', {
  species: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },

})

module.exports = Pet
