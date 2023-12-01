
const React = require('react')
//remember that default react layout...well..this is where we use him!
const Default = require('./default')


function Edit(book) {
    console.log("EDIT PAGE")
    return (
        <Default>
            <h2>Edit a book</h2>
            <form action={`/books/${book.id}?_method=PUT`} method="POST">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    defaultValue={book.title}
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    defaultValue={book.description}
                />
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    defaultValue={book.author}
                />
                <label htmlFor="year">Year</label>
                <input
                    type="number"
                    name="year"
                    id="year"
                    defaultValue={book.year}
                />
                <label htmlFor="quantity">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    defaultValue={book.quantity}
                />
                <label htmlFor="imageURL">Image</label>
                <input
                    type="text"
                    name="imageURL"
                    id="imageURL"
                    defaultValue={book.imageURL}
                />
                <input type="submit" />

            </form>
        </Default>
    )
}


module.exports = Edit