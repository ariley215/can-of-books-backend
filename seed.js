require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const Book = require('./models/books');
async function seed() {
console.log('seed the books')
    await Book.create({
        title: 'Giovannis Room',
        desription: 'A novel written by James Baldwin, published in 1956. The story is set in Paris and explores complex themes such as identity, sexuality, and societal expectations. The narrative follows an American man named David, who is living in Paris and grappling with his own sexual identity and desires',
        status: true,
      });
 
      await Book.create({
        title: 'The Adventures of Sherlock Holmes',
        description: 'The Adventures of Sherlock Holmes" is a collection of short stories written by Sir Arthur Conan Doyle, featuring the fictional detective Sherlock Holmes. First published in 1892, the stories originally appeared in The Strand Magazine. The collection includes twelve classic tales that showcase Holmes brilliant deductive reasoning and his loyal friend, Dr. John Watson.',
        status: true,
      });
      await Book.create({
        title: 'Lord of the Rings',
        description: 'A classic fantasy trilogy by J.R.R. Tolkien. The story follows Frodo Baggins and his diverse group of companions as they journey to destroy the One Ring and prevent the dark lord Sauron from conquering Middle-earth. The trilogy explores themes of friendship, heroism, and the struggle between good and evil in a richly imagined world.',
        status: false,
      });
      console.log('done seeding the books')
      mongoose.disconnect();
}
seed();