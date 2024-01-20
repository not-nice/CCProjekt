// api-servicse.test.js
const { add } = require('../api-services');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
