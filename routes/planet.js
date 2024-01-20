const express = require('express')
const router = express.Router()

router.get('/:planetName', (req, res) => {
    const {planetName} = req.params
    res.render(`planet`, {headTitle: planetName.toUpperCase(), planetName: planetName})
})

module.exports = router

