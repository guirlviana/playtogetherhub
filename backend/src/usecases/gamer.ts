import { orm } from "../../prisma/prismaClient";

export async function createGamer(
  gamerTag: string,
  name: string,
  password: string
) {
  const newGamer = await orm.gamer.create({
    data: {
      gamerTag: gamerTag,
      name: name,
      password: password,
    },
  });
  await orm.$disconnect();

  return newGamer;
}

type GamerUpdateFields = {
  gamerTag?: string;
  name?: string;
};

export async function updateGamer(gamerId: number, data: GamerUpdateFields) {
  const gamerUpdated = await orm.gamer.update({
    where: { id: gamerId },
    data: data,
  });
  await orm.$disconnect();

  return gamerUpdated;
}
