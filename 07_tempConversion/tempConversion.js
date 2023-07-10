const convertToCelsius = function(far) {
  return Math.round((5 / 9 * (far - 32)) * 10) / 10;
};

const convertToFahrenheit = function(cel) {
  return Math.round((9 / 5 * cel + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
