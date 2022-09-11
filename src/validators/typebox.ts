import { Type as T } from '@sinclair/typebox'
import { Format } from '@sinclair/typebox/format'
import { TypeCompiler } from '@sinclair/typebox/compiler'

const uuidRegex =
  /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i

Format.Set('uuid', (value) => uuidRegex.test(value))
export const UserSchema = T.Object({
  id: T.String({ format: 'uuid' }),
  name: T.String(),
  address: T.Optional(T.Object({
    line1: T.String(),
    line2: T.String(),
  }, { additionalProperties: false })),
}, { additionalProperties: false })

export const User = TypeCompiler.Compile(UserSchema)
