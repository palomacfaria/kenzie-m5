/*
  Warnings:

  - You are about to drop the `_AlbumToGenre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AlbumToGenre" DROP CONSTRAINT "_AlbumToGenre_A_fkey";

-- DropForeignKey
ALTER TABLE "_AlbumToGenre" DROP CONSTRAINT "_AlbumToGenre_B_fkey";

-- DropTable
DROP TABLE "_AlbumToGenre";

-- CreateTable
CREATE TABLE "_AlbumGenrePivot" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumGenrePivot_AB_unique" ON "_AlbumGenrePivot"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumGenrePivot_B_index" ON "_AlbumGenrePivot"("B");

-- AddForeignKey
ALTER TABLE "_AlbumGenrePivot" ADD CONSTRAINT "_AlbumGenrePivot_A_fkey" FOREIGN KEY ("A") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumGenrePivot" ADD CONSTRAINT "_AlbumGenrePivot_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
