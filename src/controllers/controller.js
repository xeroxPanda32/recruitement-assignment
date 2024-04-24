


module.exports.getAllProject = async (req, res) => {
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
  };



  module.exports.getQuestions = async (req, res) => {
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
};

module.exports.uploadResponse = async(req,res)=>{
    try{
      const { url, filename} = req.file;
      const { user_id, question_id, response_text } = req.body;
      const newResponse = new Response({
          user_id,
          question_id,
          response_text,
          response_file : {url :url, filename: filename}
        });
        const savedResponse = await newResponse.save();
        res.status(201).json(savedResponse);
    }
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  
  
  }