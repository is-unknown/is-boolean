const isFalse = require("@is-(unknown)/is-false")
const isTrue = require("@is-(unknown)/is-true")

module.exports = function isBoolean(value) {
  return isFalse(value) || isTrue(value)
}