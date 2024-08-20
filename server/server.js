const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Wine = require('./Wine');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wineshop')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Failed to connect to MongoDB', error));

app.use(express.json());
app.use(cors());

// Wine addition function

async function addNewWine(wineData) {
    const newWine = new Wine(wineData);

    try {
        const savedWine = await newWine.save();
        console.log('Wine saved:', savedWine);
        return savedWine
    } catch (error) {
        console.error('Failed to save wine:', error);
        throw error;
        
    }
}

// Exact wine addition template

const template = {
    name: 'Colterenzio Pfefferer',
    country: 'Italy',
    year: 2020,
    description: 'Taste',
    price: 10000,
    sugar: 'Semi-dry',
    category: 'White',
    id: 100
}



// Wine search function

async function searchWines(query) {
    try {
        const wines = await Wine.find(query);
        if (wines.length > 0) {
            console.log('Wines found:', wines);
            return wines;
        } else {
            console.log('No wines found');
            return [];
        }
            
    } catch (error) {
        console.error('Failed to search wines:', error);
        throw error;
    }
}

// Wine deletion function

async function deleteWine(id) {
    try {
        const result = await Wine.deleteOne({ id: id });
        if (result.deletedCount > 0) {
            console.log('Wine deleted', id);   
        } else {
            console.log('Wine not found', id);
        }
    } catch (error) {
        console.error('Failed to delete wine:', error);
        throw error;
    }
}

// Function execution

// (async () => {
//     await addNewWine(template);
// })();

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
    console.log(`Server started on port ${server.address().port}`);
});

module.exports = server;