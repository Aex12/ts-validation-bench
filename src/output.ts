// io-ts imports
import {
  validUser,
  invalidUser,
  extrapropsUser,
  parseIo,
  parseZod,
  checkTypebox,
  castTypebox,
  ParseReturn,
} from './index'

function logResult (parser: string, result: ParseReturn) {
  console.log(`> [${parser}] ${result[0] === true ? 'valid' : 'not-valid'}:`, result[1])
}

console.log('validUser:')
logResult('io-ts', parseIo(validUser))
logResult('zod', parseZod(validUser))
logResult('typebox check', checkTypebox(validUser))
logResult('typebox cast', castTypebox(validUser))

console.log('\ninvalidUser:')
logResult('io-ts', parseIo(invalidUser))
logResult('zod', parseZod(invalidUser))
logResult('typebox check', checkTypebox(invalidUser))
logResult('typebox cast', castTypebox(invalidUser))

console.log('\nextrapropsUser:')
logResult('io-ts', parseIo(extrapropsUser))
logResult('zod', parseZod(extrapropsUser))
logResult('typebox check', checkTypebox(extrapropsUser))
logResult('typebox cast', castTypebox(extrapropsUser))
