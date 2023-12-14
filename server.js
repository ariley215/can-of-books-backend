'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI);
const app = express();
const PORT = process.env.PORT || 3001;
const Book = require('./models/books');
const {readBooks, createBook, deleteBook, updateBook} = require('./handlers');


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('We\'re connected!');
});

app.get('/books', readBooks) 
app.post('/books', createBook)
app.delete('/books/:id', deleteBook)
app.put('/books:id', updateBook)

app.listen(PORT, () => console.log(`listening on ${PORT}`));
