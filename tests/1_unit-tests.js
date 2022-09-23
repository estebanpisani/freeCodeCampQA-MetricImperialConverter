const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    suite("Function getNum(input)", function () {
        // convertHandler should correctly read a whole number input.
        test('Read whole number input', function (done) {
            let input = '257km';
            assert.equal(convertHandler.getNum(input), 257);
            done();
        });
        // convertHandler should correctly read a decimal number input.
        test('Read decimal number input', function (done) {
            let input = '25.7km';
            assert.equal(convertHandler.getNum(input), 25.7);
            done();
        });
        //TODO convertHandler should correctly read a fractional input.
        test('Read fractional input', function (done) {
            let input = '2/7';
            assert.equal(convertHandler.getNum(input), 2/7);
            done();
        });
        //TODO convertHandler should correctly read a fractional input with a decimal.
        test('Read fractional input w/decimal', function (done) {
            let input = '2/7.5';
            assert.equal(convertHandler.getNum(input), 2/7.5);
            done();
        });
        //TODO convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
        test('Error on a double-fraction', function (done) {
            let input = '3/2/3';
            assert.equal(convertHandler.getNum(input), null);
            done();
        });
        // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
        test('Read no numerical input', function (done) {
            let input = 'km';
            assert.equal(convertHandler.getNum(input), 1);
            done();
        });
    });

});



// convertHandler should correctly read each valid input unit.
// convertHandler should correctly return an error for an invalid input unit.
// convertHandler should return the correct return unit for each valid input unit.
// convertHandler should correctly return the spelled-out string unit for each valid input unit.
// convertHandler should correctly convert gal to L.
// convertHandler should correctly convert L to gal.
// convertHandler should correctly convert mi to km.
// convertHandler should correctly convert km to mi.
// convertHandler should correctly convert lbs to kg.
// convertHandler should correctly convert kg to lbs.