const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('not-found', {headTitle: '404 NOT FOUND'})
})

module.exports = router