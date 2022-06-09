const prisma = require("../utils/prisma");

const getAllMovies = async (_, res) => {
  const allMovies = await prisma.movie.findMany({
    include: { screenings: true },
  });

  res.json({ data: allMovies });
};

const getMovieById = async (req, res, next) => {
  const id = +req.params.id;

  const movie = await prisma.movie.findUnique({
    where: { id: id },
    include: { screenings: true },
  });
  if (!movie) {
    const result = { error: "Movie not found" };
    return res.status(404).json(result);
  }

  res.json({ data: movie });
};

const createMovie = async (req, res) => {
  const { title, runtimeMins } = req.body;

  const newMovie = await prisma.movie.create({
    data: {
      title,
      runtimeMins,
    },
  });

  res.json({ data: newMovie });
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
};
