// ApiRoutes.js
const express = require('express');
const router = express.Router();

// Import your API controllers
const dataController = require('./controllers/dataController');

// Define your API routes
router.get('/api/data', dataController.getData);
router.post('/api/data', dataController.createData);
router.put('/api/data/:id', dataController.updateData);
router.delete('/api/data/:id', dataController.deleteData);

// Export the router
module.exports = router;
