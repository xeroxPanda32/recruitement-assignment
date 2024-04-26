const Project = require("../models/project");
const Question = require("../models/question");
const Response = require("../models/response");


// Create a new project
module.exports.createProject = async (req, res) => {
  try {
    const { project_name, project_city, project_type } = req.body;

    // Fetch three questions based on project type
    const questions_id = await Question.find({ type: project_type }, { _id: 1 }).limit(3);
    const questions = questions_id.map(quest => quest._id)

    // Check if questions are available for the project type
    if (questions.length === 0) {
      return res.status(404).send({ message: "Please add some questions for the project first" });
    }

    // Create a new project with the provided details and questions
    const newProject = new Project({
      project_name,
      project_city,
      project_type,
      questions
    });

    // Save the new project
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// Create a new question
module.exports.createQuestion = async (req, res) => {
  try {
    const { question_text, type } = req.body;

    // Create a new question object
    const newQuestion = new Question({
      question_text,
      type

    })

    // Save the new question
    const question = await newQuestion.save();
    res.status(200).send({ message: "question saved", question })
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

}



// Get questions based on project type
module.exports.getQuestions = async (req, res) => { // handle case if p-typ missing
  try {
    const { projectType } = req.params;

    // Check if project type is provided
    if (!projectType) {
      return res.status(404).json({ message: "The project type is not specified" });
    }

    // Find questions for the specified project type
    const questions = await Question.find({ type: projectType });

    // Check if questions are found
    if (questions.length === 0) {
      return res.status(404).json({ message: "No questions found for this project type." });
    }

    res.status(200).json({ questions });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// Upload a response for a question
module.exports.uploadResponse = async (req, res) => {
  try {

    const filesObject = req.files
    const files = filesObject.map((ob) => { return ({ fileName: ob.originalname, url: ob.location }) });

    const { user_id, question_id, response_text } = req.body;

    // Create a new response object
    const newResponse = new Response({
      user_id,
      question_id,
      response_text,
      response_file: files
    });

    // Save the new response
    const savedResponse = await newResponse.save();
    res.status(201).json(savedResponse);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }


}