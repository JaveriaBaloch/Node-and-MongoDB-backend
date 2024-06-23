const express = require('express');
const router = express.Router();
const multiStepApplicationController = require('../controller/multistep_controller');
const MultiStepApplication = require('../models/multistep_model');

/**
 * @swagger
 * components:
 *   schemas:
 *     MultiStepApplication:
 *       type: object
 *       required:
 *         - applyFor
 *         - personalDetails
 *         - academicDetails
 *         - professionalDetails
 *       properties:
 *         applyFor:
 *           type: string
 *         personalDetails:
 *           type: object
 *           properties:
 *             fullName:
 *               type: string
 *             email:
 *               type: string
 *             whatsappNumber:
 *               type: string
 *             gender:
 *               type: string
 *         academicDetails:
 *           type: object
 *           properties:
 *             instituteName:
 *               type: string
 *             fieldOfStudy:
 *               type: string
 *             yearOfStudy:
 *               type: string
 *             region:
 *               type: string
 *         socialDetails:
 *           type: object
 *           properties:
 *             facebookLink:
 *               type: string
 *             instagramLink:
 *               type: string
 *             linkedinLink:
 *               type: string
 *         professionalDetails:
 *           type: object
 *           properties:
 *             previousExperiences:
 *               type: string
 *             bestSkills:
 *               type: array
 *               items:
 *                 type: string
 */

/**
 * @swagger
 * /api/multi-step-applications/apply:
 *   post:
 *     summary: Create a new multi-step application
 *     tags: [MultiStepApplication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MultiStepApplication'
 *     responses:
 *       201:
 *         description: The application was successfully created
 *       400:
 *         description: Bad request
 */
router.post('/apply', async (req, res) => {
    try {
        const application = new MultiStepApplication(req.body);
        await application.save();
        res.status(201).send(application);
    } catch (error) {
        res.status(400).send(error);
    }
});

/**
 * @swagger
 * /api/multi-step-applications/export:
 *   get:
 *     summary: Retrieve all multi-step applications as CSV
 *     tags: [MultiStepApplication]
 *     responses:
 *       200:
 *         description: A CSV file of all applications
 *       500:
 *         description: Internal server error
 */
// GET route for retrieving all multi-step applications as CSV
router.get('/export', multiStepApplicationController.getAllApplications);

module.exports = router;
