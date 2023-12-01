const router = require('express').Router()
const db = require('../models')

//seed data
router.get('/seed', (req, res) => {
    console.log("seeds begin")
    db.Books.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "author": "Emerson Thorne",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
    },
    {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "author": "Seraphina Hartwell",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
    },
    {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "author": "Augustus Blackwood",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
    },
    {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "author": "Cordelia Moonbeam",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
    }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
        .then(res.redirect('/books'))

})

//gets books using our new sexy syntax for await and async
router.get('/', async (req, res) => {
    //goes into Mongo
    const foundBooks = await db.Books.find()
    res.render('index', { books: foundBooks })
})

//SHOW
router.get('/:id', async (req, res) => {
    console.log("controler /books/:id")
    const foundBook = await db.Books.findById(req.params.id)
    res.render('show', { data: foundBook })
})



//sends our exports
module.exports = router
