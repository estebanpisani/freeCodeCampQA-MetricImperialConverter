function ConvertHandler() {

  this.getNum = function (input) {
    let result=input;
    return result;
  };

  this.getUnit = function (input) {
    let result=input;
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result = initUnit;
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result=unit;
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case 'l':
        result = initNum * galToL
        break;
      case 'gal':
        result = initNum / galToL
        break;
      case 'lbs':
          result = initNum / lbsToKg
          break;
      case 'kg':
        result = initNum * lbsToKg
        break;
      case 'mi':
          result = initNum * miToKm
          break;
      case 'km':
        result = initNum / miToKm
        break;
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result= `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    return result;
  };

}

module.exports = ConvertHandler;
