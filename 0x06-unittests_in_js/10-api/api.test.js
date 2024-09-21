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
});

describe('Cart page', function() {
  const baseUrl = 'http://localhost:7865/cart/';

  it('should return status code 200 for a valid cart id', function(done) {
    request(baseUrl + '12', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for a non-numeric cart id', function(done) {
    request(baseUrl + 'hello', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
describe('/available_payments', function() {
  it('should return correct payment methods obj', function(done) {
    request('http://localhost:7865/available_payments', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('/login', function() {
  it('should return Welcome message with userName', function(done) {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' },
    };
    
    request(options, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
