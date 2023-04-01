import app from './api';

const PORT = process.env.port || 1956;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// //prisma
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function dbSeed() {
//   try {
//     const alice = await prisma.user.findUnique({
//       where: {
//         email: 'alice@prisma.io',
//       },
//     });
//     // if (!alice) {
//     await prisma.user.create({
//       data: {
//         name: 'Aliceeeeeeeeeeeeeeeeeeeeeeeee',
//         email: 'alice@prisma.io',
//         posts: {
//           create: { title: 'Hello World' },
//         },
//         profile: {
//           create: { bio: 'I like turtles' },
//         },
//       },
//     });
//     // }

//     const allUsers = await prisma.user.findMany({
//       include: {
//         posts: true,
//         profile: true,
//       },
//     });
//     console.dir(allUsers, { depth: null });

//     const post = await prisma.post.update({
//       where: { id: 1 },

//       data: { published: false },
//     });

//     console.log(post);
//   } catch (error) {
//     console.log(error);
//   }
// }

// const dbSync = async () => {
//   try {
//     dbSeed();
//     await prisma.$disconnect;
//   } catch (error) {
//     console.error(error);
//     await prisma.$disconnect;
//     process.exit(1);
//   }
// };

// dbSync();
