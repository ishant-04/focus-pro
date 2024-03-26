import { PrismaClient } from "@prisma/client";

const globalforPrisma = globalThis as unknown as { prisma?: PrismaClient | undefined};

export const prisma = globalforPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalforPrisma.prisma = prisma
}