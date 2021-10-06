const { User } = require("../data/persist");
const { OrderDetails } = require("../data/persist");
const jsonWebToken = require("jsonwebtoken");
const { jwtSecret, jwtExpire } = require("../config/keys");

exports.Logcontrol = async (req, res) => {
  const {
    adedItems,
    userRole,
    userName,
    userEmail,
    purCas,
    inTime,
    OutTime,
    flag,
  } = req.body;
  if (flag === false) {
    const orderDetails = new OrderDetails();
    orderDetails.adedItems = adedItems;
    orderDetails.userRole = userRole;
    orderDetails.userName = userName;
    orderDetails.userEmail = userEmail;
    orderDetails.purCas = purCas;
    orderDetails.inTime = inTime;
    orderDetails.OutTime = OutTime;
    await orderDetails.save();
    res.json({
      userDetRes: {
        adedItems,
        userRole,
        userName,
        userEmail,
        purCas,
        inTime,
        OutTime,
      },
    });
  } else {
    const orders = await OrderDetails.find({});
    res.json({
      orders: orders,
    });
  }
};

exports.Upcontrol = async (req, res) => {
  const { username, email, password } = req.body;

  // check if the user already exists
  const user = await User.findOne({ email: email });
  if (user) {
    return res.status(400).json({
      errorMessage:
        "this email already exists - cant signup with the same email",
    });
  }

  const currentUser = new User();
  currentUser.username = username;
  currentUser.email = email;
  currentUser.password = password;
  await currentUser.save();

  res.json({
    successMessage: "your registration success",
  });
};

exports.Incontrol = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      errorMessage: "user not exists",
    });
  }
  if (user.password !== password) {
    return res.status(400).json({
      errorMessage: "user not exists",
    });
  }

  //create payload obj
  const payload = {
    user: {
      _id: user._id,
    },
  };

  jsonWebToken.sign(
    payload,
    jwtSecret,
    { expiresIn: jwtExpire },
    (err, token) => {
      if (err) console.log("jsonWebToken error: ", err);
      const { _id, username, email, role } = user;
      res.json({
        token,
        user: { _id, username, email, role },
      });
    }
  );
};
