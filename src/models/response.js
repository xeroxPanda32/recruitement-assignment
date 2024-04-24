const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionnaireResponseSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    question_id: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
    response_text: { type: String, required: true },
    response_file: { type: String } // Storing file path here
});

const QuestionnaireResponse = mongoose.model('QuestionnaireResponse', questionnaireResponseSchema);

module.exports = QuestionnaireResponse;
