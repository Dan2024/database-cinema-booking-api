const prisma = require("../utils/prisma");

const createScreen = async (req, res) => {
  const { number } = req.body;

  const newScreen = await prisma.screen.create({
    data: {
      number,
    },
  });

  res.json({ data: newScreen });
};

module.exports = {
  createScreen,
};
