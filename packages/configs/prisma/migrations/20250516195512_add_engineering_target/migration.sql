-- CreateTable
CREATE TABLE "EngineeringTarget" (
    "pk" SERIAL NOT NULL,
    "id" TEXT,
    "name" TEXT NOT NULL DEFAULT 'Test',
    "coord1" DOUBLE PRECISION NOT NULL,
    "coord2" DOUBLE PRECISION NOT NULL,
    "epoch" TEXT,
    "type" "TargetType" NOT NULL DEFAULT 'FIXED',
    "wavelength" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "instrument" TEXT NOT NULL,

    CONSTRAINT "EngineeringTarget_pkey" PRIMARY KEY ("pk")
);
