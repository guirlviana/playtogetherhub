import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createGamer(email: string, name: string) {
  const newGamer = await prisma.gamer.create({
    data: {
      email: email,
      name: name,
    },
  });
  await prisma.$disconnect();

  return newGamer;
}
