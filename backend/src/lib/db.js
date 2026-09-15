const mongoose = require('mongoose');
const env = require('./env.js');

const connectDB = async () => {
    try {
        await mongoose.connect(env.MONGO_URL);
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;