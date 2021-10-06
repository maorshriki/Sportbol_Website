const fields = require("../data/field-items");
const conect = require("../dataBase/db");
const { Order } = require("../data/persist");

conect();

const importData = async () => {
  try {
    await Order.deleteMany({});
    await Order.insertMany(fields);
    console.log("import the fields into mongoos db");
    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
