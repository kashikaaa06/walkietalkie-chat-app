const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/api/auth/signup", (req,res) => {
    res.send("signup");
})
app.get("/api/auth/login" , (req,res) => {
    res.send("login");
})
app.get("/api/auth/logout",(req,res)=> {
    res.send("logout");
})
app.listen(PORT, () => {
 console.log(`server working on port ${PORT}`);
})