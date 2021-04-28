const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Route to the home page
router.route("/")
  .get(booksController.findAll)
  .post(booksController.save);

// route to book id
router.route("/:id")
  .get(booksController.findOne)
  .delete(booksController.remove);

module.exports = router;