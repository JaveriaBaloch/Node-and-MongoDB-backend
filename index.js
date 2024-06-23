// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const singleStepApplicationRoutes = require('./routes/application_route');
const multiStepApplicationRoutes = require('./routes/multistep_route');
const setupSwaggerDocs = require('./swagger');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());

// Use single-step application routes
app.use('/api/single-step-applications', singleStepApplicationRoutes);

// Use multi-step application routes
app.use('/api/multi-step-applications', multiStepApplicationRoutes);

// Set up Swagger docs
setupSwaggerDocs(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
