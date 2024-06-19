-- CreateTable
CREATE TABLE "Gamer" (
    "id" SERIAL NOT NULL,
    "gamerTag" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Gamer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "externalCode" INTEGER NOT NULL,
    "gamerId" INTEGER NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gamer_gamerTag_key" ON "Gamer"("gamerTag");

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_gamerId_fkey" FOREIGN KEY ("gamerId") REFERENCES "Gamer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
