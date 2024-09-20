const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 3 when type is SUM and inputs are 1 and 2', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
  });

  it('should return 6 when type is SUM and inputs are 1 and 4.8', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 4.8), 6);
  });

  it('should return 5 when type is SUM and inputs are 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('should return -1 when type is SUBTRACT and inputs are 1 and 2', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 2), -1);
  });

  it('should return -2 when type is SUBTRACT and inputs are 1.4 and 2.2', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.2), -1);
  });

  it('should return 5 when type is SUBTRACT and inputs are 1.6 and 2.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 2.7), -1);
  });

  it('should return 0 when type is DIVIDE and inputs are 0 and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 1), 0);
  });

  it('should return "Error" when type is DIVIDE and b is rounded to 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0.1), 'Error');
  });

  it('should return 1 when type is DIVIDE and inputs are 2 and 2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2, 2), 1);
  });

  it('should return "Error" when type is DIVIDE and b is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
