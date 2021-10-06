const { body } = require("express-validator");
const { validationResult } = require("express-validator");

// validation taking from https://express-validator.github.io/docs/sanitization.html

exports.SignupValid = [
  body("username")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("All fields required"),
  body("email").isEmail().normalizeEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password as at least 6 characters"),
];

exports.SigninValid = [
  body("email").isEmail().normalizeEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password as at least 6 characters"),
];

exports.result = (req, res, next) => {
  const result = validationResult(req);
  const hasError = result.isEmpty();

  if (!hasError) {
    return res.status(400).json({
      errorMessage: result.array()[0].msg,
    });
  }

  next();
};

// exports.SignupValid = [
//     check('email').isEmail().normalizeEmail().withMessage('Invalid email'),
//     check('password')
//         .isLength({ min: 6 })
//         .withMessage('Password as at least 6 characters'),
// ];

// validation result taking from https://express-validator.github.io/docs/validation-result-api.html
