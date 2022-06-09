const prisma = require("../utils/prisma");

const getAllMovies = async (_, res) => {
  const allMovies = await prisma.movie.findMany({
    include: { screenings: true },
  });

  res.json({ data: allMovies });
};

module.exports = {
  getAllMovies,
};
