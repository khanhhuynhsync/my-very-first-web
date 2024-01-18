exports.planet = function (req, res) {
    const {planetName} = req.params
    res.render(`planet`, {headTitle: planetName.toUpperCase(), planetName: planetName})
}