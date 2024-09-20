const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('will return 3 => inputs are 1 and 2', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('will return 6 => inputs are 1 and 4.8', () => {
    assert.strictEqual(calculateNumber(1, 4.8), 6);
  });

  it('will return 5 => inputs are 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('will return 6 => inputs are 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
