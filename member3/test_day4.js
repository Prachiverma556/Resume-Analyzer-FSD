const mongoose = require('mongoose');
const Resume = require('./models/Resume');
require('dotenv').config();

const runSearchTest = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ DB Connected");

  // We will search for "Java" (or you can change this to "Node")
  const keyword = "Java";
  
  console.log(`\n🔍 Searching for candidates with skill: "${keyword}"...`);
  
  const results = await Resume.find({ 
    skills: { $regex: keyword, $options: 'i' } 
  });

  if (results.length > 0) {
    console.log(`✅ Found ${results.length} candidate(s)!`);
    results.forEach(r => console.log(`   - Name: ${r.name}, Skills: ${r.skills}`));
  } else {
    console.log("⚠️ No candidates found with that skill.");
  }

  process.exit();
};

runSearchTest();