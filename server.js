const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Defining the middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Define an environment variable called NODE_ENV and set its value to "production"
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes defined here
app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
  