-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'ACTIvE', 'DISABLED');

-- CreateTable
CREATE TABLE "Hub" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "location" JSONB,
    "type" JSONB,
    "amenities" JSONB,
    "images" JSONB,
    "availability" TEXT,
    "rules" JSONB,
    "description" TEXT,
    "status" "Status" NOT NULL,

    CONSTRAINT "Hub_pkey" PRIMARY KEY ("id")
);
