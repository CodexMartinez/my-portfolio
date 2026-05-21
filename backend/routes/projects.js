const express = require("express");
const router = express.Router();

const projects = [
  {
    id: 1,
    title: "Student Result Management System",
    description:
      "A web application built with Django that allows lecturers to upload student results and students to view their academic performance securely.",
    tags: ["Python", "Django", "HTML", "CSS", "SQLite"],
    github: "https://github.com/martinmchungwa/student-result-system",
    live: "",
  },
  {
    id: 2,
    title: "Personal Budget Tracker",
    description:
      "A Flask web app that helps users track their income and expenses with visual charts and monthly summaries.",
    tags: ["Python", "Flask", "JavaScript", "Chart.js", "SQLite"],
    github: "https://github.com/martinmchungwa/budget-tracker",
    live: "",
  },
  {
    id: 3,
    title: "Data Analysis Dashboard",
    description:
      "A statistical data analysis project using R and Stata to visualize population and economic trends in Tanzania.",
    tags: ["R", "Stata", "Data Analysis", "Visualization"],
    github: "https://github.com/martinmchungwa/data-dashboard",
    live: "",
  },
  {
    id: 4,
    title: "Portfolio API",
    description:
      "A RESTful API built with Node.js and Express that powers this portfolio website, deployed on Render cloud platform.",
    tags: ["Node.js", "Express", "REST API", "Render"],
    github: "https://github.com/martinmchungwa/portfolio-api",
    live: "https://martin-portfolio-api.onrender.com",
  },
];

// GET all projects
router.get("/", (req, res) => {
  res.json(projects);
});

// GET single project by ID
router.get("/:id", (req, res) => {
  const project = projects.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  res.json(project);
});

module.exports = router;