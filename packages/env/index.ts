import { z } from 'zod/v4'
import 'dotenv/config'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

const result = envSchema.safeParse(process.env);

if (!result.success) {
  throw new Error(result.error.message);
}

export const env = result.data