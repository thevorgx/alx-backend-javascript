const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe('Index page', function() {
  const url = 'http://localhost:7865';

  it('should return status code 200', function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', function(done) {
    request(url, function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should not have an error', function(done) {
    request(url, function(error, response, body) {
      expect(error).to.be.null;
      done();
    });
  });
});
