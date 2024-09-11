/* eslint-disable @typescript-eslint/no-unused-vars */
import { SQL, sql, relations } from 'drizzle-orm'

// POSTGRESS COLUMN TYPES, check link bellow for full documentation
// https://orm.drizzle.team/docs/column-types/pg
import {
  pgTable,
  text,
  char,
  varchar,
  numeric,
  decimal,
  doublePrecision,
  integer,
  serial, // auto increment integer
  bigint,
  smallint,
  real,
  bigserial,
  smallserial,
  boolean,
  timestamp,
  json,
  jsonb,
  primaryKey,
} from 'drizzle-orm/pg-core'

export const userTable = pgTable('user', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at').default(sql`now()`),
  update_counter: integer('update_counter')
    .default(sql`1`)
    // This function will be called whenever the user is updated,
    // its also possible to use a js function instad of sql
    .$onUpdateFn((): SQL => sql`${userTable.update_counter} + 1`),
  name: text('name').notNull(),
  email: text('email'),
  cellphone: text('cellphone').notNull(),
  age: integer('age'),
})

// Declaring relations between tables is optional, but it can be useful to use drizzle query builder
export const userRelations = relations(userTable, ({ one, many }) => ({
  addresses: many(addressTable),
  favorites: many(userFavoriteProductsTable),
}))

export type SelectUser = typeof userTable.$inferSelect
export type InsertUser = typeof userTable.$inferInsert

export const addressTable = pgTable('address', {
  id: serial('id').notNull().primaryKey(),
  created_at: timestamp('created_at').default(sql`now()`),
  user_id: integer('user_id')
    .notNull()
    .references(() => userTable.id),
  cep: text('cep').notNull(),
  street: text('street').notNull(),
  number: text('number').notNull(),
  complement: text('complement').notNull(),
  neighborhood: text('neighborhood').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull(),
  country: text('country').notNull(),
})

// Declaring relations between tables is optional, but it can be useful to use drizzle query builder
export const addressRelations = relations(addressTable, ({ one, many }) => ({
  user: one(userTable, {
    fields: [addressTable.user_id],
    references: [userTable.id],
  }),
}))

export type SelectAddress = typeof addressTable.$inferSelect
export type InsertAddress = typeof addressTable.$inferInsert

export const productsTable = pgTable('products', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at').default(sql`now()`),
  name: text('name').notNull(),
  price: decimal('price').notNull(),
  description: text('description').notNull(),
  stock: integer('stock')
    .notNull()
    .default(sql`0::int`),
})
// Declaring relations between tables is optional, but it can be useful to use drizzle query builder
export const productRelations = relations(productsTable, ({ one, many }) => ({
  favorites: many(userFavoriteProductsTable),
}))

export type SelectProduct = typeof productsTable.$inferSelect
export type InsertProduct = typeof productsTable.$inferInsert

export const userFavoriteProductsTable = pgTable(
  'user_favorite_products',
  {
    user_id: integer('user_id')
      .notNull()
      .references(() => userTable.id),
    product_id: integer('product_id')
      .notNull()
      .references(() => productsTable.id),
  },
  t => ({
    // Defining a composite primary key
    pk: primaryKey({ columns: [t.user_id, t.product_id] }),
  }),
)
// Declaring relations between tables is optional, but it can be useful to use drizzle query builder
export const userFavoriteProductsRelations = relations(
  userFavoriteProductsTable,
  ({ one }) => ({
    user: one(userTable, {
      fields: [userFavoriteProductsTable.user_id],
      references: [userTable.id],
    }),
    product: one(productsTable, {
      fields: [userFavoriteProductsTable.product_id],
      references: [productsTable.id],
    }),
  }),
)

export type SelectUserFavoriteProducts =
  typeof userFavoriteProductsTable.$inferSelect
export type InsertUserFavoriteProducts =
  typeof userFavoriteProductsTable.$inferInsert
