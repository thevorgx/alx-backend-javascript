const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
    console.log = sinon.stub();
  });

  afterEach(() => {
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM and correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct total', () => {
    sendPaymentRequestToApi(100, 20);
    
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal('The total is: 120');
  });
});
