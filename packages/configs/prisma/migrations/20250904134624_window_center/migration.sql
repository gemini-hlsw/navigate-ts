-- CreateEnum
CREATE TYPE "public"."Site" AS ENUM ('GN', 'GS');

-- CreateTable
CREATE TABLE "public"."WindowCenter" (
    "site" "public"."Site" NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "WindowCenter_pkey" PRIMARY KEY ("site")
);
