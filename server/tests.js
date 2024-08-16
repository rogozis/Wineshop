const mongoose = require('mongoose');
const Wine = require('./Wine');
const server = require('./server'); // Server import

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/wineshop');
});

afterAll(async () => {
    await mongoose.connection.close();
    server.close();
});

// Wine addition part

test('should save new wine to the database and find it', async () => { 
    const newWine = new Wine({
        name: 'Nuala',
        country: 'New Zealand',
        year: 2018,
        category: 'White',
        description: 'Tasty',
        price: 10000,
        id: 10
    });

    const savedWine = await newWine.save();
    expect(savedWine.name).toBe('Nuala');
    expect(savedWine.country).toBe('New Zealand');
    expect(savedWine.year).toBe(2018);
    expect(savedWine.category).toBe('White');
    expect(savedWine.description).toBe('Tasty');
    expect(savedWine.price).toBe(10000);
    expect(savedWine.id).toBe(10);
    
    // Wine finding part
    
    const foundWine = await Wine.find({ name: { $regex: 'Nuala', $options: 'i' } });
    expect(foundWine.length).toBeGreaterThan(0);
});


