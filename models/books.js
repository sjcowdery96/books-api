const mongoose = require('mongoose')
require('dotenv').config()

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, default: 'The reality- bending adventures of a clandestine service agency in the year 2166' },
    author: { type: String, required: true },
    year: { type: Number, default: 2023 },
    quantity: { type: Number, default: 10 },
    imageURL: { type: String, default: 'http://placekitten.com/350/350' }

}, { toJSON: { virtuals: true } })

bookSchema.methods.showData = function () {
    return `${this.title} was written by ${this.author} in ${this.published_date}. We have ${this.quantity} left in stock`
}

//exports Book
module.exports = mongoose.model('Book', bookSchema)

/*
Working 12/1
*/