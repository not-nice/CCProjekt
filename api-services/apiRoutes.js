// ApiRoutes.js
const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');

// Set up AWS credentials and region
AWS.config.update({
  accessKeyId: 'ASIARL7AWOA4R3CHC6ZL',
  secretAccessKey: 'Cvhnh90rtAvJrkwLiRAhirxqUQRRi0m/MWFMdBy4',
  region: 'us-east-1',
});

// Create a DynamoDB document client
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Import your API controllers
const dataController = require('./controllers/dataController');

// Define your API routes
router.get('/api/data', dataController.getData);
router.post('/api/data', dataController.createData);
router.put('/api/data/:id', dataController.updateData);
router.delete('/api/data/:id', dataController.deleteData);

// Example of using AWS SDK within a route
router.get('/api/aws/data', async (req, res) => {
  try {
    // Example: Query DynamoDB
    const params = {
      TableName: 'YourDynamoDBTableName',
      KeyConditionExpression: 'id = :id',
      ExpressionAttributeValues: {
        ':id': req.params.id,
      },
    };

    const result = await dynamoDB.query(params).promise();
    res.json(result.Items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Export the router
module.exports = router;
