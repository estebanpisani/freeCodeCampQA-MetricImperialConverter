function ConvertHandler() {

  this.getNum = function (input) {
    let result = parseFloat(input);
    return result;
  };

  this.getUnit = function (input) {
    let result = input.replace(parseFloat(input).toString(), '').toLowerCase();
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result = initUnit;
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit.toLowerCase) {
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

        return result;
    }
  };

    this.convert = function (initNum, initUnit) {
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      let result;
      switch (initUnit.toLowerCase) {
        case 'l':
          result = initNum / galToL
          break;
        case 'gal':
          result = initNum * galToL
          break;
        case 'lbs':
          result = initNum * lbsToKg
          break;
        case 'kg':
          result = initNum / lbsToKg
          break;
        case 'mi':
          result = initNum * miToKm
          break;
        case 'km':
          result = initNum / miToKm
          break;
        default:
          result = undefined;
      }
      return result.toFixed(5);
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
      let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
      return result;
    };

  }

  module.exports = ConvertHandler;