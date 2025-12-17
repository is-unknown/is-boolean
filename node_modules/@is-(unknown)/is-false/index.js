const falseValue = require("false-value")()

module.exports = function (value) {
  return value === falseValue
}