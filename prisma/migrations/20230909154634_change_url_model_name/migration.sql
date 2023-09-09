/*
  Warnings:

  - You are about to drop the `URL` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "URL";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullURL" TEXT NOT NULL,
    "shortURL" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_fullURL_key" ON "Url"("fullURL");

-- CreateIndex
CREATE UNIQUE INDEX "Url_shortURL_key" ON "Url"("shortURL");
