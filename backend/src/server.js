

// Imports
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

// PORT setup
const PORT = process.env.PORT || 5000;

// Start the backend server
const startServer = async () => {
  try {
    // Connect to MongoDB 
    await connectDB();

    // Start listening for incoming HTTP requests
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

// Run the server startup function
startServer();