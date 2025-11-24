const express = require('express');
const router = express.Router();
const { 
  saveResume, 
  getAllResumes, 
  getResumeById, 
  searchResumesBySkill 
} = require('../controllers/resumeController');

// 1. Save a new resume
router.post('/save', saveResume);

// 2. Get all history
router.get('/all', getAllResumes);

// 3. Get one specific resume (New!)
router.get('/detail/:id', getResumeById);

// 4. Search by skill (New!)
router.get('/search/:skill', searchResumesBySkill);

module.exports = router;