const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true, // Removes extra spaces
    minlength: 3, // Minimum length of 3 characters
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
