const express = require('express');
const Project = require('../models/project');
const Question = require('../models/question');

const router = express.Router();

router.post('/projects', async (req, res) => {
    try {
      const { project_name, project_city, project_type } = req.body;
      const newProject = new Project({
        project_name,
        project_city,
        project_type
      });
      const savedProject = await newProject.save();
      res.status(201).json(savedProject);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


  router.get('/questions/:projectType', async (req, res) => {
    try {
        const { projectType } = req.params;
        const questions = await Question.find({ type: projectType });
        if (questions.length === 0) {
            return res.status(404).json({ message: "No questions found for this project type." });
        }
        console.log(questions);
        res.status(200).json({ questions });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// router.post('/response', (req,res)=>{

// })



module.exports = router;