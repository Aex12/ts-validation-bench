import * as t from 'io-ts'
import { UUID } from 'io-ts-types/lib/UUID'

export const User = t.strict({
  id: UUID,
  name: t.string,
  address: t.union([t.strict({
    line1: t.string,
    line2: t.string,
  }), t.undefined]),
})
