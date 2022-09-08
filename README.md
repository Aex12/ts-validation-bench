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
```js
[io-ts] valid: {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: { line1: 'asdasd', line2: 'asdasdasd' }
}
[zod] valid: {
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
  1 052 443 ops/s, ±4.06%   | fastest

zod:
  750 607 ops/s, ±0.11%     | 28.68% slower

class-validator wl:
  95 683 ops/s, ±4.40%      | slowest, 90.91% slower

class-validator non-wl:
  112 976 ops/s, ±0.17%     | 89.27% slower
```
