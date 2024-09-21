const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should log the correct total when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    
    expect(spy.calledOnce).to.be.true;
    expect(spy.firstCall.args[0]).to.equal('The total is: 120');
  });

  it('should log the correct total when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    
    expect(spy.calledOnce).to.be.true;
    expect(spy.firstCall.args[0]).to.equal('The total is: 20');
  });
});
