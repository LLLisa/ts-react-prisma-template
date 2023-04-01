$ npx prisma db push

- pushes current schema in prisma/schema.prisma into db

$ npx prisma db pull

- introspects schema from existing db and overwrites prisma/schema.prisma

$ npx prisma migrate dev

- creates SQL migration log in prisma/migrations
- runs seed.ts

$ npx prisma validate

- validates db schema
- resets PrismaClient()

$ npx prisma studio

- browse db on localhost
- manually enter rows???

https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgres
