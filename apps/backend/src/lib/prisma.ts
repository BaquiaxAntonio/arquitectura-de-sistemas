import { PrismaClient } from "@prisma/client";

// Usamos DATABASE_URL (pooler) para runtime, evita P1001 en Render
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL no está definida. Asegúrate de configurarla en Render."
  );
}

const prisma = new PrismaClient({
  datasources: { db: { url: databaseUrl } },
});

export default prisma;