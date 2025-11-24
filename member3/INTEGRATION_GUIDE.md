```markdown
# 🔌 Integration Steps for Member 1

Bro, here is how you merge my code into the main server:

1. **Copy Folders:**
   - Copy my `models` folder -> Paste into `final-project/server/`
   - Copy my `controllers` folder -> Paste into `final-project/server/`
   - Copy my `routes` folder -> Paste into `final-project/server/`

2. **Install Dependencies:**
   Make sure the main server has Mongoose installed:
   `npm install mongoose dotenv`

3. **Update `server.js`:**
   Add these lines to your main `server.js` file:

   ```javascript
   // 1. Connect Database
   const connectDB = require('./config/db'); 
   connectDB();

   // 2. Load Routes
   app.use('/api/resume', require('./routes/resumeRoutes'));