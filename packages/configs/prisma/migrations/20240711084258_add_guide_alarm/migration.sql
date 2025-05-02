-- CreateTable
CREATE TABLE "GuideAlarm" (
    "wfs" "WfsType" NOT NULL,
    "limit" INTEGER NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "GuideAlarm_pkey" PRIMARY KEY ("wfs")
);
