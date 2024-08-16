const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Wine = require('./Wine');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wineshop')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Failed to connect to MongoDB', error));

app.use(express.json());



const server = app.listen(3000, () => {
    console.log('Server started on port 3000');
});

module.exports = server;