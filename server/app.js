const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors()); // By default, this allows all origins

// MongoDB URI (without dotenv for now)
const MONGO_URI =
  "mongodb+srv://umar3098:NmqnVrdCYyVF6eCQ@clustercms.9fxz2.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCMS";

// Database connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Routes
const userRoutes = require("./routes/userRoutes"); // Adjust path if needed
app.use("/api", userRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend is running on port ${PORT}`);
});
