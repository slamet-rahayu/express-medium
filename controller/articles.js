const models = require('../models')
const User = models.users
const Articles = models.articles
const Category = models.categories

exports.index = (req, res) => {
    Category.findAll({
        include: [{
            model: Articles
        }]
    }).then(users=>res.send(users))
}

exports.show = (req, res) => {
    Category.findOne({
        where: {id: req.params.id},
        include:  [{
            model: Articles,
            include:  [{
                model: User
            }]
        }]
    })
    .then(cat=> res.send(cat))
    .catch(err=>res.send(err))
}

exports.sort = (req, res) => {
    User.findAll({
        include: [{
            model: Articles
        }],
        order: [
            [Articles, 'createdAt', 'desc']
        ]
    }).then(late=> res.send(late))
}

exports.article = (req, res) => {
    Articles.findOne({
        where: {id: req.params.id},
        include:  [{
            model: Category
        }]
    }).then(cat=> res.send(cat))
}

exports.detail = (req, res) => {
    Articles.findOne({
        where: {id: req.params.id},
        include: [{
            model: Category
        }]
    }).then(detail => res.send(detail))
}

exports.delete = (req, res) => {
    Articles.destroy({where: {id: req.params.id}})
    .then(article => {
        res.send({
            message: "success",
            article
        })
    })
}

exports.store = (req, res) => {
    Articles.create(req.body)
    .then(article => {
        res.send({
            message:"success",
            article
        })
    })
}

exports.update = (req,res) => {
    users.update(
        req.body, {where: {id: req.params.id}}
    ).then(article=> {
        res.send({
            message: "success",
            article
        })
    })
}