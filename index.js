require('express-group-routes')
const express = require('express')
const app = express()
const port = 8090
const bodyParser = require('body-parser')
const UserController = require('./controller/users')
const AuthController= require('./controller/auth')
const HomeController = require('./controller/articles')
const CategoryController = require('./controller/category')
const CommentController = require('./controller/comments')
const cors = require('cors')
const {authenticated} = require('./middleware')

app.use(express.static('public'));

app.use(bodyParser.json())

app.use(cors())

app.group('/api/v1', (router) => {
    //routing for home
    router.get('/home', HomeController.index)
    router.get('/article/:id', HomeController.show)

    //routing for category
    router.get('/category', CategoryController.index )
    //store category 
    router.post('/category/store', CategoryController.store)

    //routing for latest post
    router.get('/late', HomeController.sort)

    //routing for detail article
    router.get('/detail/:id', HomeController.detail)

    //routing for Users
    router.post('/login', AuthController.login)

    //comment
    router.get('/comment', CommentController.index)
    router.get('/comment/:id', CommentController.show)
    router.post('/comment/store', CommentController.store)
    

})
//non group routing
app.get('/', (req, res) => {
    res.send(`youre on port ${port}`)
})

app.get('/jwt', (req, res) => {
    const token = authenticated
    res.send(token)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))