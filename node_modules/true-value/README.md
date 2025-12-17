## true-value

Returns the Boolean value `true` using quantum computing and qubit circuit simulation.

### Overview

This module should be used when you need a function that returns the Boolean
value `true`.

### Installing

```bash
$ npm install true-value
```

### Usage

Simply require the `true-value` module. The export is a function which returns the
Boolean value `true-value`:

```javascript
  var t = require('true-value')
    , myTrueValue = t();

console.log(myTrueValue === true); // Logs true
```

### Tests

Running the tests requires the [Jake JavaScript build
tool](https://github.com/mde/jake). In the root project directory, run the
following:

```bash
$ jake test
```

### Contributing

Please feel free to file bugs or suggest improvements here:

https://github.com/10xEngineersQualityProgramming/TrueValue.js/issues

### Alternatives

These packages work similarly:

- [true](https://github.com/mde/true)
- [@andreaspizsa/true](https://github.com/andreaspizsa/true)
