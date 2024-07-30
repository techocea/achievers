const express = require("express");
const router = express.Router();
const formSchema = require("../models/RegisterForm");

router.post("/register", async (req, res) => {
  const { name, contact, email, qualification, path, destination, funds } =
    req.body;

  try {
    const newForm = new formSchema({
      name,
      contact,
      email,
      qualification,
      path,
      destination,
      funds,
    });
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    console.log("[FORM_SUBMISSION_POST]: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
