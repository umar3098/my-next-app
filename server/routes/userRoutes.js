const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/NameController"); // Adjust path if needed

// Define the route for creating a user
router.post("/add-user", createUser);

module.exports = router;
