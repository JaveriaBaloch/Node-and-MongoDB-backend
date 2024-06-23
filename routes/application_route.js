const express = require('express');
const router = express.Router();
const singleStepApplicationController = require('../controller/application_controller');
const SingleStepApplication = require('../models/application_model');
/**
 * @swagger
 * components:
 *   schemas:
 *     SingleStepApplication:
 *       type: object
 *       required:
 *         - applyFor
 *         - fullName
 *         - email
 *         - whatsappNumber
 *         - gender
 *         - instituteName
 *         - fieldOfStudy
 *         - yearOfStudy
 *         - region
 *         - previousExperiences
 *         - bestSkills
 *       properties:
 *         applyFor:
 *           type: string
 *         fullName:
 *           type: string
 *         email:
 *           type: string
 *         whatsappNumber:
 *           type: string
 *         gender:
 *           type: string
 *         instituteName:
 *           type: string
 *         fieldOfStudy:
 *           type: string
 *         yearOfStudy:
 *           type: string
 *         region:
 *           type: string
 *         facebookLink:
 *           type: string
 *         instagramLink:
 *           type: string
 *         linkedinLink:
 *           type: string
 *         previousExperiences:
 *           type: string
 *         bestSkills:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * /api/single-step-applications/apply:
 *   post:
 *     summary: Create a new single-step application
 *     tags: [SingleStepApplication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SingleStepApplication'
 *     responses:
 *       201:
 *         description: The application was successfully created
 *       400:
 *         description: Bad request
 */
router.post('/apply', async (req, res) => {
    try {
        const application = new SingleStepApplication(req.body);
        await application.save();
        res.status(201).send(application);
    } catch (error) {
        res.status(400).send(error);
    }
});

/**
 * @swagger
 * /api/single-step-applications/export:
 *   get:
 *     summary: Retrieve all single-step applications as CSV
 *     tags: [SingleStepApplication]
 *     responses:
 *       200:
 *         description: A CSV file of all applications
 *       500:
 *         description: Internal server error
 */
// GET route for retrieving all single-step applications as CSV
router.get('/export', singleStepApplicationController.getAllApplications);

module.exports = router;