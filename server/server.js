const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Wine = require('./Wine');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wineshop')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Failed to connect to MongoDB', error));

app.use(express.json());

// Search routes

app.get('/api/wines', async (req, res) => {
    const query = req.query.q;
    try {
        const wines = await Wine.find({ name: { $regex: query, $options: 'i' } });
        res.json(wines);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch wines' });
    }
});

// Server port

const server = app.listen(3000, () => {
    console.log('Server started on port ${server.address().port}');
});

module.exports = server;