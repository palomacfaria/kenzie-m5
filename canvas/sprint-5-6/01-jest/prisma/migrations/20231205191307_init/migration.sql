-- CreateTable
CREATE TABLE "Prisma" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Prisma_pkey" PRIMARY KEY ("id")
);
