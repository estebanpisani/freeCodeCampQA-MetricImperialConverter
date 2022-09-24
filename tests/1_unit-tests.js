const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    suite("Function getNum", function () {
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
        // convertHandler should correctly read a fractional input.
        test('Read fractional input', function (done) {
            let input = '2/7';
            assert.equal(convertHandler.getNum(input), 2 / 7);
            done();
        });
        // convertHandler should correctly read a fractional input with a decimal.
        test('Read fractional input w/decimal', function (done) {
            let input = '2/7.5';
            assert.equal(convertHandler.getNum(input), 2 / 7.5);
            done();
        });
        // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
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
    suite("Function getUnit, returnUnit & spellOutUnit", function () {
        // convertHandler should correctly read each valid input unit.
        test('Read each valid input unit', function (done) {
            let inputKm = '257km';
            let inputL = '257l';
            let inputLbs = '257lbs';
            let inputGal = '257gal';
            let inputKg = '257kg';
            let inputMi = '257mi';
            assert.equal(convertHandler.getUnit(inputKm), 'km');
            assert.equal(convertHandler.getUnit(inputMi), 'mi');
            assert.equal(convertHandler.getUnit(inputL), 'l');
            assert.equal(convertHandler.getUnit(inputGal), 'gal');
            assert.equal(convertHandler.getUnit(inputLbs), 'lbs');
            assert.equal(convertHandler.getUnit(inputKg), 'kg');
            done();
        });
        // convertHandler should correctly return an error for an invalid input unit.
        test('Error for an invalid input unit', function (done) {
            let input = '25.7hello';
            assert.equal(convertHandler.getUnit(input), null);
            done();
        });
        // convertHandler should return the correct return unit for each valid input unit.
        test('Return correct return unit for each valid input unit', function (done) {
            let inputKm = '257km';
            let inputL = '257l';
            let inputLbs = '257lbs';
            let inputGal = '257gal';
            let inputKg = '257kg';
            let inputMi = '257mi';
            assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit(inputKm)), 'mi');
            assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit(inputMi)), 'km');
            assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit(inputL)), 'gal');
            assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit(inputGal)), 'l');
            assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit(inputLbs)), 'kg');
            assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit(inputKg)), 'lbs');
            done();
        });
        // convertHandler should correctly return the spelled-out string unit for each valid input unit.
        test('Return the spelled-out string unit for each valid input unit', function (done) {
            let inputKm = 'km';
            let inputL = 'l';
            let inputLbs = 'lbs';
            let inputGal = 'gal';
            let inputKg = 'kg';
            let inputMi = 'mi';

            assert.equal(convertHandler.spellOutUnit(inputKm), 'kilometers');
            assert.equal(convertHandler.spellOutUnit(inputL), 'liters');
            assert.equal(convertHandler.spellOutUnit(inputLbs), 'pounds');
            assert.equal(convertHandler.spellOutUnit(inputGal), 'gallons');
            assert.equal(convertHandler.spellOutUnit(inputKg), 'kilograms');
            assert.equal(convertHandler.spellOutUnit(inputMi), 'miles');
            done();
        });
    });
    suite("Function convert", function () {
        // convertHandler should correctly convert gal to L.
        test('convert gal to L', function (done){
        });
        // convertHandler should correctly convert L to gal.
        // convertHandler should correctly convert mi to km.
        // convertHandler should correctly convert km to mi.
        // convertHandler should correctly convert lbs to kg.
        // convertHandler should correctly convert kg to lbs.
    });
});