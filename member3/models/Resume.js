const mongoose = require('mongoose');

// This Schema acts like a "Form" that data must fill out
const ResumeSchema = new mongoose.Schema({
  
  // 1. File Details
  filename: { 
    type: String, 
    required: true 
  },

  // 2. Extracted Personal Info
  name: { 
    type: String, 
    default: "Unknown" 
  },
  email: { 
    type: String 
  },

  // 3. Extracted Skills (Stored as a list)
  skills: {
    type: [String], // Example: ["Java", "React", "MongoDB"]
    default: []
  },

  // 4. Resume Content
  experience: { type: String }, // Raw text of experience section
  education: { type: String },  // Raw text of education section
  
  // 5. Analysis Data (Member 1 will calculate these)
  score: { 
    type: Number, 
    default: 0 
  },
  suggestions: {
    type: [String], // Example: ["Add more projects", "Check spelling"]
    default: []
  },

  // 6. Backup Data
  extractedText: { 
    type: String, 
    required: true // We save the full text just in case parsing fails
  },

  // 7. Metadata (Auto-generated)
  uploadDate: { 
    type: Date, 
    default: Date.now 
  }
});

// Compile the schema into a Model
const Resume = mongoose.model('Resume', ResumeSchema);

module.exports = Resume;