const getPaymentTokenFromAPI = require('./6-payment_token');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the correct data', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.have.property('data', 'Successful response from the API');
        done();
      })
      .catch((error) => done(error));
  });
});
