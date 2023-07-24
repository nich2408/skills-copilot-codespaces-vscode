// Create web server

// Import modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Import routes
const comments = require("./routes/api/comments");

// Create express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use("/api/comments", comments);

// Handle production
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

// Set port
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));