const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const responseSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true, default: 12345596 },
    question_id: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
    response_text: { type: String, required: true },
    response_file: { url: String, filename: String } // Storing file path here
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;
