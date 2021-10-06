const express = require("express");
const app = express();
const cor = require("cors");

const PORT = process.env.port || 5000;
const authRoutes = require("./routes/auth");
const conect = require("./dataBase/db");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const productRoutes = require("./routes/productRoutes");

app.use(cor());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
          <h3>Contact Details</h3>
          <ul>
              <li>Name: ${req.body.name}</li>
              <li>Email: ${req.body.email}</li>
          </ul>
          <h3>Message</h3>
          <p>${req.body.message}</p>
          `;
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "eino.stanton@ethereal.email",
        pass: "ZbNsDzmdVtC7yk7p3r",
      },
    });

    let mailOpt = {
      from: "test@testaccount.com",
      to: "eino.stanton@ethereal.email",
      replyTo: "test@testaccount.com",
      subject: "New mail",
      text: req.body.message,
      html: htmlEmail,
    };

    transporter.sendMail(mailOpt, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Mail sent: %s", info.message);
      console.log("mail URL: $s", nodemailer.getTestMessageUrl(info));
    });
  });
});

conect();
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
