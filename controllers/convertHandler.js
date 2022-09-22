function ConvertHandler() {

  this.getNum = function (input) {
    let result = parseFloat(input);
    return result || 1;
  };

  this.getUnit = function (input) {
    let result = input.replace(parseFloat(input).toString(), '').toLowerCase();
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case 'l':
        result = "gal";
        break;
      case 'gal':
        result = "l";
        break;
      case 'lbs':
        result = "kg";
        break;
      case 'kg':
        result = "lbs";
        break;
      case 'mi':
        result = "km";
        break;
      case 'km':
        result = "mi";
        break;
      default:
        result = undefined;
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit) {
      case 'l':
        result = "liters";
        break;
      case 'gal':
        result = "gallons";
        break;
      case 'lbs':
        result = "pounds";
        break;
      case 'kg':
        result = "kilograms";
        break;
      case 'mi':
        result = "miles";
        break;
      case 'km':
        result = "kilometers"
        break;
      default:
        result = undefined;        
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case 'l':
        result = (initNum / galToL).toFixed(5)
        break;
      case 'gal':
        result = (initNum * galToL).toFixed(5)
        break;
      case 'lbs':
        result = (initNum * lbsToKg).toFixed(5)
        break;
      case 'kg':
        result = (initNum / lbsToKg).toFixed(5)
        break;
      case 'mi':
        result = (initNum * miToKm).toFixed(5)
        break;
      case 'km':
        result = (initNum / miToKm).toFixed(5)
        break;
      default:
        result = undefined;
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };

}

module.exports = ConvertHandler;