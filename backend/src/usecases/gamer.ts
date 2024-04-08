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

type GamerUpdateFields = {
  email?: string;
  name?: string;
};

async function updateGamer(gamerId: number, data: GamerUpdateFields) {
  const gamerUpdated = await prisma.gamer.update({
    where: { id: gamerId },
    data: data,
  });
  await prisma.$disconnect();

  return gamerUpdated;
}
