'use strict'

const db = require('../server/db')
const {User, Vet, Pet} = require('../server/db/models')

const toonavatar = require('cartoon-avatar');
const faker = require('faker');


async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({firstName:"Zack",email: 'zack@email.com', password: '123'}),
    User.create({firstName:"Max",email: 'max@email.com', password: '123'}),
    User.create({firstName:"Jose",email: 'jose@email.com', password: '123'}),
    User.create({firstName:"Brian",email: 'brian@email.com', password: '123'})
  ])

  const vet = await Promise.all([
    Vet.create({image:toonavatar.generate_avatar({ "gender": "female", "id": 1 }), firstName:faker.name.firstName(), address:faker.address.streetAddress()}),
    Vet.create({image:toonavatar.generate_avatar({ "gender": "male", "id": 2 }), firstName:faker.name.firstName(), address:faker.address.streetAddress()}),
    Vet.create({image:toonavatar.generate_avatar({ "gender": "female", "id": 3 }), firstName:faker.name.firstName(), address:faker.address.streetAddress()}),
    Vet.create({image:toonavatar.generate_avatar({ "gender": "male", "id": 4 }), firstName:faker.name.firstName(), address:faker.address.streetAddress()}),
    Vet.create({image:toonavatar.generate_avatar({ "gender": "female", "id": 5 }), firstName:faker.name.firstName(), address:faker.address.streetAddress()}),
    Vet.create({image:toonavatar.generate_avatar({ "gender": "male", "id": 6 }), firstName:faker.name.firstName(), address:faker.address.streetAddress()}),
    Vet.create({image:toonavatar.generate_avatar({ "gender": "female", "id": 7 }), firstName:faker.name.firstName(), address:faker.address.streetAddress()}),
    Vet.create({image:toonavatar.generate_avatar({ "gender": "male", "id": 8 }), firstName:faker.name.firstName(), address:faker.address.streetAddress()}),
  ])

  const pet = await Promise.all([
    Pet.create({species:"Dog"}),
    Pet.create({species:"Cat"}),
    Pet.create({species:"Bird"}),
    Pet.create({species:"Snake"}),
    Pet.create({species:"Hamster"}),
    Pet.create({species:"Tiger"}),
    Pet.create({species:"Lizard"}),
  ])

  await Promise.all([
    vet[0].addPet(pet[0]),
    vet[0].addPet(pet[1]),
    vet[1].addPet(pet[2]),
    vet[2].addPet(pet[3]),
    vet[3].addPet(pet[4]),
    vet[4].addPet(pet[5]),
    vet[4].addPet(pet[6]),
    vet[5].addPet(pet[6]),
    vet[6].addPet(pet[5]),
    vet[7].addPet(pet[7]),
  ])

  await Promise.all([
    users[0].addPet(pet[0]),
    users[0].addPet(pet[1]),
    users[1].addPet(pet[2]),
    users[2].addPet(pet[3]),
    users[3].addPet(pet[4]),
    users[3].addPet(pet[5]),
    users[3].addPet(pet[6]),
    users[1].addPet(pet[6]),
    users[1].addPet(pet[5]),
    users[2].addPet(pet[7]),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
