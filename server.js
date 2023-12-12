'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/books');
const app = express();
app.use(cors());
const Book = require('./models/books')

const PORT = process.env.PORT || 3001;

app.get('/books', async (request, response) => {


  const books = await Book.find({});
  response.json(books);

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
