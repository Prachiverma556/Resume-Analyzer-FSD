const Resume = require('../models/Resume');

// @desc    Save a new resume analysis
// @route   POST /api/resume/save
const saveResume = async (req, res) => {
  try {
    // We expect this data to come from the frontend/backend parser
    const { filename, name, email, skills, experience, education, extractedText, score, suggestions } = req.body;

    // Create a new database entry
    const newResume = new Resume({
      filename,
      name,
      email,
      skills,
      experience,
      education,
      extractedText,
      score,
      suggestions
    });

    // Save to MongoDB
    const savedResume = await newResume.save();

    res.status(201).json({
      success: true,
      message: "Resume saved successfully!",
      data: savedResult
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error saving resume" });
  }
};

// @desc    Get all resumes (for History page)
// @route   GET /api/resume/all
const getAllResumes = async (req, res) => {
  try {
    // Find all resumes and sort by newest first (-1)
    const resumes = await Resume.find().sort({ uploadDate: -1 });
    
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ message: "Server Error fetching resumes" });
  }
};

module.exports = { saveResume, getAllResumes };