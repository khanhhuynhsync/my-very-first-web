const homeRoutes = require(`./routes/home`)
const planetDetailRoutes = require(`./routes/planet-detail`)
const notfoundRoutes = require(`./routes/notfound`)
const practiceRoutes = require(`./routes/practice`)
const apiRoutes = require(`./routes/api`)
const middlewares = require(`./middlewares/middleware`)
const compression = require('compression')
const session = require('express-session')
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 8080

// START Setting express
app.set('view engine', 'ejs') // Use ejs with option view engine
app.set('views', path.join(__dirname, '/views')) // Set dynamic path for views folder
app.use(express.static(path.join(__dirname, 'public'))) // Serve static public folder
app.use(compression()) // Compress response data
app.use(express.json()) // Extract body to JSON
app.use(morgan(':remote-addr - :remote-user [:date] :method :url HTTP/:http-version :status (Response-time :response-time ms) (Total-time :total-time ms)')) // Log API activities
app.use(session({
    secret: 'hdk1992662',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        expires: 60000 // Expire cookie after 60s
    }
}))
app.listen(port, () => console.info(`Running on port ${port}`))
// END Setting express

// START middleware
app.use(middlewares.first)
app.use(middlewares.second)
// END middleware

// START Routing
app.use('/', homeRoutes)
app.use('/api', apiRoutes)
app.use('/practice', practiceRoutes)
app.use(`/planets`, planetDetailRoutes)
app.use('*', notfoundRoutes) // This pattern * should in the last
// END Routing