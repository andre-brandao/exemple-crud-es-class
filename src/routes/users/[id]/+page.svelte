<script lang="ts">
  import type { PageData, ActionData } from './$types'
  import { enhance } from '$app/forms'
  import Info from '$lib/Info.svelte'

  export let data: PageData
  const { user } = data

  export let form: ActionData
</script>

<section
  class="mx-auto max-w-4xl rounded-md bg-white p-6 shadow-md dark:bg-gray-800"
>
  <h2 class="text-lg font-semibold capitalize text-gray-700 dark:text-white">
    Account Info
  </h2>

  <form action="?/update" method="post" use:enhance>
    <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <label class="text-gray-700 dark:text-gray-200" for="name">
          Username
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={user.name}
          class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
        />
      </div>

      <div>
        <label class="text-gray-700 dark:text-gray-200" for="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={user.email}
          class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
        />
      </div>

      <div>
        <label class="text-gray-700 dark:text-gray-200" for="phone">
          Cellphone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={user.cellphone}
          class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
        />
      </div>

      <div>
        <label class="text-gray-700 dark:text-gray-200" for="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          value={user.age}
          class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
        />
      </div>
    </div>

    <div class="mt-6 flex justify-end">
      {#if form?.message}
        <Info message={form.message} success={form.success} />
      {/if}
      <button
        class="transform rounded-md bg-gray-700 px-8 py-2.5 leading-5 text-white transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
      >
        Save
      </button>
    </div>
  </form>
</section>
