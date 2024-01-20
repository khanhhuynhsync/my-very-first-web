const bcrypt = require("bcrypt");
exports.first = (req, res, next) => {
    console.info('In the first middleware')
    return next();
}

exports.second = (req, res, next) => {
    console.info('In the second middleware')
    return next();
}

exports.authentication = async (req, res, next) => {
    const userLogin = {
        userName: 'hdk',
        password: 'hdk'
    }
    const {userName, password} = req.session
    if (!userName || !password) {
        res.send('Please login')
    } else {
        const validUser = await bcrypt.compare(userLogin.password, password)
        if (!validUser) {
            res.send('Incorrect password')
        } else {
            next();
        }
    }
}