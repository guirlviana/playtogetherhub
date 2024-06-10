import { Gamer } from "@prisma/client";
import { orm } from "../../prisma/prismaClient";
import bcrypt from "bcrypt";

async function create(gamerTag: string, name: string, password: string) {
  const hash = await bcrypt.hash(password, 10);

  const gamersWithSameGamerTag = await orm.gamer.count({
    where: { gamerTag: gamerTag },
  });
  if (gamersWithSameGamerTag) return false;

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
  const excludeFields = ["password"];

  const gamerUpdated = await orm.gamer.update({
    where: { id: gamerId },
    data: data,
  });

  await orm.$disconnect();

  const gamerCopy: Partial<Gamer> = { ...gamerUpdated };

  excludeFields.forEach((field) => {
    delete gamerCopy[field as keyof Gamer];
  });

  return gamerCopy as Gamer;
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

// TODO: remove this any type
async function getAll(gamerId: number): Promise<any[]> {
  const gamers = await orm.gamer.findMany({
    where: { id: { not: gamerId } },
    select: {
      id: true,
      gamerTag: true,
      name: true,
      games: {
        select: {
          externalCode: true,
        },
      },
    },
  });

  return gamers;
}

export const GamerAdapter = {
  create,
  update,
  remove,
  get,
  getAll,
};
