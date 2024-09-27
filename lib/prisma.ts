import { PrismaClient } from "@prisma/client";

// Create a new Prisma Client instance
const prisma = new PrismaClient();

// Export the Prisma Client instance for use in your application
export default prisma;
