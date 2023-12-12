require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const Book = require('./models/books');
async function seed() {
console.log('seed the books')
    // const myBook = new Book({
    //     title: 'Jimmy John',
    //     desription: 'orange',
    //     status: true,
    //   });
    //   myBook.save();
      await Book.create({
        title: 'Jersey  Mike',
        description: 'calico',
        status: true,
      });
      await Book.create({
        title: 'Jersey  Mike',
        description: 'calico',
        status: false,
      });
      console.log('done seeding the books')
      mongoose.disconnect();
}
seed();