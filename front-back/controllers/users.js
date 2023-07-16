const User = require('../models/User')

const login = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        rol: req.body.rol
    })

    User.findOne({username:user.username, password:user.password}, (err, user) => {
        if(!user) {
            res.status(501).send('Usuario inválido')
        }else{
            console.log('OK')
            res.status(200).send({
                name: user.name,
                username: user.username,
                rol: user.rol,
                token
            })
        }
    })
}

const register = (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        rol: req.body.rol
    })
    user.save((err, usr) => {
        err && res.status(500).send(err.message)
        res.status(200).json(usr)
    })
}

module.exports = {login, register}