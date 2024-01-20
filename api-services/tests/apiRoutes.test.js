// apiRoutes.test.js
const request = require('supertest');
const app = require('../apiRoutes');

test('GET /apiRoutes/data returns status 200', async () => {
  const response = await request(app).get('/apiRoutes/data');
  expect(response.status).toBe(200);
});
