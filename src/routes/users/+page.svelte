<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
  const { users } = data
  console.log(users)
</script>

<section class="container mx-auto px-4">
  <div class="flex w-full items-center justify-between">
    <div class="text-lg font-medium text-gray-800 dark:text-white">Users</div>
    <div>
      <a
        class="rounded bg-blue-400 p-1 text-lg font-medium text-gray-800 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
        href="/users/register"
      >
        New User
      </a>
    </div>
  </div>

  <div class="mt-6 flex flex-col">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div
          class="overflow-hidden border border-gray-200 md:rounded-lg dark:border-gray-700"
        >
          <table
            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          >
            <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                >
                  <button class="flex items-center gap-x-3 focus:outline-none">
                    <span>Name</span>
                  </button>
                </th>

                <th
                  scope="col"
                  class="px-12 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                >
                  Email
                </th>

                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                >
                  Phone
                </th>

                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                >
                  Age
                </th>

                <th scope="col" class="relative px-4 py-3.5">
                  <span class="sr-only"></span>
                </th>
              </tr>
            </thead>
            <tbody
              class="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900"
            >
              {#each users as user}
                <tr>
                  <td class="whitespace-nowrap px-4 py-4 text-sm font-medium">
                    <div>
                      <h2 class="font-medium text-gray-800 dark:text-white">
                        {user.name}
                      </h2>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-4 text-sm font-medium">
                    <div>
                      <h2 class="font-medium text-gray-800 dark:text-white">
                        {user.email ?? 'N/A'}
                      </h2>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-4 text-sm">
                    <div>
                      <h4 class="text-gray-700 dark:text-gray-200">
                        {user.cellphone}
                      </h4>
                    </div>
                  </td>

                  <td class="whitespace-nowrap px-4 py-4 text-sm font-medium">
                    <div>
                      <h2 class="font-medium text-gray-800 dark:text-white">
                        {user.age}
                      </h2>
                    </div>
                  </td>

                  <td class="whitespace-nowrap px-4 py-4 text-sm">
                    <a
                      href="/users/{user.id}"
                      class="rounded-lg px-1 py-1 text-gray-500 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
