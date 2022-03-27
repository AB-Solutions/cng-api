const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://cng-admin:cng-admin@cng-cluster.obllk.mongodb.net/cng-mongo-db?retryWrites=true&w=majority";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`Mongoose DB connected: ${conn.connection.host}`.bgGreen.black);
    } catch(error) {
        console.log(`Mongoose DB connection failed: ${error}`.bgRed);
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;
