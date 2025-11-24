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

// ... (Your saveResume and getAllResumes code is above here) ...

// @desc    Get a single resume by ID
// @route   GET /api/resume/detail/:id
const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: "Server Error fetching resume" });
  }
};

// @desc    Search resumes by Skill
// @route   GET /api/resume/search/:skill
const searchResumesBySkill = async (req, res) => {
  try {
    const skill = req.params.skill;
    
    // This finds resumes where the 'skills' array contains the search word
    // $regex with 'i' makes it case-insensitive (finds "react" or "REACT")
    const resumes = await Resume.find({ 
      skills: { $regex: skill, $options: 'i' } 
    });

    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ message: "Server Error searching resumes" });
  }
};

module.exports = { 
  saveResume, 
  getAllResumes, 
  getResumeById, 
  searchResumesBySkill 
};