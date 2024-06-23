const MultiStepApplication = require('../models/multistep_model');
const { Parser } = require('json2csv');

exports.getAllApplications = async (req, res) => {
    try {
        const applications = await MultiStepApplication.find({});
        const applicationsData = applications.map(app => app.toObject());

        // Dynamic import for `flat`
        const { flatten } = await import('flat');
        const flattenedApplications = applicationsData.map(app => flatten(app));

        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(flattenedApplications);
        res.header('Content-Type', 'text/csv');
        res.attachment('multi-step-applications.csv');
        return res.send(csv);
    } catch (error) {
        res.status(500).send(error);
    }
};