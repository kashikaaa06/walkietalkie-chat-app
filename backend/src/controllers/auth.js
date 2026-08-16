// controllers/auth.js

const signup = async (req, res) => {
    res.send("signup endpoint");
};

const login = async (req, res) => {
    res.send("login endpoint");
};

const logout = async (req, res) => {
    res.send("logout endpoint");
};


module.exports = {
    signup,
    login,
    logout
};