/*
  Warnings:

  - You are about to drop the column `paitAt` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "paitAt",
ADD COLUMN     "paidAt" TIMESTAMP(3);
