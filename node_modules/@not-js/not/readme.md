# Not.js

Returns the negation of a function

## Example

```js

var not = require('@not-js/not')
var t = require('true')
var constant = function(v) {
  return function() {
    return v
  }
}


console.log(not(constant)(false)) // true
console.log(not(constant)(true)) // false
console.log(not(t)()) // false 

```

## Installation

`npm install @not-js/not`