const User = require('./user')
const Pet = require('./pet')
const Vet = require('./vet')

User.belongsToMany(Pet, { through: 'UserPet' })

Vet.belongsToMany(Pet, { through: 'VetPet' })


module.exports = {
  User,
  Vet,
  Pet
}
