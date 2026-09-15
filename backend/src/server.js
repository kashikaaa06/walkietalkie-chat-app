const express = require("express");
const app = express();
const env = require("./lib/env.js");  // ✅ Load all env vars
const authroutes = require("./routes/auth.js");
const msg = require("./routes/msg.js");
const path = require("path");
const connectDB = require("./lib/db.js");

const PORT = env.PORT || 3000; 

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authroutes);
app.use("/api/msg", msg);

if (env.NODE_ENV === "production") {  
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*path", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`🚀 Server working on port ${PORT}`);
});