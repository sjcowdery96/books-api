const React = require('react')
const Def = require('./default')

function books() {
    return (
        <Def>
            <main>
                <h1>BOOKS</h1>
                <div>
                    <img src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="Sample Books" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <a href="/books/new">
                    <button className="btn-primary">Add Book</button>
                </a>
            </main>

        </Def>
    )
}
module.exports = books


