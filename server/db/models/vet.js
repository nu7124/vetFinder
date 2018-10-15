const Sequelize = require('sequelize')
const db = require('../db')

const Vet = db.define('vet', {
  image: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  firstName:{
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  address:{
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },

})

module.exports = Vet
