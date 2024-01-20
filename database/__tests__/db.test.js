// db.test.js
const request = require('supertest');
const app = require('../db');

test('GET /db/data returns status 200', async () => {
  const response = await request(app).get('/db/data');
  expect(response.status).toBe(200);
});
