const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const projectSchema  = new Schema({
    project_name: { type: String, required: true },
    project_city: { type: String, required: true },
    project_type: { type: String, enum: ['JEE', 'NEET', 'CET'], required: true}
})

const Project = mongoose.model('Project', projectSchema );

module.exports = Project;