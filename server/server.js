const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wineshop')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Failed to connect to MongoDB', error));

// Data schema
const wineSchema = new mongoose.Schema({
    name: String,
    country: String,
    category: String,
    sugar: String,
    year: Number,
    description: String,
    price: Number
});

const Wine = mongoose.model('Wine', wineSchema);

// Add new wine
async function addNewWine() {
    const newWine = new Wine({
        name: 'Nuala',
        country: 'New Zealand',
        category: 'White',
        sugar: 'Dry',
        year: 2022,
        description: 'Tasty',
        price: 10000
    });

    try {
        const savedWine = await newWine.save();
        console.log('Wine saved:', savedWine);

        // Unit test

        if (savedWine.name === 'Nuala' &&
            savedWine.country === 'New Zealand' &&
            savedWine.category === 'White' &&
            savedWine.sugar === 'Dry' &&
            savedWine.year === 2022 &&
            savedWine.description === 'Tasty' &&
            savedWine.price === 10000) {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
    } catch (error) {
        console.error('Error saving wine:', error);
    }
}

addNewWine();

app.listen(3000, () => {
    console.log('Server started on port 3000');
});