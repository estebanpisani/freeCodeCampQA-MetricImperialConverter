'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  return app.route('/api/convert').get(
    (req, res) => {
      let initNum = convertHandler.getNum(req.query.input);
      let initUnit = convertHandler.getUnit(req.query.input);
      if (!initNum && !initUnit) {
        res.send("invalid number and unit");
        return;
      } else if (initNum === undefined) {
        res.send("invalid number");
        return;
      } else if (!initUnit) {
        res.send("invalid unit");
        return;
      }
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );
      res.json({ initNum, initUnit, returnNum, returnUnit, string: toString });
    }
  );
};
