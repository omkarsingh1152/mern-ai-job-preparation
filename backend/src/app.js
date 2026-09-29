// Import Express to create our backend application
import express from "express";

// Import CORS to allow requests from other origins
import cors from "cors";

// Create an Express application
const app = express();

// Enable CORS so the frontend can communicate with the backend
app.use(cors());

// Allow the server to receive and parse JSON data
app.use(express.json());

// Create a simple route to check whether the API is running
app.get("/", (req, res) => {
  res.json({
    message: "Interview AI API is running!",
    status: "success",
  });
});

// Export the app so server.js can start it
export default app;