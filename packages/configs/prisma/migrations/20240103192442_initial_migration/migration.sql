-- CreateEnum
CREATE TYPE "SiteType" AS ENUM ('GN', 'GS');

-- CreateEnum
CREATE TYPE "GuidingType" AS ENUM ('NORMAL');

-- CreateEnum
CREATE TYPE "TargetType" AS ENUM ('FIXED', 'SCIENCE', 'BLINDOFFSET', 'OIWFS', 'PWFS1', 'PWFS2');

-- CreateEnum
CREATE TYPE "WfsType" AS ENUM ('NONE', 'PWFS1', 'PWFS2', 'OIWFS');

-- CreateEnum
CREATE TYPE "TrackingType" AS ENUM ('TRACKING', 'FIXED');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'ACTIVE', 'DONE', 'ERROR');

-- CreateTable
CREATE TABLE "User" (
    "pk" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "Configuration" (
    "pk" SERIAL NOT NULL,
    "site" "SiteType" NOT NULL DEFAULT 'GN',
    "selectedTarget" INTEGER,
    "selectedOiTarget" INTEGER,
    "selectedP1Target" INTEGER,
    "selectedP2Target" INTEGER,
    "oiGuidingType" "GuidingType" NOT NULL,
    "p1GuidingType" "GuidingType" NOT NULL,
    "p2GuidingType" "GuidingType" NOT NULL,
    "obsTitle" TEXT,
    "obsId" TEXT,
    "obsInstrument" TEXT,
    "obsSubtitle" TEXT,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "Target" (
    "pk" SERIAL NOT NULL,
    "id" TEXT,
    "name" TEXT NOT NULL DEFAULT 'Test',
    "coord1" DOUBLE PRECISION NOT NULL,
    "coord2" DOUBLE PRECISION NOT NULL,
    "epoch" TEXT NOT NULL DEFAULT 'J2000.000',
    "type" "TargetType" NOT NULL DEFAULT 'SCIENCE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Target_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "Instrument" (
    "pk" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iaa" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "issPort" INTEGER NOT NULL,
    "focusOffset" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "wfs" "WfsType" NOT NULL DEFAULT 'NONE',
    "originX" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "originY" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "ao" BOOLEAN NOT NULL DEFAULT false,
    "extraParams" JSONB NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "Rotator" (
    "pk" SERIAL NOT NULL,
    "angle" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "tracking" "TrackingType" NOT NULL DEFAULT 'TRACKING',

    CONSTRAINT "Rotator_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "SlewFlags" (
    "pk" SERIAL NOT NULL,
    "zeroChopThrow" BOOLEAN NOT NULL,
    "zeroSourceOffset" BOOLEAN NOT NULL,
    "zeroSourceDiffTrack" BOOLEAN NOT NULL,
    "zeroMountOffset" BOOLEAN NOT NULL,
    "zeroMountDiffTrack" BOOLEAN NOT NULL,
    "shortcircuitTargetFilter" BOOLEAN NOT NULL,
    "shortcircuitMountFilter" BOOLEAN NOT NULL,
    "resetPointing" BOOLEAN NOT NULL,
    "stopGuide" BOOLEAN NOT NULL,
    "zeroGuideOffset" BOOLEAN NOT NULL,
    "zeroInstrumentOffset" BOOLEAN NOT NULL,
    "autoparkPwfs1" BOOLEAN NOT NULL,
    "autoparkPwfs2" BOOLEAN NOT NULL,
    "autoparkOiwfs" BOOLEAN NOT NULL,
    "autoparkGems" BOOLEAN NOT NULL,
    "autoparkAowfs" BOOLEAN NOT NULL,

    CONSTRAINT "SlewFlags_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "Mechanism" (
    "pk" SERIAL NOT NULL,
    "mcs" "Status" NOT NULL,
    "mcsPark" "Status" NOT NULL,
    "mcsUnwrap" "Status" NOT NULL,
    "scs" "Status" NOT NULL,
    "crcs" "Status" NOT NULL,
    "crcsPark" "Status" NOT NULL,
    "crcsUnwrap" "Status" NOT NULL,
    "pwfs1" "Status" NOT NULL,
    "pwfs1Park" "Status" NOT NULL,
    "pwfs1Unwrap" "Status" NOT NULL,
    "pwfs2" "Status" NOT NULL,
    "pwfs2Park" "Status" NOT NULL,
    "pwfs2Unwrap" "Status" NOT NULL,
    "oiwfs" "Status" NOT NULL,
    "oiwfsPark" "Status" NOT NULL,
    "odgw" "Status" NOT NULL,
    "odgwPark" "Status" NOT NULL,
    "aowfs" "Status" NOT NULL,
    "aowfsPark" "Status" NOT NULL,
    "dome" "Status" NOT NULL,
    "domePark" "Status" NOT NULL,
    "domeMode" TEXT NOT NULL,
    "shutters" "Status" NOT NULL,
    "shuttersPark" "Status" NOT NULL,
    "shutterMode" TEXT NOT NULL,
    "shutterAperture" INTEGER NOT NULL,
    "wVGate" "Status" NOT NULL,
    "wVGateClose" "Status" NOT NULL,
    "wVGateValue" INTEGER NOT NULL,
    "eVGate" "Status" NOT NULL,
    "eVGateClose" "Status" NOT NULL,
    "eVGateValue" INTEGER NOT NULL,
    "agScienceFoldPark" "Status" NOT NULL,
    "agAoFoldPark" "Status" NOT NULL,
    "agAcPickoffPark" "Status" NOT NULL,
    "agParkAll" "Status" NOT NULL,

    CONSTRAINT "Mechanism_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "AltairInstrument" (
    "pk" SERIAL NOT NULL,
    "beamsplitter" TEXT NOT NULL,
    "startMagnitude" DOUBLE PRECISION NOT NULL,
    "seeing" DOUBLE PRECISION NOT NULL,
    "windSpeed" DOUBLE PRECISION NOT NULL,
    "forceMode" BOOLEAN NOT NULL,
    "ndFilter" BOOLEAN NOT NULL,
    "fieldLens" BOOLEAN NOT NULL,
    "deployAdc" BOOLEAN NOT NULL,
    "adjustAdc" BOOLEAN NOT NULL,
    "lgs" BOOLEAN NOT NULL,

    CONSTRAINT "AltairInstrument_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "GemsInstrument" (
    "pk" SERIAL NOT NULL,
    "adc" BOOLEAN NOT NULL,
    "beamsplitter" TEXT NOT NULL,
    "astrometricMode" TEXT NOT NULL,

    CONSTRAINT "GemsInstrument_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "GuideLoop" (
    "pk" SERIAL NOT NULL,
    "m2TipTiltEnable" BOOLEAN NOT NULL,
    "m2TipTiltSource" TEXT NOT NULL,
    "m2FocusEnable" BOOLEAN NOT NULL,
    "m2FocusSource" TEXT NOT NULL,
    "m2TipTiltFocusLink" BOOLEAN NOT NULL,
    "m2ComaEnable" BOOLEAN NOT NULL,
    "m1CorrectionsEnable" BOOLEAN NOT NULL,
    "m2ComaM1CorrectionsSource" TEXT NOT NULL,
    "mountOffload" BOOLEAN NOT NULL,
    "daytimeMode" BOOLEAN NOT NULL,
    "probeTracking" TEXT NOT NULL,
    "lightPath" TEXT NOT NULL,

    CONSTRAINT "GuideLoop_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "AltairGuideLoop" (
    "pk" SERIAL NOT NULL,
    "aoEnabled" BOOLEAN NOT NULL,
    "oiBlend" BOOLEAN NOT NULL,
    "focus" BOOLEAN NOT NULL,
    "p1Ttf" BOOLEAN NOT NULL,
    "strap" BOOLEAN NOT NULL,
    "oiTtf" BOOLEAN NOT NULL,
    "ttgs" BOOLEAN NOT NULL,
    "sfo" BOOLEAN NOT NULL,

    CONSTRAINT "AltairGuideLoop_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "GemsGuideLoop" (
    "pk" SERIAL NOT NULL,
    "aoEnabled" BOOLEAN NOT NULL,
    "focus" BOOLEAN NOT NULL,
    "rotation" BOOLEAN NOT NULL,
    "tipTilt" BOOLEAN NOT NULL,
    "anisopl" BOOLEAN NOT NULL,
    "flexure" BOOLEAN NOT NULL,

    CONSTRAINT "GemsGuideLoop_pkey" PRIMARY KEY ("pk")
);
