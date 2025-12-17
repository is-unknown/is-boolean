const trueValue = require("true-value")()

module.exports = function (value) {
  return value === trueValue
}