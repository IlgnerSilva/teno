import { defineConfig } from 'drizzle-kit';
import { env } from '@teno/env'

export default defineConfig({
  out: './migrations',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
