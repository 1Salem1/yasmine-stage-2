const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  duree: { type: Number, required: true },
  competences: [{ type: String }],
  email: { type: String, required: true },
  companyName: { type: String, required: true },
});

module.exports = mongoose.model('Stage', stageSchema);
