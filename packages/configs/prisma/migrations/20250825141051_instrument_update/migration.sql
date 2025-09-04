-- AlterTable
ALTER TABLE "public"."Instrument" ADD COLUMN     "comment" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isTemporary" BOOLEAN NOT NULL DEFAULT true;
