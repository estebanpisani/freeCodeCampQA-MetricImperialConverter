const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
    suite('Integration tests with chai-http', function () {
        // Convert a valid input such as 10L: GET request to /api/convert.
        test('Convert a valid input', function (done) {
            chai
                .request(server)
                .get('/api/convert?input=10L')
                .end(function (err, res) {
                    assert.equal(res.statusCode, 200);
                    assert.equal(res.body.initNum, 10);
                    assert.equal(res.body.initUnit, 'l');
                    assert.equal(res.body.returnNum, 2.64172);
                    assert.equal(res.body.returnUnit, "gal");
                    assert.equal(res.body.string, "10 liters converts to 2.64172 gallons");
                    done();
                });
        });
        // Convert an invalid input such as 32g: GET request to /api/convert.
        // Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
        // Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
        // Convert with no number such as kg: GET request to /api/convert.
    });
});
