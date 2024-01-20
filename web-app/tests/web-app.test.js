// web-app.test.js
const { add } = require('../web-app');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
