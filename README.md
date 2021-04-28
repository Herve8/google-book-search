## Google Books Search

### Overview

A React-based Google Books Search app, created from React components. The application querries and displays google books based on user searches. Integrating the usage of Node, Express and MongoDB so that users can save books to review or purchase later.

This application requires at minimum 2 pages, check out the following mockup images for each page:


Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.


Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

### The back-end

The front-end is connected to a MongoDB database named googlebooks using the mongoose npm package.


Using mongoose, then a Book schema is created.


At a minimum, books have following fields:


title - Title of the book from the Google Books API


authors - The books's author(s) as returned from the Google Books API


description - The book's description as returned from the Google Books API


image - The Book's thumbnail image as returned from the Google Books API


link - The Book's information link as returned from the Google Books API


The following Express routes was added for the app:



/api/books (get) - Returns all saved books as JSON.


/api/books (post) - Used to save a new book to the database.


/api/books/:id (delete) - Used to delete a book from the database by Mongo _id.


* (get) - Loads the single HTML page in client/build/index.html. 


### The front-end


The layout includes two React Components for each page Search and Saved.


CSS framework Bootstrap is used for the page layout.

### Licence: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


### Deployment

Github link: https://github.com/Herve8/google-book-search

Heroku link:

### Demonstration