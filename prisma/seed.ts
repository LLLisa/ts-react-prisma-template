import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function dbSeed() {
  try {
    await prisma.user.upsert({
      //find row by
      where: {
        email: 'alice@prisma.io',
      },
      //update row with
      update: {
        name: 'Regular Alice',
      },
      //OR create row
      create: {
        name: 'Aliceeeeeeeeeeeeeeeeeeeeeeeee',
        email: 'alice@prisma.io',
        posts: {
          create: { title: 'Hello World' },
        },
        profile: {
          create: { bio: 'I like turtles' },
        },
      },
    });

    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    console.dir(allUsers, { depth: null });

    const post = await prisma.post.update({
      where: { id: 1 },

      data: { published: false },
    });

    console.log(post);
  } catch (error) {
    console.log(error);
  }
}

const dbSync = async () => {
  try {
    dbSeed();
    await prisma.$disconnect;
  } catch (error) {
    console.error(error);
    await prisma.$disconnect;
    process.exit(1);
  }
};

dbSync();
