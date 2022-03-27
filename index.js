

const colors = require('colors');
console.log('Hello World !!'.red.underline);
const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenvConfig = require('dotenv').config();
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler)

app.listen(port,() => {
    console.log('Server started at port : ', port);
});