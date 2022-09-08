[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Used input
```js
const user = {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  age: 23,
  address: {
    line1: 'asdasd',
    line2: 'asdasdasd',
    line3: 'asdasd',
  },
}
```

## Expected output
```js
const validUser = {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: {
    line1: 'asdasd',
    line2: 'asdasdasd',
  },
}
```

## Results
```
[io-ts] valid: {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: { line1: 'asdasd', line2: 'asdasdasd' }
}
[class-validator non-wl] valid User {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  age: 23,
  address: { line1: 'asdasd', line2: 'asdasdasd', line3: 'asdasd' }
}
[class-validator wl] valid User {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: {}
}
```

## Benchmarks
```
io-ts:
  1 343 252 ops/s, ±0.11%   | fastest

class-validator wl:
  101 559 ops/s, ±1.97%     | slowest, 92.44% slower

class-validator non-wl:
  113 699 ops/s, ±0.23%     | 91.54% slower

```
