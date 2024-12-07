const User = require("../models/UserSchema"); // Adjust the path as necessary

// Create and save a new user
const createUser = async (req, res) => {
  try {
    const { username } = req.body;

    // Validate that the username is provided
    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Create a new user
    const newUser = new User({ username });

    // Save the user to the database
    await newUser.save();

    // Respond with success
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createUser,
};
