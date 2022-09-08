// io-ts imports
import { isRight } from 'fp-ts/Either'
import { User as UserIO } from './iots'

// class-validator imports
import 'reflect-metadata'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { User as UserCV } from './class-validator'

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

async function main () {
  // IoTs
  const userIo = UserIO.decode(user)

  if (isRight(userIo)) {
    console.log('[io-ts] valid:', userIo.right)
  } else {
    console.log('[io-ts] not valid:', userIo.left[0].context)
  }

  // Class-Validator non-whitelisted
  const userCv = plainToClass(UserCV, user)
  const errors = await validate(userCv)
  if (errors.length === 0) {
    console.log('[class-validator non-wl] valid', userCv)
  } else {
    console.log('[class-validator non-wl] not valid', errors)
  }

  // Class-Validator non-whitelisted
  const userCvWl = plainToClass(UserCV, user)
  const errorsWl = await validate(userCvWl, { whitelist: true })
  if (errors.length === 0) {
    console.log('[class-validator wl] valid', userCvWl)
  } else {
    console.log('[class-validator wl] not valid', errorsWl)
  }
}

main().then(() => true)
