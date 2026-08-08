const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const authroutes = require("./routes/auth.js");
const msg = require("./routes/msg.js")

app.use("/api/auth",authroutes);
app.use("/api/msg",msg);
app.listen(PORT, () => {
 console.log(`server working on port ${PORT}`);
})