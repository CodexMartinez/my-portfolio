const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "Martin Erasto Mchungwa",
    title: "Data Scientist",
    email: "martinmchungwa69@gmail.com",
    phone: "0712595667",
    location: "Dar es Salaam, Tanzania",
    about:
      "I am a passionate Data Scientist with strong skills in Python, R, Stata, Flask and Django. I love analyzing data, building models and turning raw data into meaningful insights that drive decision making. Currently studying at EASTC University.",
    skills: [
      "Python",
      "R",
      "Stata",
      "Flask",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "Data Analysis",
      "Machine Learning",
      "Data Visualization",
    ],
    education: {
      degree: "Bachelor of Science in Data Science",
      university: "Eastern Africa Statistical Training Centre (EASTC)",
      year: "2022 - 2026",
    },
    socialLinks: {
      github: "https://github.com/martinmchungwa",
      linkedin: "https://linkedin.com/in/martinmchungwa",
    },
  });
});

module.exports = router;