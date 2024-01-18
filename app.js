// START import routes
const home = require(`./routes/home`)
const planet = require(`./routes/planet`)
const notfound = require(`./routes/notfound`)
// END import routes

// START Setting express
const express = require('express')
const app = express()
const compression = require('compression')
const path = require('path')
const port = 8080
app.set('view engine', 'ejs') // Use ejs with option view engine
app.set('views', path.join(__dirname, '/views')) // Set dynamic path for views folder
app.use(express.static(path.join(__dirname, 'public'))) // Serving static public folder
app.use(compression());
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
// END Setting express

// START Routing
app.get('/', home.home)
app.get(`/planets/:planetName`, planet.planet)
app.get('*', notfound.notfound) // This pattern * should in the last
// END Routing