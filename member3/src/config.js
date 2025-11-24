const mongoose = require('mongoose');

function connectDB(mongoUri) {
  if (!mongoUri) {
    console.log("⚠ No MONGO_URI in .env, skipping DB connection for now");
    return Promise.resolve();
  }

  return mongoose.connect(mongoUri)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log("❌ DB Error:", err));
}

module.exports = { connectDB };
