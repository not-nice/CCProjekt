// app.test.js
const request = require('supertest');
const app = require('../app');

test('GET /app/data returns status 200', async () => {
  const response = await request(app).get('/app/data');
  expect(response.status).toBe(200);
});
