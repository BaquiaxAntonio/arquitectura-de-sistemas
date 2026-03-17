import { PrismaClient } from "@prisma/client";

// En producción (Render), usamos el pooler vía DATABASE_URL
// En local, también usamos DATABASE_URL que ahora apunta al pooler
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL no está definida");

const prisma = new PrismaClient({
  datasources: { db: { url: databaseUrl } },
});

export default prisma;