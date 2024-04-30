-- CreateTable
CREATE TABLE "StudentInfo" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "StudentInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentInfo_studentId_key" ON "StudentInfo"("studentId");

-- AddForeignKey
ALTER TABLE "StudentInfo" ADD CONSTRAINT "StudentInfo_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
