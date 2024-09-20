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

  it('will return 3 => inputs are floating point whole numbers (1.0 and 2.0)', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('will return 3 => rounding down b\'s floating point fractional number (1.0 and 2.4)', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('will return 3 => rounding down a and b\'s floating point fractional numbers (1.4 and 2.4)', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('will return 4 => rounding up b\'s floating point fractional number (1.0 and 2.5)', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('will return 6 => rounding up a and b\'s floating point fractional numbers (2.6 and 2.5)', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('will return 5 => rounding up a\'s floating point fractional number (2.6 and 2.0)', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('will return 5 => rounding down a and b floating point fractional numbers with trailing 9\'s (2.499999 and 3.499999)', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });

  it('will return 0 => inputs are 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('will return -4 => inputs are -1.6 and -1.7', () => {
    assert.strictEqual(calculateNumber(-1.6, -1.7), -4);
  });

  it('will return -2 => inputs are -1.4 and -1.3', () => {
    assert.strictEqual(calculateNumber(-1.4, -1.3), -2);
  });
});
