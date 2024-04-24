const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question_text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['JEE','NEET','CET'],
    required: true
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
  
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;