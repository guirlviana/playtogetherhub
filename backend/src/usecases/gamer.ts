import { orm } from "../../prisma/prismaClient";
import bcrypt from "bcrypt";

export async function createGamer(
  gamerTag: string,
  name: string,
  password: string
) {
  const hash = await bcrypt.hash(password, 10);

  const newGamer = await orm.gamer.create({
    data: {
      gamerTag: gamerTag,
      name: name,
      password: hash,
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

export async function deleteGamer(gamerId: number) {
  await orm.gamer.delete({
    where: { id: gamerId },
  });
}
