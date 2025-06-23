import { z } from 'zod/v4'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().optional()
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL
  }
})



// const envSchema = z.object({
//   DATABASE_URL: z.string().url(),
// })

// console.log(process.env)
// throw new Error('test')

// const result = envSchema.safeParse(process.env);

// if (!result.success) {
//   throw new Error(result.error.message);
// }

// export const env = result.data