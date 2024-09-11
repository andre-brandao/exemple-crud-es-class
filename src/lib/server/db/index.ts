import { drizzle } from 'drizzle-orm/postgres-js'
import { env } from '$env/dynamic/private'
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set')

import { DefaultLogger, type LogWriter } from 'drizzle-orm/logger'
import * as schema from './schema'

class MyLogWriter implements LogWriter {
  write(message: string) {
    console.log(message)
  }
}
const logger = new DefaultLogger({ writer: new MyLogWriter() })

import postgres from 'postgres'
// PG client can also be used if needed for raw SQL
const client = postgres(env.DATABASE_URL)

export const db = drizzle(client, { logger, schema })
