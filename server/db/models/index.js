const User = require('./user')
const Pet = require('./pet')
const Vet = require('./vet')

User.belongsToMany(Pet, { through: 'UserPet' })
User.belongsToMany(Vet, { through: 'UserVet' })

Vet.belongsToMany(Pet, { through: 'VetPet' })
Vet.belongsToMany(User, { through: 'VetUser' })

Pet.hasMany(Vet)


module.exports = {
  User,
  Vet,
  Pet
}
