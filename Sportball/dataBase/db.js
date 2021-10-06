const mongose = require("mongoose");

const conect = async () => {
  try {
    await mongose.connect(
      "mongodb+srv://fields-user:field1234@cluster0.igpt0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("db conection success");
  } catch (err) {
    console.log(err);
  }
};
module.exports = conect;
