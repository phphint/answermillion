const express = require("express");
const axios = require("axios"); // Ensure axios is required
const router = express.Router();
const WaitingList = require("../models/waitingListModel");

router.post("/waiting-list", async (req, res, next) => {
  try {
    console.log("Request body:", req.body); // Debugging: Log the request body

    const recaptchaToken = req.body.recaptchaToken;
    if (!recaptchaToken) {
      console.log("reCAPTCHA token missing"); // Debugging: Log if token is missing
      return res.status(400).json({ message: "reCAPTCHA token is missing" });
    }

    console.log("Verifying reCAPTCHA token:", recaptchaToken); // Debugging: Log the token being verified
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );

    console.log("reCAPTCHA verification response:", recaptchaResponse.data); // Debugging: Log the verification response

    if (!recaptchaResponse.data.success) {
      console.log("Failed reCAPTCHA verification"); // Debugging: Log failed verification
      return res.status(401).json({ message: "Failed reCAPTCHA verification" });
    }

    const newSignup = new WaitingList({ email: req.body.email });
    await newSignup.save();
    res.status(201).json({ message: "Successfully added to waiting list" });
  } catch (error) {
    console.error("Error in /waiting-list route:", error); // Debugging: Log errors
    if (error.code === 11000) {
      res.status(409).json({ message: "Email already exists in the waiting list" });
    } else {
      next(error);
    }
  }
});

module.exports = router;
