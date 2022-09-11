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

## Actual outputs
### validUser
```js
> [io-ts] valid: {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: { line1: 'asdasd', line2: 'asdasdasd' }
}
> [zod] valid: {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: { line1: 'asdasd', line2: 'asdasdasd' }
}
> [typebox check] valid: {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: { line1: 'asdasd', line2: 'asdasdasd' }
}
> [typebox cast] valid: {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: { line1: 'asdasd', line2: 'asdasdasd' }
}
```
### extrapropsUser:
```js
> [io-ts] valid: {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: { line1: 'asdasd', line2: 'asdasdasd' }
}
> [zod] valid: {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: { line1: 'asdasd', line2: 'asdasdasd' }
}
> [typebox check] not-valid: [
  {
    type: 24,
    schema: {
      additionalProperties: false,
      type: 'object',
      properties: [Object],
      required: [Array],
      [Symbol(TypeBox.Kind)]: 'Object'
    },
    path: '/age',
    value: 23,
    message: 'Unexpected property'
  },
  {
    type: 24,
    schema: {
      additionalProperties: false,
      type: 'object',
      properties: [Object],
      required: [Array],
      [Symbol(TypeBox.Modifier)]: 'Optional',
      [Symbol(TypeBox.Kind)]: 'Object'
    },
    path: '/address/line3',
    value: 'asdasd',
    message: 'Unexpected property'
  }
]
> [typebox cast] valid: {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: { line1: 'asdasd', line2: 'asdasdasd' }
}
```

### invalidUser
```js
invalidUser:
> [io-ts] not-valid: [
  {
    key: '',
    type: ExactType {
      name: '{| id: UUID, name: string, address: ({| line1: string, line2: string |} | undefined) |}',
      is: [Function (anonymous)],
      validate: [Function (anonymous)],
      encode: [Function (anonymous)],
      decode: [Function: bound ],
      type: [InterfaceType],
      _tag: 'ExactType'
    },
    actual: {
      id: 'non-valid-uuid',
      name: 'eduardo',
      age: 23,
      address: [Object]
    }
  },
  {
    key: 'id',
    type: RefinementType {
      name: 'UUID',
      is: [Function (anonymous)],
      validate: [Function (anonymous)],
      encode: [Function: identity],
      decode: [Function: bound ],
      type: [StringType],
      predicate: [Function (anonymous)],
      _tag: 'RefinementType'
    },
    actual: 'non-valid-uuid'
  }
]
> [zod] not-valid: ZodError: [
  {
    "validation": "uuid",
    "code": "invalid_string",
    "message": "Invalid uuid",
    "path": [
      "id"
    ]
  }
]
    at handleResult (/home/aex12/stuff/proyectos/alexcaston/testing-fp-ts/node_modules/.pnpm/zod@3.19.0/node_modules/zod/lib/types.js:29:23)
    at ZodObject.safeParse (/home/aex12/stuff/proyectos/alexcaston/testing-fp-ts/node_modules/.pnpm/zod@3.19.0/node_modules/zod/lib/types.js:140:16)
    at ZodObject.parse (/home/aex12/stuff/proyectos/alexcaston/testing-fp-ts/node_modules/.pnpm/zod@3.19.0/node_modules/zod/lib/types.js:120:29)
    at parseZod (/home/aex12/stuff/proyectos/alexcaston/testing-fp-ts/src/index.ts:70:29)
    at Object.<anonymous> (/home/aex12/stuff/proyectos/alexcaston/testing-fp-ts/src/output.ts:25:26)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Module.m._compile (/home/aex12/.nvm/versions/node/v16.14.2/pnpm-global/5/node_modules/.pnpm/ts-node@10.7.0_typescript@4.7.4/node_modules/ts-node/src/index.ts:1455:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Object.require.extensions.<computed> [as .ts] (/home/aex12/.nvm/versions/node/v16.14.2/pnpm-global/5/node_modules/.pnpm/ts-node@10.7.0_typescript@4.7.4/node_modules/ts-node/src/index.ts:1458:12)
    at Module.load (node:internal/modules/cjs/loader:981:32) {
  issues: [
    {
      validation: 'uuid',
      code: 'invalid_string',
      message: 'Invalid uuid',
      path: [Array]
    }
  ],
  addIssue: [Function (anonymous)],
  addIssues: [Function (anonymous)]
}
> [typebox check] not-valid: [
  {
    type: 24,
    schema: {
      additionalProperties: false,
      type: 'object',
      properties: [Object],
      required: [Array],
      [Symbol(TypeBox.Kind)]: 'Object'
    },
    path: '/age',
    value: 23,
    message: 'Unexpected property'
  },
  {
    type: 33,
    schema: {
      format: 'uuid',
      type: 'string',
      [Symbol(TypeBox.Kind)]: 'String'
    },
    path: '/id',
    value: 'non-valid-uuid',
    message: "Expected string to match format 'uuid'"
  },
  {
    type: 24,
    schema: {
      additionalProperties: false,
      type: 'object',
      properties: [Object],
      required: [Array],
      [Symbol(TypeBox.Modifier)]: 'Optional',
      [Symbol(TypeBox.Kind)]: 'Object'
    },
    path: '/address/line3',
    value: 'asdasd',
    message: 'Unexpected property'
  }
]
> [typebox cast] not-valid: [
  {
    type: 33,
    schema: {
      format: 'uuid',
      type: 'string',
      [Symbol(TypeBox.Kind)]: 'String'
    },
    path: '/id',
    value: 'non-valid-uuid',
    message: "Expected string to match format 'uuid'"
  }
]
```
## Benchmarks
### validUser
```
  io-ts:
    1 483 937 ops/s, ±1.69%   | 72.24% slower

  zod:
    794 211 ops/s, ±0.08%     | slowest, 85.14% slower

  typebox check:
    5 344 830 ops/s, ±0.56%   | fastest

  typebox cast:
    1 922 614 ops/s, ±0.08%   | 64.03% slower

  Fastest: typebox check
  Slowest: zod
```
### extrapropsUser
```
  io-ts:
    1 263 169 ops/s, ±0.06%   | fastest

  zod:
    753 384 ops/s, ±0.06%     | 40.36% slower

  typebox check:
    512 222 ops/s, ±0.05%     | slowest, 59.45% slower

  typebox cast:
    1 138 558 ops/s, ±1.65%   | 9.86% slower

  Fastest: io-ts
  Slowest: typebox check
```
### invalidUser
```
  io-ts:
    1 698 578 ops/s, ±0.08%   | fastest

  zod:
    88 304 ops/s, ±1.22%      | 94.8% slower

  typebox check:
    475 861 ops/s, ±0.09%     | 71.98% slower

  typebox cast:
    73 290 ops/s, ±0.14%      | slowest, 95.69% slower

  Fastest: io-ts
  Slowest: typebox cast
```
