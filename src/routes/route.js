const express = require('express');
const router = express.Router();
const{ createProject, getQuestions, uploadResponse, createQuestion  } = require('../controllers/controller');
const uploadS3 = require('../config/aws');


// Route to create a new project
router.post('/createproject', createProject); 


// Route to create a new question
router.post('/createquestion', createQuestion) 


// Route to get questions based on project type
router.get('/questions/:projectType', getQuestions );


// Route to upload a response with file uploads using AWS S3
router.post('/response',uploadS3.array('files'), uploadResponse )


module.exports = router;