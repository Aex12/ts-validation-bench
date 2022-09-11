/* benchmark.js */
import b from 'benny'
import {
  validUser,
  invalidUser,
  extrapropsUser,
  parseIo,
  parseZod,
  checkTypebox,
  castTypebox,
} from './index'

b.suite(
  'validUser',
  b.add('io-ts', () => parseIo(validUser)),
  b.add('zod', () => parseZod(validUser)),
  b.add('typebox check', () => checkTypebox(validUser)),
  b.add('typebox cast', () => castTypebox(validUser)),
  // b.add('class-validator wl', () => classValidatorWl(validUser)),
  // b.add('class-validator non-wl', () => classValidatorNonwl(validUser)),
  b.cycle(),
  b.complete(),
)

b.suite(
  'extrapropsUser',
  b.add('io-ts', () => parseIo(extrapropsUser)),
  b.add('zod', () => parseZod(extrapropsUser)),
  b.add('typebox check', () => checkTypebox(extrapropsUser)),
  b.add('typebox cast', () => castTypebox(extrapropsUser)),
  // b.add('class-validator wl', () => classValidatorWl(extrapropsUser)),
  // b.add('class-validator non-wl', () => classValidatorNonwl(extrapropsUser)),
  b.cycle(),
  b.complete(),
)

b.suite(
  'invalidUser',
  b.add('io-ts', () => parseIo(invalidUser)),
  b.add('zod', () => parseZod(invalidUser)),
  b.add('typebox check', () => checkTypebox(invalidUser)),
  b.add('typebox cast', () => castTypebox(invalidUser)),
  // b.add('class-validator wl', () => classValidatorWl(invalidUser)),
  // b.add('class-validator non-wl', () => classValidatorNonwl(invalidUser)),
  b.cycle(),
  b.complete(),
)
