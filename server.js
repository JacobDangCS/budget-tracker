const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions');
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(cors('http://localhost:3001'));
}

app.use('/api/v1/transactions', transactions);

if (process.env.NODE_ENV === 'production') {
    app.use(express.urlencoded({ extended: false }));
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'https://jd-budget-tracker-frontend.onrender.com/');
        next();
    });
    app.use(
        cors({
            origin: ["https://jd-budget-tracker-frontend.onrender.com/"],
            headers: ["Content-Type"],
            credentials: true,
            methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
        })
    )
}

const PORT = process.env.PORT || 3002

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));