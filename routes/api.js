const express = require('express')
const {v4: uuid} = require("uuid");
const bcrypt = require('bcrypt')
const {authentication} = require("../middlewares/middleware");
const router = express.Router()

router.get('/', authentication, async (req, res) => {
    const {name, country, userName} = req.session
    res.send(`${userName} login successfully, Hi ${name} from ${country}`)
})
router.post('/', async (req, res) => {
    const {name, country, userName, password} = req.body
    req.session.name = `${name}`
    req.session.country = `${country}`
    req.session.userName = userName
    req.session.password = await bcrypt.hash(password, 12)
    res.send(`${name} from ${country} ${userName} ${password} ${uuid()}`)
})

module.exports = router