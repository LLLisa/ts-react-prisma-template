import express from 'express';
import { PrismaClient } from '@prisma/client';
import { Student } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/all', async (req, res, next) => {
  try {
    const allStudents = await prisma.student.findMany();
    res.send(allStudents);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const oneStudent: Student | null = await prisma.student.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(oneStudent);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newStudent: Student = await prisma.student.create({
      data: req.body,
    });
    res.send(newStudent);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const oneStudent: Student = await prisma.student.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    res.send(oneStudent);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const doomedStudent: Student | null = await prisma.student.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(doomedStudent);
  } catch (error) {
    next(error);
  }
});

export default router;
