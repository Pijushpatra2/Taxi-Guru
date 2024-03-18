const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userRequest = require("../model/userRequest.js");
router.get("/", (req, res) => {
  res.send("Welcome to the API Endpoint homepage");
});
router.get("/all-requests", async (req, res) => {
  try {
    const allRequests = await userRequest.find().sort({ dateTime: -1 }).exec();
    console.log(allRequests);
    res.status(200).json(allRequests);
  } catch (error) {
    console.error("Error retrieving requests:", error);
    res.status(500).json({ error: "Failed to retrieve requests" });
  }
});
router.post(
  "/createuserrequest",
  [
    body("firstName").isLength({ min: 3 }),
    body("email").isEmail(),
    body("phoneNumber").isLength({ min: 4 }),
    body("address").isLength({ min: 8 }),
    body("phoneNumber").isMobilePhone(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, phoneNumber, address, journeyType } =
      req.body;
    const newUserRequest = userRequest({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      journeyType,
    });
    try {
      await newUserRequest.save();
      console.log(newUserRequest._id);
      res.status(201).json({
        _id: newUserRequest._id,
      });
    } catch (error) {
      console.log(error, "hehe");
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
);
module.exports = router;
