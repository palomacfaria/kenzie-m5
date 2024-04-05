-- CreateTable
CREATE TABLE "StorageInfo" (
    "id" SERIAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "StorageInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StorageInfo_productId_key" ON "StorageInfo"("productId");

-- AddForeignKey
ALTER TABLE "StorageInfo" ADD CONSTRAINT "StorageInfo_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
