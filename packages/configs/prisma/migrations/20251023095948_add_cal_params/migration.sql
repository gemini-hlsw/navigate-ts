-- CreateTable
CREATE TABLE "CalParams" (
    "pk" SERIAL NOT NULL,
    "site" "Site" NOT NULL,
    "acqCamX" DOUBLE PRECISION NOT NULL,
    "acqCamY" DOUBLE PRECISION NOT NULL,
    "baffleVisible" DOUBLE PRECISION NOT NULL,
    "baffleNearIR" DOUBLE PRECISION NOT NULL,
    "topShutterCurrentLimit" DOUBLE PRECISION NOT NULL,
    "bottomShutterCurrentLimit" DOUBLE PRECISION NOT NULL,
    "pwfs1CenterX" DOUBLE PRECISION NOT NULL,
    "pwfs1CenterY" DOUBLE PRECISION NOT NULL,
    "pwfs1CenterZ" DOUBLE PRECISION NOT NULL,
    "pwfs2CenterX" DOUBLE PRECISION NOT NULL,
    "pwfs2CenterY" DOUBLE PRECISION NOT NULL,
    "pwfs2CenterZ" DOUBLE PRECISION NOT NULL,
    "defocusEnabled" BOOLEAN NOT NULL,
    "gnirsSfoDefocus" DOUBLE PRECISION,
    "gmosSfoDefocus" DOUBLE PRECISION,
    "gnirsP1Defocus" DOUBLE PRECISION,
    "gmosP1Defocus" DOUBLE PRECISION,
    "gmosOiDefocus" DOUBLE PRECISION,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CalParams_pkey" PRIMARY KEY ("pk")
);
