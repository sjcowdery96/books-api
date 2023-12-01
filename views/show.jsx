/*
Works 12/1
*/


const React = require('react')
const Def = require('./default')


function showBook(book) {
    return (
        <Def>
            <main>
                <h1>{book.data.title}</h1>
                <div>
                    <img src={book.data.imageURL} alt={book.data.title} />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <a href={`/books/${book.data.id}/edit`}>
                    <button className="btn-primary">Edit</button>
                </a>
            </main>

        </Def >
    )
}


module.exports = showBook