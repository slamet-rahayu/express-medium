const models = require('../models')
const User = models.users
const Articles = models.articles
const Category = models.categories

exports.index = (req, res) => {
    User.findAll().then(users=>res.send(users))
}

exports.show = (req, res) => {
    Category.findOne({
        where: {id: req.params.id},
        include:  [{
            model: Articles
        }]
    }).then(cat=> res.send(cat))
}