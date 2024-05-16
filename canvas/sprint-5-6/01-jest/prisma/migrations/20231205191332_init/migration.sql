/*
  Warnings:

  - You are about to drop the `Prisma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Prisma";

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
