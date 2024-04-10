import { orm } from "../../prisma/prismaClient";

async function createGamer(email: string, name: string, password: string) {
  const newGamer = await orm.gamer.create({
    data: {
      email: email,
      name: name,
      password: password
    },
  });
  await orm.$disconnect();

  return newGamer;
}

type GamerUpdateFields = {
  email?: string;
  name?: string;
};

async function updateGamer(gamerId: number, data: GamerUpdateFields) {
  const gamerUpdated = await orm.gamer.update({
    where: { id: gamerId },
    data: data,
  });
  await orm.$disconnect();

  return gamerUpdated;
}
