require('dotenv').config();
const express = require('express');
const { connectDB } = require('./config');

const app = express();
app.use(express.json());

const healthRoute = require('./routes/health');
app.use('/health', healthRoute);

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI)
  .finally(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  });
