const router = require('express').Router()
const {User, Vet, Pet} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let allVets=await Vet.findAll()
    res.json(allVets)
  } catch (err) {
    next(err)
  }
})

router.get('/pet/:type', async (req, res, next) => {
  try {
    let pet=await Pet.find({
      where:{
        species:req.params.type
      }
    })
    let allVets = await pet.getVets()
    res.json(allVets)
  } catch (err) {
    next(err)
  }
})
