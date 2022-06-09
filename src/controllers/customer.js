const prisma = require("../utils/prisma");

const createCustomer = async (req, res) => {
  const { name, phone, email } = req.body;

  const createdCustomer = await prisma.customer.create({
    data: {
      name,
      contact: {
        create: {
          phone,
          email,
        },
      },
    },

    include: {
      contact: true,
    },
  });

  res.json({ data: createdCustomer });
};

const updateCustomer = async (req, res) => {
  const id = +req.params.id;
  const { name, phone, email } = req.body;

  const updatedCustomer = await prisma.customer.update({
    where: {
      id,
    },
    data: {
      name,
      contact: {
        update: {
          phone,
          email,
        },
      },
    },
    include: {
      contact: true,
    },
  });

  res.json({ data: updatedCustomer });
};

module.exports = {
  createCustomer,
  updateCustomer,
};
