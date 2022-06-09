const prisma = require("../utils/prisma");

const createTicket = async (req, res) => {
  const { customerId, screeningId } = req.body;

  const newTicket = await prisma.ticket.create({
    data: {
      customerId,
      screeningId,
    },
  });

  res.json({ data: newTicket });
};

module.exports = {
  createTicket,
};
