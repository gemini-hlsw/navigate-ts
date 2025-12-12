/*
  Warnings:

  - You are about to drop the column `coord1` on the `Target` table. All the data in the column will be lost.
  - You are about to drop the column `coord2` on the `Target` table. All the data in the column will be lost.
  - You are about to drop the column `epoch` on the `Target` table. All the data in the column will be lost.
  - You are about to drop the column `parallax` on the `Target` table. All the data in the column will be lost.
  - You are about to drop the column `pmDec` on the `Target` table. All the data in the column will be lost.
  - You are about to drop the column `pmRa` on the `Target` table. All the data in the column will be lost.
  - You are about to drop the column `radialVelocity` on the `Target` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "EphemerisKeyType" AS ENUM ('ASTEROID_NEW', 'ASTEROID_OLD', 'COMET', 'MAJOR_BODY', 'USER_SUPPLIED');

-- AlterTable
ALTER TABLE "Target" DROP COLUMN "coord1",
DROP COLUMN "coord2",
DROP COLUMN "epoch",
DROP COLUMN "parallax",
DROP COLUMN "pmDec",
DROP COLUMN "pmRa",
DROP COLUMN "radialVelocity",
ADD COLUMN     "nonsiderealPk" INTEGER,
ADD COLUMN     "siderealPk" INTEGER;

-- CreateTable
CREATE TABLE "SiderealTarget" (
    "pk" SERIAL NOT NULL,
    "coord1" DOUBLE PRECISION NOT NULL,
    "coord2" DOUBLE PRECISION NOT NULL,
    "pmRa" DOUBLE PRECISION,
    "pmDec" DOUBLE PRECISION,
    "radialVelocity" DOUBLE PRECISION,
    "parallax" DOUBLE PRECISION,
    "epoch" TEXT NOT NULL DEFAULT 'J2000.000',
    "type" "TargetType" NOT NULL DEFAULT 'SCIENCE',
    "targetPk" INTEGER NOT NULL,

    CONSTRAINT "SiderealTarget_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "NonsiderealTarget" (
    "pk" SERIAL NOT NULL,
    "keyType" "EphemerisKeyType" NOT NULL,
    "des" TEXT NOT NULL,
    "targetPk" INTEGER NOT NULL,

    CONSTRAINT "NonsiderealTarget_pkey" PRIMARY KEY ("pk")
);

-- CreateIndex
CREATE UNIQUE INDEX "SiderealTarget_targetPk_key" ON "SiderealTarget"("targetPk");

-- CreateIndex
CREATE UNIQUE INDEX "NonsiderealTarget_targetPk_key" ON "NonsiderealTarget"("targetPk");

-- AddForeignKey
ALTER TABLE "SiderealTarget" ADD CONSTRAINT "SiderealTarget_targetPk_fkey" FOREIGN KEY ("targetPk") REFERENCES "Target"("pk") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NonsiderealTarget" ADD CONSTRAINT "NonsiderealTarget_targetPk_fkey" FOREIGN KEY ("targetPk") REFERENCES "Target"("pk") ON DELETE CASCADE ON UPDATE CASCADE;
