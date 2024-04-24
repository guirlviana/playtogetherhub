import { Gamer } from "@prisma/client";
import { orm } from "../../prisma/prismaClient";
import bcrypt from "bcrypt";

async function create(gamerTag: string, name: string, password: string) {
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

async function update(
  gamerId: number,
  data: GamerUpdateFields
): Promise<Gamer> {
  const gamerUpdated = await orm.gamer.update({
    where: { id: gamerId },
    data: data,
  });

  await orm.$disconnect();

  return gamerUpdated;
}

async function remove(gamerId: number): Promise<void> {
  await orm.gamer.delete({
    where: { id: gamerId },
  });
}

async function get(
  gamerId: number
): Promise<{ gamerTag: string; name: string } | null> {
  const gamer = await orm.gamer.findUnique({
    where: { id: gamerId },
    select: { gamerTag: true, name: true },
  });

  return gamer;
}

export const GamerRepository = {
  create,
  update,
  remove,
  get,
};
