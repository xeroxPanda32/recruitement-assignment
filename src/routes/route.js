const express = require('express');
const Project = require('../models/project');
const Question = require('../models/question');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudinary/config');
const Response = require('../models/response');
const{ getAllProject, getQuestions, uploadResponse  } = require('../controllers/controller')

const upload = multer({ storage}) // telling to store in storage instance we created in config



router.post('/projects', getAllProject);


  router.get('/questions/:projectType', getQuestions );


router.post('/response',upload.single('response_file'), uploadResponse )



module.exports = router;