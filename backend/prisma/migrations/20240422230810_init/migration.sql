-- CreateTable
CREATE TABLE "Gamer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gamerTag" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Games" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "externalCode" INTEGER NOT NULL,
    "gamerId" INTEGER NOT NULL,
    CONSTRAINT "Games_gamerId_fkey" FOREIGN KEY ("gamerId") REFERENCES "Gamer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Gamer_gamerTag_key" ON "Gamer"("gamerTag");
