const User = require('./user')
const Pet = require('./pet')
const Vet = require('./vet')

User.hasMany(Pet)
Pet.belongsTo(User)
Vet.hasMany(Pet)


module.exports = {
  User,
  Vet,
  Pet
}
