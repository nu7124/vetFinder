const router = require('express').Router()
const {User, Vet} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/faveVets/:userId', async (req, res, next) => {
  try {
    // console.log(req.session.passport.user)
    let user = await User.findById(req.params.userId*1)
    // let vet = Vet.findById(req.params.vetId)
    let favVet = await user.getVets()
    res.json(favVet)
  } catch (err) {
    next(err)
  }
})

router.post('/like/:vetId/:userId', async (req, res, next) => {
  try {
    // console.log(req.session.passport.user)
    let user = await User.findById(req.params.userId*1)
    let likedVet = await Vet.findById(req.params.vetId*1)
    user.addVet()
    res.json(favVet)
  } catch (err) {
    next(err)
  }
})





