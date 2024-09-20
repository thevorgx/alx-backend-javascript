const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return 3 when type is SUM and inputs are 1 and 2', () => {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
  });

  it('should return 6 when type is SUM and inputs are 1 and 4.8', () => {
    expect(calculateNumber('SUM', 1, 4.8)).to.equal(6);
  });

  it('should return 5 when type is SUM and inputs are 1.2 and 3.7', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });

  it('should return -1 when type is SUBTRACT and inputs are 1 and 2', () => {
    expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
  });

  it('should return -1 when type is SUBTRACT and inputs are 1.4 and 2.2', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 2.2)).to.equal(-1);
  });

  it('should return -1 when type is SUBTRACT and inputs are 1.6 and 2.7', () => {
    expect(calculateNumber('SUBTRACT', 1.6, 2.7)).to.equal(-1);
  });

  it('should return 0 when type is DIVIDE and inputs are 0 and 0', () => {
    expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);
  });

  it('should return "Error" when type is DIVIDE and b is rounded to 0', () => {
    expect(calculateNumber('DIVIDE', 1, 0.1)).to.equal('Error');
  });

  it('should return 1 when type is DIVIDE and inputs are 2 and 2', () => {
    expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
  });

  it('should return "Error" when type is DIVIDE and b is 0', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
});
