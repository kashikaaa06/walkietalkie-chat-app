const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../lib/utils.js");
const { sendWelcomeEmail } = require("../emails/handler.js"); 
const {ENV} = require("../lib/env.js");
const signup = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullname,
            email,
            password: hashedpassword,
        });

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();

            // ✅ Send welcome email
            try {
                await sendWelcomeEmail({
                    to: newUser.email,
                    name: newUser.fullname,
                });
            } catch (error) {
                console.error("Error sending welcome email:", error);
            }

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
                profilePic: newUser.profilePic || "",
            });
        }

    } catch (error) {
        console.log("Error in signup:", error);
        res.status(500).json({ message: "Error occurred while signing up" });
    }
};

const login = async (req, res) => {
    const { email , password} = req.body 
    if(!email || !password) {
        return res.status(400).json({message : "email and password is required"})
    }
    try {
        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({message: "Invalid credentials"})

        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credentials"})
        }
        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            profilePic: user.profilePic || "",
        })

    }
    catch (error) {
        console.log("Error in login:", error);
        res.status(500).json({ message: "Error occurred while logging in" });
    }
};

const logout = async (req, res) => {
    res.send("logout endpoint");
};

module.exports = {
    signup,
    login,
    logout
};