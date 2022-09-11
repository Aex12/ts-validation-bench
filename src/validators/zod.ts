import { z } from 'zod'

export const User = z.object({
  id: z.string().uuid(),
  name: z.string(),
  address: z.object({
    line1: z.string(),
    line2: z.string(),
  }).optional(),
})
