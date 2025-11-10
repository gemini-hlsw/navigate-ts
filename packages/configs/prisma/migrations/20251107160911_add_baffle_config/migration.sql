-- CreateEnum
CREATE TYPE "BaffleMode" AS ENUM ('AUTO', 'MANUAL', 'IGNORED');

-- CreateEnum
CREATE TYPE "CentralBaffle" AS ENUM ('CLOSED', 'OPEN');

-- CreateEnum
CREATE TYPE "DeployableBaffle" AS ENUM ('EXTENDED', 'NEAR_IR', 'THERMAL_IR', 'VISIBLE');

-- AlterTable
ALTER TABLE "Configuration" ADD COLUMN     "baffleMode" "BaffleMode" NOT NULL DEFAULT 'AUTO',
ADD COLUMN     "centralBaffle" "CentralBaffle",
ADD COLUMN     "deployableBaffle" "DeployableBaffle";

-- AlterTable
ALTER TABLE "EngineeringTarget" ADD COLUMN     "baffleMode" "BaffleMode" NOT NULL DEFAULT 'AUTO',
ADD COLUMN     "centralBaffle" "CentralBaffle",
ADD COLUMN     "deployableBaffle" "DeployableBaffle";
