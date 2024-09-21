const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let spy;

  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stub.restore();
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM and correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct total', () => {
    sendPaymentRequestToApi(100, 20);
    
    expect(spy.calledOnce).to.be.true;
    expect(spy.firstCall.args[0]).to.equal('The total is: 10');
  });
});
