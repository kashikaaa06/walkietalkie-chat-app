// controllers/auth.js
const User = require("../models/user.js");
const bcrypt = require("bcrypt.js")
const signup = async (req, res) => {
    const { fullname , email , password} = req.body
    try {
        if(!fullname || !email || !password){
            return res.status(400).json({ message: "All fields are required"})
        }
        if (password.length < 6) {
            return res.status(400).json({message: "password must be atleast 6 chrs"})

        }
        // check if email valid regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message: "Invalid email format"})
        }

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"Email already exits"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)
        const newUser = new User({
            fullname ,
            email,
            password: hashedpassword,

        })
       if(newUser){
        generateToken(newUser._id,res),
        await newUser.save()
        res.status(400).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            email: newUser.email,
            profilePic: newUser.profilePic,

        })
       }

    
    } catch (error) {
        res.status(500).json({ message: "Error occurred while signing up" });
    }
};

const login = async (req, res) => {
    res.send("login endpoint");
};

const logout = async (req, res) => {
    res.send("logout endpoint");
}



module.exports = {
    signup,
    login,
    logout
};