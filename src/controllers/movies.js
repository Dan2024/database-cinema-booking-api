const prisma = require("../utils/prisma");

const getAllMovies = async (_, res) => {
  const allMovies = await prisma.movie.findMany({
    include: { screenings: true },
  });

  res.json({ data: allMovies });
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
  createMovie,
};
