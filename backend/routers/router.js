const express = require('express')
const router = express.Router()
const { register,login } = require('../controllers/userController')

// router.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/index.html')
// })

router.post('/register', register)
router.post('/login', login)

module.exports = router