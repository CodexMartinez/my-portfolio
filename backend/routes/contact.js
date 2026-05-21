const express = require("express");
const router = express.Router();

// POST - Receive contact message
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  // Validate inputs
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, email and message",
    });
  }

  // Log message to console
  console.log("New Contact Message:");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Send success response
  res.status(200).json({
    success: true,
    message: `Thank you ${name}! Your message has been received. I will get back to you soon.`,
  });
});

module.exports = router;