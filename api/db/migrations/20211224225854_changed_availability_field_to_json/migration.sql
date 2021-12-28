/*
  Warnings:

  - The `availability` column on the `Hub` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Hub" DROP COLUMN "availability",
ADD COLUMN     "availability" JSONB;
