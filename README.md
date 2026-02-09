# is-boolean

> Check if a value is a boolean primitive.

## Install

```sh
npm install @is-(unknown)/is-boolean
```

## Usage

```js
const isBoolean = require("@is-(unknown)/is-boolean")
const assert = require("assert-fn")

assert(isBoolean(true))
assert(isBoolean(false))

assert(!isBoolean(new Boolean()))
assert(!isBoolean(42))
assert(!isBoolean("anything else"))
```