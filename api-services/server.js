// api-service/server.js

const express = require('express');
const AWS = require('aws-sdk');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up AWS credentials and region
AWS.config.update({
  accessKeyId: 'ASIARL7AWOA4R3CHC6ZL',
  secretAccessKey: 'Cvhnh90rtAvJrkwLiRAhirxqUQRRi0m/MWFMdBy4',
  region: 'us-east-1',
});

// Create a DynamoDB document client
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Define your APIs here

app.get('/api/data', (req, res) => {
  // Replace this with actual data or database interaction
  const data = { message: 'Hello from the API!' };
  res.json(data);
});

// Example of using AWS SDK within a route
app.get('/api/aws/data', async (req, res) => {
  try {
    // Example: Query DynamoDB
    const params = {
      TableName: 'YourDynamoDBTableName',
      KeyConditionExpression: 'id = :id',
      ExpressionAttributeValues: {
        ':id': 'your-id-value', // replace with the actual id value
      },
    };

    const result = await dynamoDB.query(params).promise();
    res.json(result.Items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`API Service is running on http://localhost:${PORT}`);
});

