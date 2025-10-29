import Link from "next/link";
import { 
  Zap, 
  TrendingDown, 
  Award, 
  BookOpen, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Sparkles 
} from "lucide-react";
import type { Metadata } from "next";
import "./globals.css";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const metadata: Metadata = {
  title: "EnergíaVis - Gestión Inteligente de Energía",
  description:
    "Plataforma de gestión de energía prepago con monitoreo en tiempo real, educación y gamificación.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

export function Home() {
  // Home component content
}

export function EducacionPage() {
  return (
    <div>
      {/* Education content */}
    </div>
  )
}

export async function GET() {
  // Handler implementation
}

export function middleware(request: NextRequest) {
  // Middleware implementation
}

export interface APIResponse<T> {
  data: T;
  error?: string;
  status: number;
}