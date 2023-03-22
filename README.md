# chiaki-cookie-parser

A simple cookie parser for Chiaki.


## Installation

```sh
npm i chiaki-cookie-parser
```


## Usage

```js
import chiaki from "chiaki"
import cookie from "chiaki-cookie-parser"

chaiki("https://example.com")
  .then(cookie)
  .then(({ foo }) => console.log(foo))
```


