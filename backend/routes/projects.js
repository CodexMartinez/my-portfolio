const express = require("express");
const router = express.Router();

let projects = [
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

// GET single project
router.get("/:id", (req, res) => {
  const project = projects.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  res.json(project);
});

// POST - Add new project
router.post("/", (req, res) => {
  const { title, description, tags, github, live } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      message: "Title and description are required",
    });
  }

  const newProject = {
    id: projects.length > 0
      ? Math.max(...projects.map((p) => p.id)) + 1
      : 1,
    title,
    description,
    tags: tags || [],
    github: github || "",
    live: live || "",
  };

  projects.push(newProject);
  res.status(201).json(newProject);
});

// PUT - Update project
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Project not found" });
  }

  const { title, description, tags, github, live } = req.body;

  projects[index] = {
    ...projects[index],
    title:       title       || projects[index].title,
    description: description || projects[index].description,
    tags:        tags        || projects[index].tags,
    github:      github      !== undefined ? github : projects[index].github,
    live:        live        !== undefined ? live   : projects[index].live,
  };

  res.json(projects[index]);
});

// DELETE - Delete project
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Project not found" });
  }

  projects.splice(index, 1);
  res.json({ message: "Project deleted successfully" });
});

module.exports = router;