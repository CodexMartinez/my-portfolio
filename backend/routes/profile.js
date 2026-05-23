const express = require("express");
const router = express.Router();

let profile = {
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
};

// GET profile
router.get("/", (req, res) => {
  res.json(profile);
});

// PUT - Update profile
router.put("/", (req, res) => {
  const {
    name,
    title,
    email,
    phone,
    location,
    about,
    skills,
    education,
    socialLinks,
  } = req.body;

  if (name)        profile.name        = name;
  if (title)       profile.title       = title;
  if (email)       profile.email       = email;
  if (phone)       profile.phone       = phone;
  if (location)    profile.location    = location;
  if (about)       profile.about       = about;
  if (skills)      profile.skills      = skills;
  if (education)   profile.education   = education;
  if (socialLinks) profile.socialLinks = socialLinks;

  res.json({
    success: true,
    message: "Profile updated successfully",
    profile,
  });
});

module.exports = router;