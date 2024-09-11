/* eslint-disable @typescript-eslint/no-unused-vars */
import { eq } from 'drizzle-orm'
import { db } from '.'

import {
  userTable,
  productsTable,
  addressTable,
  userFavoriteProductsTable,
} from './schema'

import type {
  InsertUser,
  SelectUser,
  InsertProduct,
  SelectProduct,
  InsertAddress,
  SelectAddress,
  InsertUserFavoriteProducts,
  SelectUserFavoriteProducts,
} from './schema'

export const userController = {
  create: function (data: InsertUser) {
    return db.insert(userTable).values(data)
  },
  delete: function (data: SelectUser['id']) {
    return db.delete(userTable).where(eq(userTable.id, data))
  },
  update: function (id: SelectUser['id'], data: Partial<SelectUser>) {
    return db.update(userTable).set(data).where(eq(userTable.id, id))
  },
  getAll: function () {
    return db.select().from(userTable)
  },
  getById: function (id: SelectUser['id']) {
    return db.select().from(userTable).where(eq(userTable.id, id))
  },
  getUserWithAddress: function (id: SelectUser['id']) {
    return db
      .select()
      .from(userTable)
      .where(eq(userTable.id, id))
      .innerJoin(addressTable, eq(userTable.id, addressTable.user_id))
  },
  queryUserWithAddress: function (id: SelectUser['id']) {
    return db.query.userTable.findFirst({
      where: eq(userTable.id, id),
      with:{
        addresses: true,
      }
    })
  },
  getUserWithFavorites: function (id: SelectUser['id']) {
    return db
      .select()
      .from(userTable)
      .where(eq(userTable.id, id))
      .innerJoin(
        userFavoriteProductsTable,
        eq(userTable.id, userFavoriteProductsTable.user_id),
      )
  },
  queryUserWithFavorites: function (id: SelectUser['id']) {
    return db.query.userTable.findFirst({
      where: eq(userTable.id, id),
      with: {
        favorites: true,
      },
    })
  },
  addAddress: function (data: InsertAddress) {
    return db.insert(addressTable).values(data)
  },
  addFavoriteProduct: function (data: InsertUserFavoriteProducts) {
    return db.insert(userFavoriteProductsTable).values(data)
  },
}

export const productController = {
  create: function (data: InsertProduct) {
    return db.insert(productsTable).values(data)
  },
  delete: function (data: SelectProduct['id']) {
    return db.delete(productsTable).where(eq(productsTable.id, data))
  },
  update: function (id: SelectProduct['id'], data: Partial<SelectProduct>) {
    return db.update(productsTable).set(data).where(eq(productsTable.id, id))
  },
  getAll: function () {
    return db.select().from(productsTable)
  },
  getById: function (id: SelectProduct['id']) {
    return db.select().from(productsTable).where(eq(productsTable.id, id))
  },
}
