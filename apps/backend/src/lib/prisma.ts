import { PrismaClient } from "@prisma/client";

// Usamos DATABASE_URL (pooler público) para runtime en Render
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL no está definida");

const prisma = new PrismaClient({
  datasources: { db: { url: databaseUrl } },
});

export default prisma;