const express = require("express");
const { getAllMovies, createMovie } = require("../controllers/movies");

const router = express.Router();

router.get("/all-movies", getAllMovies);
router.post("/create-movie", createMovie);

module.exports = router;
