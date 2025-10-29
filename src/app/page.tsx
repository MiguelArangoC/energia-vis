"use client";

import Link from "next/link";
import {
  Zap,
  TrendingDown,
  Award,
  BookOpen,
  CreditCard,
  BarChart3,
  Shield,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header/Navigation */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                EnergíaVis
              </span>
            </div>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-3xl mb-8 shadow-xl shadow-blue-600/20">
            <Zap className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Gestiona tu energía
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              de forma inteligente
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            Plataforma innovadora de gestión de energía prepago con
            gamificación, educación y control total de tu consumo eléctrico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Comenzar Gratis
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all border-2 border-gray-200 dark:border-gray-700"
            >
              Ver Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Herramientas poderosas para gestionar tu consumo eléctrico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <BarChart3 className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
              title: "Monitoreo en Tiempo Real",
              desc: "Visualiza tu consumo de energía en tiempo real con gráficos detallados y estadísticas precisas.",
              bg: "bg-blue-100 dark:bg-blue-900/30",
            },
            {
              icon: <TrendingDown className="w-7 h-7 text-green-600 dark:text-green-400" />,
              title: "Ahorro Inteligente",
              desc: "Recibe recomendaciones personalizadas para reducir tu consumo y ahorrar en tu factura.",
              bg: "bg-green-100 dark:bg-green-900/30",
            },
            {
              icon: <CreditCard className="w-7 h-7 text-purple-600 dark:text-purple-400" />,
              title: "Recargas Fáciles",
              desc: "Recarga tu saldo de energía prepago de forma rápida y segura desde cualquier dispositivo.",
              bg: "bg-purple-100 dark:bg-purple-900/30",
            },
            {
              icon: <Award className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />,
              title: "Gamificación",
              desc: "Gana puntos y desbloquea logros mientras aprendes a consumir energía de forma eficiente.",
              bg: "bg-yellow-100 dark:bg-yellow-900/30",
            },
            {
              icon: <BookOpen className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
              title: "Educación Energética",
              desc: "Accede a lecciones interactivas sobre eficiencia energética y buenas prácticas de consumo.",
              bg: "bg-indigo-100 dark:bg-indigo-900/30",
            },
            {
              icon: <Shield className="w-7 h-7 text-red-600 dark:text-red-400" />,
              title: "Seguridad Total",
              desc: "Tus datos están protegidos con los más altos estándares de seguridad y encriptación.",
              bg: "bg-red-100 dark:bg-red-900/30",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className={`flex items-center justify-center w-14 h-14 ${f.bg} rounded-xl mb-6`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Sparkles className="w-8 h-8 text-yellow-300" />, value: "30%", label: "Ahorro promedio mensual" },
              { icon: <Award className="w-8 h-8 text-yellow-300" />, value: "5,000+", label: "Usuarios activos" },
              { icon: <BarChart3 className="w-8 h-8 text-yellow-300" />, value: "98%", label: "Satisfacción del cliente" },
            ].map((s, i) => (
              <div key={i}>
                <div className="flex items-center justify-center mb-4">{s.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{s.value}</div>
                <div className="text-blue-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Comienza a controlar tu energía hoy
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya están ahorrando en su consumo eléctrico
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-gray-50 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Crear Cuenta Gratis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                EnergíaVis
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 EnergíaVis. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Términos
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
