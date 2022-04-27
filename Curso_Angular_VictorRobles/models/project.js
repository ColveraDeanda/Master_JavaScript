const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    langs: String,
    year: Number,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
// 'Project' lo tomara como singular y plural (projects) en la BD.
