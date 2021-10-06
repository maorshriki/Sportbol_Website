//taking form https://express-validator.github.io/docs/
const express = require("express");
const router = express.Router();
const { SignupValid, result } = require("../valid/valid");
const { SigninValid } = require("../valid/valid");
const { Upcontrol } = require("../controlInUp/auth");
const { Incontrol } = require("../controlInUp/auth");
const { Logcontrol } = require("../controlInUp/auth");

router.post("/onSignUp", SignupValid, result, Upcontrol);
router.post("/onSignIn", SigninValid, result, Incontrol);
router.post("/onLogOut", Logcontrol);

module.exports = router;
