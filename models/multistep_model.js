const mongoose = require('mongoose');

const multiStepApplicationSchema = new mongoose.Schema({
    applyFor: { type: String, required: true },
    personalDetails: {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        whatsappNumber: { type: String, required: true },
        gender: { type: String, required: true }
    },
    academicDetails: {
        instituteName: { type: String, required: true },
        fieldOfStudy: { type: String, required: true },
        yearOfStudy: { type: String, required: true },
        region: { type: String, required: true }
    },
    socialDetails: {
        facebookLink: { type: String, default: '' },
        instagramLink: { type: String, default: '' },
        linkedinLink: { type: String, default: '' }
    },
    professionalDetails: {
        previousExperiences: { type: String, required: true },
        bestSkills: { type: [String], required: true }
    }
});

module.exports = mongoose.model('MultiStepApplication', multiStepApplicationSchema);
