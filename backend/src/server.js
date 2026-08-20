const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const authroutes = require("./routes/auth.js");
const msg = require("./routes/msg.js");
const path = require("path");
const connectDB = require("./lib/db.js");


connectDB();

app.use(express.json());
app.use("/api/auth", authroutes);
app.use("/api/msg", msg);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*path", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`🚀 Server working on port ${PORT}`);
});