function fractionHandler(input) {
  let numbers = input.split('/');
  if (numbers.length > 2) {
    return false;
  }
  return numbers;
}

function splitNumUnit(input) {
  let num = input.match(/[.\d\/]+/g) || ["1"];
  console.log("num", num);
  let str = input.match(/[a-zA-Z]+/g) || [""];
  console.log("str", str);
  return [num[0], str[0]];
}

function ConvertHandler() {

  this.getNum = function (input) {
    let result = splitNumUnit(input)[0];

    let nums = fractionHandler(result);
    if (!nums) {
      return undefined;
    }
    let num1 = nums[0];
    let num2 = nums[1] || "1";

    result = parseFloat(num1) / parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      return undefined;
    }
    return result;
  };

  this.getUnit = function (input) {
    let result = splitNumUnit(input)[1].toLowerCase();
    switch (result) {
      case "km":
        return "km";
      case "gal":
        return "gal";
      case "lbs":
        return "lbs";
      case "mi":
        return "mi";
      case "l":
        return "L";
      case "kg":
        return "kg";
      default:
        return undefined;
    }
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case 'L':
        result = "gal";
        break;
      case 'gal':
        result = "L";
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
      case 'L':
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
      case 'L':
        result = (initNum / galToL).toFixed(5);
        break;
      case 'gal':
        result = (initNum * galToL).toFixed(5);
        break;
      case 'lbs':
        result = (initNum * lbsToKg).toFixed(5);
        break;
      case 'kg':
        result = (initNum / lbsToKg).toFixed(5);
        break;
      case 'mi':
        result = (initNum * miToKm).toFixed(5);
        break;
      case 'km':
        result = (initNum / miToKm).toFixed(5);
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