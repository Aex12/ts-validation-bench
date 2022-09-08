/* benchmark.js */
import b from 'benny'

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

b.suite(
  'validation libraries',

  b.add('io-ts', () => {
    const userIo = UserIO.decode(user)

    if (isRight(userIo)) {
      return userIo.right
    } else {
      return userIo.left[0].context
    }
  }),

  b.add('class-validator', async () => {
    const userCv = plainToClass(UserCV, user)
    const errors = await validate(userCv, { whitelist: true })
    if (errors.length === 0) {
      return userCv
    } else {
      return errors
    }
  }),

  b.cycle(),
  b.complete(),
)
