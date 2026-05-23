const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());
app.use(express.static("public", { etag: false }));

// Routes
const projectsRoute = require("./routes/projects");
const profileRoute  = require("./routes/profile");
const contactRoute  = require("./routes/contact");

app.use("/api/projects", projectsRoute);
app.use("/api/profile",  profileRoute);
app.use("/api/contact",  contactRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});