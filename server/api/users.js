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

router.get('/faveVets/:userID', async (req, res, next) => {
  try {
    // console.log(req.session.passport.user)
    let user = await User.findById(req.params.userID*1)
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
    let user = await User.findById(req.params.userID*1)
    res.json(favVet)
  } catch (err) {
    next(err)
  }
})





