'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  return app.route('/api/convert').get(
    (req,res)=>{
      res.render(process.cwd()+'/views/index',
      {
        initNum: convertHandler.getNum(req.query.input),
        initUnit: convertHandler.getUnit(req.query.input),
        returnNum: convertHandler.convert(req.query.input),
        returnUnit: convertHandler.getReturnUnit(req.query.input),
        string: convertHandler.getString(convertHandler.getNum(req.query.input),convertHandler.getUnit(req.query.input), convertHandler.convert(req.query.input), convertHandler.getReturnUnit(req.query.input))
      }
      )
    }
  );
};
