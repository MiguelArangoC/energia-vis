// src/lib/auth.ts
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { prisma } from './prisma';

export interface SessionUser {
  id: string;
  name: string;
  email: string;
}

// Hash de contraseña
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

// Verificar contraseña
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Crear sesión simple (usando cookies)
export async function createSession(userId: string) {
  const cookieStore = await cookies();
  
  // En producción, usa JWT o una solución más robusta
  cookieStore.set('session', userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 días
  });
}

// Obtener sesión actual
export async function getSession(): Promise<SessionUser | null> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session');
    
    if (!sessionCookie?.value) {
      return null;
    }

    const userId = sessionCookie.value;
    
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
}

// Destruir sesión
export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

// Middleware para proteger rutas
export async function requireAuth(): Promise<SessionUser> {
  const user = await getSession();
  
  if (!user) {
    throw new Error('No autorizado');
  }
  
  return user;
}