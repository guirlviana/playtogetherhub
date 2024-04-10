/*
  Warnings:

  - You are about to drop the column `title` on the `Games` table. All the data in the column will be lost.
  - Added the required column `password` to the `Gamer` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Gamer` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gamer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Gamer" ("email", "id", "name") SELECT "email", "id", "name" FROM "Gamer";
DROP TABLE "Gamer";
ALTER TABLE "new_Gamer" RENAME TO "Gamer";
CREATE UNIQUE INDEX "Gamer_email_key" ON "Gamer"("email");
CREATE TABLE "new_Games" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "externalCode" INTEGER NOT NULL,
    "platform" INTEGER NOT NULL,
    "gamerId" INTEGER NOT NULL,
    CONSTRAINT "Games_gamerId_fkey" FOREIGN KEY ("gamerId") REFERENCES "Gamer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Games" ("externalCode", "gamerId", "id", "platform") SELECT "externalCode", "gamerId", "id", "platform" FROM "Games";
DROP TABLE "Games";
ALTER TABLE "new_Games" RENAME TO "Games";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
