const express = require('express');
const router = express.Router();
const { saveResume, getAllResumes } = require('../controllers/resumeController');

// Define the URL paths
router.post('/save', saveResume); // For saving data
router.get('/all', getAllResumes); // For fetching history

module.exports = router;