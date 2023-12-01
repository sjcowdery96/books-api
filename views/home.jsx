const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="https://media.istockphoto.com/id/1354989842/photo/banner-with-books-business-and-education-background-back-to-school-concept.webp?b=1&s=170667a&w=0&k=20&c=sryJ6CANaeQ7vSw9TG_Z6dFb9wGlTdIHDh5_zxkIT5M=" alt="Sample Book" />
                </div>
                <a href="/books">
                    <button className="btn-primary">Books Page</button>
                </a>
            </main>

        </Def>
    )
}


module.exports = home


