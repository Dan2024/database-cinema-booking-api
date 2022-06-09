const express = require("express");
const res = require("express/lib/response");
const {
  getAllMovies,
  createMovie,
  getMovieById,
} = require("../controllers/movies");

const router = express.Router();

router.get("/all-movies", getAllMovies);
router.get("/:id", getMovieById);
router.post("/create-movie", createMovie);

module.exports = router;
