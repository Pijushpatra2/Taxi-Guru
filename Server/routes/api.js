const express = require("express");
const router = express.Router();
const User = require("../model/user");
const { body, validationResult } = require("express-validator");
router.get("/", (req, res) => {
  res.send("Welcome to the API Endpoint homepage");
});

router.post(
  "/createuser",
  [body("email").isEmail(), body("name").isLength({ min: 4 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);
module.exports = router;
