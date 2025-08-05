-- AlterTable
ALTER TABLE "public"."EngineeringTarget" ADD COLUMN     "parallax" DOUBLE PRECISION,
ADD COLUMN     "pmDec" DOUBLE PRECISION,
ADD COLUMN     "pmRa" DOUBLE PRECISION,
ADD COLUMN     "radialVelocity" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "public"."Target" ADD COLUMN     "parallax" DOUBLE PRECISION,
ADD COLUMN     "pmDec" DOUBLE PRECISION,
ADD COLUMN     "pmRa" DOUBLE PRECISION,
ADD COLUMN     "radialVelocity" DOUBLE PRECISION;
