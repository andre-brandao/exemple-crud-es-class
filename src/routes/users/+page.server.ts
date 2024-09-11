import type { PageServerLoad } from './$types'

import { userController } from '$lib/server/db/controller'

export const load = (async () => {
  const users = await userController.getAll()
  return {
    users,
  }
}) satisfies PageServerLoad
