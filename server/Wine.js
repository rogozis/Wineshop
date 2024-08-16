const mongoose = require('mongoose');

// Define the Wine schema
const wineSchema = new mongoose.Schema({
    name: String,
    country: String,
    year: Number,
    description: String,
    price: Number,
    sugar: String,
    category: String,
    id: Number
});

// Export the Wine model

const Wine  = mongoose.model('Wine', wineSchema);

module.exports = Wine;