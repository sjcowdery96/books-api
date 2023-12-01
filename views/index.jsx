const React = require('react')
const Def = require('./default')

function index(data) {
    let booksFormatted = data.books.map((book) => {
        return (
            <div className="col-sm-6">
                <h2>
                    <a href={`/books/${book._id}`} >
                        📚 {book.title}
                    </a>
                </h2>
                <p className="text-center">
                    {book.description}
                </p>
                <img src={book.imageURL} alt={book.title} />
                <p className="text-center">
                    Published in {book.year}, by {book.author}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Books to enjoy</h1>
                <div className="row">
                    {booksFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index