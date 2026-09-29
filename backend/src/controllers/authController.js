
// imports
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// register function
const registerUser = async (req, res) => {
    try {
        const { name, email ,password } = req.body;

        // Validate the input
        if( !name || !email || !password){
            return res.status(400).json({
                message:"All fields are required",
            });
        }

        // check for user if already axists
        const user = await User.findOne({ email });

        
    }
};

