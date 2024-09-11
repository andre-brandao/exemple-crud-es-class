import type { PageServerLoad, Actions } from './$types'
import { userController } from '$lib/server/db/controller'
import { fail, redirect } from '@sveltejs/kit'

export const load = (async () => {
  return {}
}) satisfies PageServerLoad

export const actions: Actions = {
  create: async ({ request }) => {
    const formData = await request.formData()
    console.log('create user data:', formData)

    const name = formData.get('name')
    const email = formData.get('email')
    const cellphone = formData.get('phone')
    const age = Number(formData.get('age'))

    if (typeof name !== 'string') {
      return fail(400, {
        success: false,
        message: 'Name is not valid',
      })
    }
    if (typeof cellphone !== 'string') {
      return fail(400, {
        success: false,
        message: 'Phone not valid',
      })
    }

    if (typeof age !== 'number') {
      return fail(400, {
        success: false,
        message: 'Age is invalid',
      })
    }

    if (typeof email !== 'string') {
      return fail(400, {
        success: false,
        message: 'Email is invalid',
      })
    }

    try {
      await userController
        .create({
          cellphone,
          name,
          email,
          age,
        })
        .returning()
    } catch (error) {
      console.error(error)
      return fail(500, {
        success: false,
        message: 'Failed to create user',
      })
    }
    redirect(303, '/users')
  },
}
