const mongoose = require('mongoose');

const singleStepApplicationSchema = new mongoose.Schema({
    applyFor: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    whatsappNumber: { type: String, required: true },
    gender: { type: String, required: true },
    instituteName: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    yearOfStudy: { type: String, required: true },
    region: { type: String, required: true },
    facebookLink: { type: String, default: '' },
    instagramLink: { type: String, default: '' },
    linkedinLink: { type: String, default: '' },
    previousExperiences: { type: String, required: true },
    bestSkills: { type: [String], required: true }
});

module.exports = mongoose.model('SingleStepApplication', singleStepApplicationSchema);
