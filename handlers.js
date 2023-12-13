const Book = require('./models/books'); 


async function readBooks(request, response) {

  const filterQuery = {};

  if (request.query.title) {
    filterQuery.title = request.query.title;
  }

  const books = await Book.find(filterQuery);

  response.send(books);
}

async function createBook(request, response) {

  try {
    
    if (!request.body.title || !request.body.description || !request.body.status) {
      return response.status(400).send('Title, description, and status are required');
    }


    const newBook = await Book.create(request.body);
    response.send(newBook);

  } catch (error) {

    console.error(error);
    response.status(500).send('Error creating book');
  }

}


async function deleteBook(request, response) {
  const id = request.params.id;

  try {
    await Book.findByIdAndDelete(id);
    response.status(204).send('success');
  } catch (error) {
    console.error(error);
    response.status(404).send(`Unable to delete book with id ${id}`);
  }
}

module.exports = {readBooks, createBook, deleteBook};