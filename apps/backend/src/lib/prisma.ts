import { PrismaClient } from "@prisma/client";

// En producción (Render), usamos DIRECT_URL para evitar problemas con el pooler
let databaseUrl = process.env.DIRECT_URL || process.env.DATABASE_URL;

// Asegurarse de que SSL esté habilitado
if (databaseUrl && !databaseUrl.includes("sslmode")) {
  databaseUrl += databaseUrl.includes("?") ? "&sslmode=require" : "?sslmode=require";
}

if (!databaseUrl) throw new Error("No hay URL de base de datos configurada");

console.log("URL de BD configurada:", databaseUrl.replace(/:[^:@]+@/, ":***@"));

const prisma = new PrismaClient({
  datasources: { db: { url: databaseUrl } },
});

export default prisma;