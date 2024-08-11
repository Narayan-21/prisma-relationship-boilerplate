# prisma-relationship-boilerplate

- Initialize the npm repo : ```bash npm init -y
- Install TS Project and add the prisma CLI as a development dependency : ```bash npm install prisma typescript ts-node @types/node --save-dev
- Initialize Typescript : ```bash npx tsc --init
- Set up Prisma ORM project : ```bash npx prisma init

- Define the relevant Schema in the /prisma/schema.prisma file.
- Migrate the database model to the database schema by Prisma migrate : ```bash npx prisma migrate dev --name migration_name
- Generate the prisma client and use the auto-generated client in the project : ```bash npx prisma generate