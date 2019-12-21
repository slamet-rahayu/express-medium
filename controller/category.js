const models = require('../models')
const Category = models.categories

exports.index = (req, res) => {
    Category.findAll().then(category=>res.send(category))
}

exports.store = (req, res) => {
    Category.create(req.body)
    .then(cat=> {
        res.send({
            message:'success',
            cat
        })
    })
}

exports.delete = (req, res) => {
    Category.destroy({where: {id: req.params.id}})
    .then(cat=> {
        res.send({
            message:'success',
            cat
        })
    })
}