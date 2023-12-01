// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//crack open some of that React stuff with those jsx files
// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.json())

//if we navigate to /places we render our file from ./controllers/places
const booksController = require('./controllers/books-controller.js')
//uses the controller on the /breads path
app.use('/books', booksController)

//app.use('/places', require('./controllers/places'))

//our homepage is defined here with the home page jsx file
app.get('/', (req, res) => {
    console.log("server /")
    res.render('home')
})

//the * in this case means...anything else
//so if we get anything other than / (or places) as a path, return 404 jsx file
app.get('*', (req, res) => {
    //for some reason, I am getting this pathing OFTEN in my console logs
    console.log("server *")
    res.render('error404')
})
//throw that tthaaang on the port
app.listen(process.env.PORT)



/*
Paste stuff here

 */