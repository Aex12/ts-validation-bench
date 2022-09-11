// io-ts imports
import { isRight } from 'fp-ts/Either'
import { User as UserIO } from './validators/iots'

// zod imports
import { z } from 'zod'
import { User as UserZOD } from './validators/zod'

// typebox imports
import {
  User as UserTB,
  UserSchema as UserTBS,
} from './validators/typebox'
import { Value } from '@sinclair/typebox/value'

/*
// class-validator imports
import 'reflect-metadata'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { User as UserCV } from './class-validator'
*/

export const validUser = {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  address: {
    line1: 'asdasd',
    line2: 'asdasdasd',
  },
}

export const extrapropsUser = {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Eduardo',
  age: 23,
  address: {
    line1: 'asdasd',
    line2: 'asdasdasd',
    line3: 'asdasd',
  },
}

export const invalidUser = {
  id: 'non-valid-uuid',
  name: 'eduardo',
  age: 23,
  address: {
    line1: 'asdasd',
    line2: 'asdasdasd',
    line3: 'asdasd',
  },
}

export type User = typeof validUser | typeof extrapropsUser | typeof invalidUser
export type ParseReturn = [true, z.infer<typeof UserZOD>] | [false, unknown]

export function parseIo (user: User): ParseReturn {
  const userIo = UserIO.decode(user)

  if (isRight(userIo)) {
    return [true, userIo.right]
  } else {
    return [false, userIo.left[0].context]
  }
}

export function parseZod (user: User): ParseReturn {
  try {
    const userZod = UserZOD.parse(user)
    return [true, userZod]
  } catch (err) {
    return [false, err]
  }
}

export function checkTypebox (user: User): ParseReturn {
  const isValid = UserTB.Check(user)
  if (isValid) {
    return [true, user]
  } else {
    const errors = [...UserTB.Errors(user)]
    return [false, errors]
  }
}

export function castTypebox (user: User): ParseReturn {
  try {
    const userTb = Value.Cast(UserTBS, user)
    return [true, userTb]
  } catch (err) {
    const errors = [...UserTB.Errors(user)]
      .filter((e) => e.message !== 'Unexpected property')
    return [false, errors]
  }
}

/*
export async function classValidatorWl (user: User): ParseReturn {
  const userCv = plainToClass(UserCV, user)
  const errors = await validate(userCv, { whitelist: true })
  if (errors.length === 0) {
    return [true, userCv]
  } else {
    return [false, errors]
  }
}

export async function classValidatorNonwl (user: User): ParseReturn {
  const userCv = plainToClass(UserCV, user)
  const errors = await validate(userCv)
  if (errors.length === 0) {
    return [true, userCv]
  } else {
    return [false,errors]
  }
}
*/
