# @eclass/use-side-effect

[![npm](https://img.shields.io/npm/v/@eclass/use-side-effect.svg)](https://www.npmjs.com/package/@eclass/use-side-effect)
[![Build Status](https://travis-ci.org/eclass/scrollmove.svg?branch=master)](https://travis-ci.org/eclass/scrollmove)
[![downloads](https://img.shields.io/npm/dt/@eclass/use-side-effect.svg)](https://www.npmjs.com/package/@eclass/use-side-effect)
[![dependencies](https://img.shields.io/david/eclass/scrollmove.svg)](https://david-dm.org/eclass/scrollmove)
[![devDependency Status](https://img.shields.io/david/dev/eclass/scrollmove.svg)](https://david-dm.org/eclass/scrollmove#info=devDependencies)

> Hook para aplicar un efecto asociado a un objeto

### 🏠 [Homepage](https://github.com/eclass/useSideEffect#readme)

## Prerequisites

- node >=10.16.3

## Install

```sh
npm i @eclass/use-side-effect
```

## Run tests

```sh
npm run test
```

## Example 📖

const [obj, setObj] = useSideEffect({
nombre: "ender",
apellido: "bonnet",
edad: 29
});

`useSideEffect()` receives an initializer parameter and return two elements `[getter, setter]`.

```js
import useSideEffect from "@eclass/use-side-effect";

function App() {
  const [obj, setObj] = useSideEffect({
    name: "pedro",
    age: 29
  });

...
```

### Problem / Resolution

When you have an object in your state and use some effect to update this state could make and infinity loop, with this implementation we compare if your object it's same key/value/order and if is it the same don't update your state again.

## Author

👤 **Ender Bonnet**

- Twitter: [@enBonnet](https://twitter.com/enbonnet)
- Github: [@enBonnet](https://github.com/enbonnet)

## 📝 License

Copyright © 2019 [Ender Bonnet <enbonnet@pm.me> (https://enbonnet.me/)](https://github.com/eclass).<br />
This project is [MIT](https://github.com/eclass/scrollmove/blob/master/LICENSE) licensed.
