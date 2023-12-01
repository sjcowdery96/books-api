const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Books</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/main.css"></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/books">Books</a>
                        </li>
                        <li>
                            <a href="/books/new">Add Book</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
            <footer className="footer">
                <span>
                    <p>
                        <time dateTime="{{current_year}}-{{current_month}}-{{current_day}}"> &copy; </time>
                        Sam C -- uChicago Bootcamp
                    </p>
                    <a href="#">Terms of Service</a>
                </span>
            </footer>

        </html>
    )
}


module.exports = Def
