# Prisma Relationship Boilerplate

This project provides a boilerplate for setting up a Node.js application with Prisma ORM and TypeScript, focused on handling relationships between database models.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Starting from Scratch](#starting-from-scratch)
- [Database Migration](#database-migration)
- [Prisma Client Generation](#prisma-client-generation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (v14.x or higher recommended)
- PostgreSQL or any other supported database set up
- Basic knowledge of TypeScript and Prisma ORM

## Getting Started

### Cloning the Repository

If you're starting with an existing repository, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Narayan-21/prisma-relationship-boilerplate.git
    cd prisma-relationship-boilerplate
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up your environment variables:**

    Create a `.env` file in the root directory and add your database connection string:

    ```env
    DATABASE_URL="postgresql://username:password@host:port/database"
    ```

4. **Run migrations:**

    ```bash
    npx prisma migrate dev
    ```

5. **Generate the Prisma client:**

    ```bash
    npx prisma generate
    ```

6. **Run your application:**

    ```bash
    npm start
    ```

### Starting from Scratch

If you're starting a new project from scratch, follow these steps:

1. **Initialize the npm repository:**

    ```bash
    npm init -y
    ```

2. **Install dependencies:**

    ```bash
    npm install prisma typescript ts-node @types/node --save-dev
    ```

3. **Initialize TypeScript:**

    ```bash
    npx tsc --init
    ```

4. **Set up Prisma ORM:**

    ```bash
    npx prisma init
    ```

    This will create a `prisma` directory with a `schema.prisma` file.

5. **Define your schema:**

    Edit the `prisma/schema.prisma` file to define your database schema, including your models and relationships.

6. **Set up your environment variables:**

    Create a `.env` file in the root directory and add your database connection string:

    ```env
    DATABASE_URL="postgresql://username:password@host:port/database"
    ```

## Database Migration

1. **Apply database migrations:**

    After defining your schema, migrate your database to match the schema:

    ```bash
    npx prisma migrate dev --name initialMigration
    ```

    Replace `initialMigration` with a descriptive name for the migration.

## Prisma Client Generation

1. **Generate the Prisma client:**

    Once your schema is set and migrations are applied, generate the Prisma client to interact with your database:

    ```bash
    npx prisma generate
    ```

## Usage

1. **Use the Prisma client in your project:**

    Import the generated Prisma client and use it to interact with your database in your TypeScript files.

    Example:

    ```typescript
    import { PrismaClient } from '@prisma/client';

    const prisma = new PrismaClient();

    async function main() {
      const allUsers = await prisma.user.findMany();
      console.log(allUsers);
    }

    main()
      .catch(e => console.error(e))
      .finally(async () => {
        await prisma.$disconnect();
      });
    ```

2. **Run your application:**

    You can run your application using `ts-node`:

    ```bash
    npx ts-node src/index.ts
    ```

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.
