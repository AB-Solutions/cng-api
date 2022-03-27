const {encode, decode} = require('string-encode-decode');
const mongoose = require('mongoose');
const mongoURI = decode("a5h%n%m4t4p%j4a2l%v%j5p2k#f2a4g4f%yr4n%s4t%z%f$a%g4f%yr4n%s%t4z4l$g4m%l4e2z$d_q%b5n%k%u4o#v%p4t%x%a5uzv4g5m%l4s4o4i4c2i%f4r4m2h%n4m%f2k%r4x%w4d5ws4m4x#h_e%q4a_r4a4k4l4x4u%f_o2a5k4x4u4g#v%e$j4c%e4l%v%w4i5z%");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`Mongoose DB connected: ${mongoURI}`.bgGreen.black);
    } catch(error) {
        console.log(`Mongoose DB connection failed: ${error}`.bgRed);
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;
