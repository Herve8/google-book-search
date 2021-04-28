// The required axios module
import axios from "axios";

export default {
    // API to  retrieve Google books
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    // Saves book to Mongo DB
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Retreives saved books from Mongo DB
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Retrieves book with the given ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes book with the given ID
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};