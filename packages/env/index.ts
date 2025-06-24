import { z } from 'zod/v4'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
  server: {
    DATABASE_URL: z.string()
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL
  }
})