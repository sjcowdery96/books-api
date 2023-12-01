
const React = require('react')
//remember that default react layout...well..this is where we use him!
const Default = require('./default')

function newBook() {
    return (
        <Default>
            <h2>Add a book</h2>
            <form action={`/books`} method="POST">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    defaultValue="Some Book"
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    defaultValue="A book about books"
                />
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    defaultValue="Brandy Pandy"
                />
                <label htmlFor="year">Year</label>
                <input
                    type="number"
                    name="year"
                    id="year"
                    defaultValue={2023}
                />
                <label htmlFor="quantity">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    defaultValue={10}
                />
                <label htmlFor="imageURL">Image</label>
                <input
                    type="text"
                    name="imageURL"
                    id="imageURL"
                    defaultValue="https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?s=1024x1024&w=is&k=20&c=eic0DxSy2AwsGpzs_UNsOly0u3keoPJDYoAi5Zzex9s="
                />
                <input type="submit" />

            </form>
        </Default>
    )
}


module.exports = newBook