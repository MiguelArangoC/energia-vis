// src/lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// PrismaClient se adjunta al objeto `global` en desarrollo
// para evitar instanciar demasiados clientes durante el hot-reload
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

// En desarrollo, guardamos el cliente en global para reutilizarlo
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;