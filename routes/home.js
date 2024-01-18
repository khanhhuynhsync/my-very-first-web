exports.home = function (req, res) {
    const planets = ['earth', 'jupiter', 'mars', 'mercury', 'neptune', 'saturn', 'uranus', 'venus']
    const dwarfPlanets = ['pluto', 'ceres', 'makemake', 'haumea', 'eris']
    res.render('home', {headTitle: "Galaxy", planets: planets, dwarfPlanets: dwarfPlanets})
}