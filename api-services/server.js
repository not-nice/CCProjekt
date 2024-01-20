// api-service/server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define your APIs here

app.get('/api/data', (req, res) => {
  // Replace this with actual data or database interaction
  const data = { message: 'Hello from the API!' };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`API Service is running on http://localhost:${PORT}`);
});

