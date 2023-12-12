'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
const Book = require('./models/books');

app.get('/books', async(request, response) => {
  const filterQuery = {};

  if (request.query.title) {
    filterQuery.title= request.query.title;
  }

  const books = await Book.find(filterQuery);

  response.json(books);
  // response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
