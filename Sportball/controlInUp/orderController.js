const { OrderDetails } = require("../data/persist");

exports.getOrderDetails = async (req, res) => {
  try {
    const order = await OrderDetails.find({});
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
