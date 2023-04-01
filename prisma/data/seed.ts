import { PrismaClient } from '@prisma/client';
import { studentSeed, schoolSeed } from './seedData';

const prisma = new PrismaClient();

async function dbSeed() {
  try {
    await prisma.student.createMany({
      data: studentSeed,
      skipDuplicates: true,
    });
    await prisma.school.createMany({
      data: schoolSeed,
      skipDuplicates: true,
    });
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
