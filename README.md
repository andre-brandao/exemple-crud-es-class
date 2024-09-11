# Drizzle CRUD Example for Software Engeniring Class

## Developing

### Install project dependencies

```bash
npm i
```

### Start DB

```bash
docker compose up
# OR use the alias
npm run db:start
```

### Populating DB

Push (DEV enviroment) - NOT RECOMENDED FOR PRODUCTION - pushes all schema
changes to the db, does not create a migration file

```bash
npm run db:push

```

OR

Migrations (Production enviroment)

```bash
# Generates a new SQL migration file
npm run db:generate

# Executes the migration script on the connect db
npm run db:migrate
```

### Start Development server on localhost:5173

```bash
npm run dev
```

## Other DB Commands

```bash
npm run db:drop # Drops a migration

# or start the server and open the app in a new browser tab
npm run db:studio # Opens a database inspector to edit and create data or interacting with the db
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an
> [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
