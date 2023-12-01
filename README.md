### Acceptance Criteria
When GETTING the '/' endpoint, then dummy text such as 'Hello world' should be displayed on the page.
When GETTING the /books endpoint, then a JSON array of books should be returned.
When GETTING the /books/some_id endpoint, then a JSON object of a singular book should be returned.
When POSTING to the /books endpoint with information matching the books schema, the book should be added to the database and returned as JSON.
When PUTTING to the /books/some_id endpoint with information matching the books schema, the book should be updated in the database and returned as JSON.
When DELETING at the /books/some_id endpoint, the book should be removed from the database and JSON should be returned saying the delete was successful.
When any of the above errors out, there should be an error message returned as JSON.

# Steps
- Create seed data
- Create basic Server
- Finish CORS
- Finish the controller 