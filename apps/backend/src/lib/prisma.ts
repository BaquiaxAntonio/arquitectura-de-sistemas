import { PrismaClient } from "@prisma/client";

// En producción (Render), usamos DIRECT_URL para evitar problemas con el pooler
// El pooler de Supabase (pgbouncer) tiene problemas con Prisma
const databaseUrl = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("No hay URL de base de datos configurada");

const prisma = new PrismaClient({
  datasources: { db: { url: databaseUrl } },
});

export default prisma;