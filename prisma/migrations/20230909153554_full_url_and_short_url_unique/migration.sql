/*
  Warnings:

  - A unique constraint covering the columns `[fullURL]` on the table `URL` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortURL]` on the table `URL` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "URL_fullURL_key" ON "URL"("fullURL");

-- CreateIndex
CREATE UNIQUE INDEX "URL_shortURL_key" ON "URL"("shortURL");
