<h1 align="center"><code>is-boolean</code></h1>
<p>
  <a href="https://www.npmjs.com/package/is-boolean" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/is-boolean.svg">
  </a>
  <a href="https://github.com/is-unknown/is-boolean#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/is-unknown/is-boolean/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://unlicense.org/#the-unlicense" target="_blank">
    <img alt="License: Unlicense" src="https://img.shields.io/github/license/is-unknown/is-boolean" />
  </a>
</p>

> Check if a value is a boolean primitive.

### 🏠 [Homepage](https://github.com/is-unknown/is-boolean#readme)

## Install

```sh
npm install
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
## Author

👤 **10x'y Made Ventures**

* Website: https://10xengineersqualityprogramming.github.io
* Github: [@is-unknown](https://github.com/is-unknown)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/is-unknown/is-boolean/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2025 [10x'y Made Ventures](https://github.com/is-unknown).<br />
This project is [Unlicense](https://unlicense.org/#the-unlicense) licensed.