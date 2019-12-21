const models = require('../models')
const Comment = models.comment
const User = models.users
const Article = models.articles

exports.index = (req, res) => {
    Comment.findAll({
        include: [{
            model: Article,
            include: [{
                model: User
            }]
        }]
    }).then(comment => {
        res.send(comment)
    })
}

exports.show = (req, res) => {
    Comment.findOne({
        where: {article_id: req.params.id},
        include: [{
            model: Article,
            include: [{
                model: User
            }]
        }]
    }).then(comment => {
        res.send(comment)
    })
}

exports.store = (req, res) => {
    Comment.create(req.body)
    .then(comment =>{
        res.send({
            message: "success",
            comment
        })
    })
}

exports.delete = (req, res) => {
    Comment.destroy({where: {id: req.params.id}})
    .then(comment => {
        res.send({
            message: "success",
            comment
        })
    })
}

exports.update = (req,res) => {
    Comment.update(
        req.body, {where: {id: req.params.id}}
    ).then(comment=> {
        res.send({
            message: "success",
            comment
        })
    })
}


// exports.show = (req, res) => {
//     Category.findOne({
//         where: {id: req.params.id},
//         include:  [{
//             model: Articles,
//             include:  [{
//                 model: User
//             }]
//         }]
//     }).then(cat=> res.send(cat))
// }
