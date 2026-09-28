


const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/" ,(req ,res) => {
    res.json({
        message: "Interview AI API is running!",
        status: "sucess"
    });
});

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})