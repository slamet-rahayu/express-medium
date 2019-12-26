const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.users
const bcrypt = require('bcryptjs')

process.env.SECRET_KEY = 'pssst!'

exports.login = (req, res) => {
    User.findOne({where: {email: req.body.email}}).then(user=>{
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                  })
                res.send(token)
            }
        }else{
            res.status(400).json({error:'User does not exist'})
        }
    }).catch(err=> {
        res.status(400).json({error: err})
    })
}

exports.register = (req, res) => {
    const userData = {
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user=> {
        if(!user) {
            bcrypt.hash(req.body.password, 10, (err, hash)=> {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status: user.email + 'registered'})
                }).catch(err => {
                    res.send('error:' + err)
              })
            })
        }else{
            res.json({error: 'User already registered'})
        }
    }).catch(err=> {
        res.send('error:' + err)
    })
}