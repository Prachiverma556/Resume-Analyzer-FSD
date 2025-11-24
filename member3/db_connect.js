const mongoose = require('mongoose');
require('dotenv').config(); // Load the password from .env file

const connectDB = async () => {
    try {
        // Try to connect to MongoDB
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`\n✅ SUCCESS: MongoDB Connected!`);
        console.log(`Host: ${conn.connection.host}\n`);
    } catch (error) {
        console.error(`\n❌ FAILED: Could not connect to MongoDB.`);
        console.error(`Error: ${error.message}\n`);
        process.exit(1);
    }
};

// This line allows us to run this file directly in terminal to test it
if (require.main === module) {
    connectDB();
}

module.exports = connectDB;