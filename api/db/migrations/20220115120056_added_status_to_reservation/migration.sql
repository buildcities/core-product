-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('NEW', 'ACCEPTED', 'REJECTED');

-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "status" "ReservationStatus" DEFAULT E'NEW';
