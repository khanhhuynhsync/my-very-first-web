const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const planets = ['earth', 'jupiter', 'mars', 'mercury', 'neptune', 'saturn', 'uranus', 'venus']
    const dwarfPlanets = ['pluto', 'ceres', 'makemake', 'haumea', 'eris']
    res.render('home', {headTitle: "Galaxy", planets: planets, dwarfPlanets: dwarfPlanets})
})

module.exports = router