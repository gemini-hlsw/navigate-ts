/*
  Warnings:

  - Made the column `id` on table `EngineeringTarget` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id` on table `Target` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."EngineeringTarget" ALTER COLUMN "id" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Target" ALTER COLUMN "id" SET NOT NULL;
