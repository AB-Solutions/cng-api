const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongoose DB connected: ${conn.connection.host}`.bgGreen.black);
    } catch(error) {
        console.log(`Mongoose DB connection failed: ${error}`.bgRed);
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;
