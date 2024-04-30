-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentInfo" DROP CONSTRAINT "StudentInfo_studentId_fkey";

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "studentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "StudentInfo" ADD CONSTRAINT "StudentInfo_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
