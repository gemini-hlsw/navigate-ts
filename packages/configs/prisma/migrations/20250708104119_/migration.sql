/*
  Warnings:

  - You are about to drop the column `site` on the `Configuration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Configuration" DROP COLUMN "site";

-- DropEnum
DROP TYPE "SiteType";
