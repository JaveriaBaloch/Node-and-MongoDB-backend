const SingleStepApplication = require('../models/application_model');
const { Parser } = require('json2csv');

exports.getAllApplications = async (req, res) => {
    try {
        const applications = await SingleStepApplication.find({});
        const applicationsData = applications.map(app => app.toObject());

        console.log("Applications Data:", applicationsData); // Log data for debugging

        // Dynamic import for `flat`
        const { flatten } = await import('flat');
        const flattenedApplications = applicationsData.map(app => flatten(app));

        console.log("Flattened Applications:", flattenedApplications); // Log flattened data for debugging

        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(flattenedApplications);
        res.header('Content-Type', 'text/csv');
        res.attachment('single-step-applications.csv');
        return res.send(csv);
    } catch (error) {
        res.status(500).send(error);
    }
};