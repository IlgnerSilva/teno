import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from '@teno/env';
import * as schema from './db/schema.js'
export const db = drizzle(env.DATABASE_URL, {schema});