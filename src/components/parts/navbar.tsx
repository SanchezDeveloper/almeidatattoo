"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useState } from "react";
import { useTheme } from "next-themes"; // Importa o hook do tema
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme(); // Obtém o tema atual

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 border-b font-medium bg-white dark:border-none dark:bg-black">
      <div className="w-full lg:w-4/5 mx-auto flex items-center justify-between">
        {/* Logo dinâmica conforme o tema */}

        <img
          className="w-11 h-11 rounded-full"
          src={theme === "dark" ? "/images/logo-menu.gif" : "/images/logo-menu-light.gif"}
          alt="Logo Animada"
        />
        {/*<img
          className="w-11 h-11 rounded-full"
          src={theme === "dark" ? "/images/logo-menu.jpg" : "/images/logo-menu-light.jpg"}
          alt="Logo da empresa"
        />*/}

        {/* Ícone do menu hambúrguer (só aparece em telas pequenas) */}
        <button
          onClick={toggleMenu}
          className="text-2xl text-zinc-800 dark:text-white lg:hidden"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        {/* Menu lateral (para telas pequenas) */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 w-2/5 h-full bg-zinc-900 bg-opacity-80 transition-transform duration-300 ease-in-out lg:hidden z-20`}
        >
          <div className="flex flex-col items-center mt-3 space-y-6 p-4 h-full">
            <Link href="/" className="text-white hover:text-accent transition-colors duration-300">Início</Link>
            <Link href="/services" className="text-white hover:text-accent transition-colors duration-300">Serviços</Link>
            <Link href="/contact" className="text-white hover:text-accent transition-colors duration-300">Contatos</Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Ícone de Fechar (acima do menu lateral) */}
        {isMenuOpen && (
          <div className="fixed top-4 right-4 z-30">
            <button onClick={toggleMenu} className="text-3xl text-white">
              ×
            </button>
          </div>
        )}

        {/* Menu para telas grandes */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          <Link href="/" className="hover:text-accent transition-colors duration-300">Início</Link>
          <Link href="/services" className="hover:text-accent transition-colors duration-300">Serviços</Link>
          <Link href="/contact" className="hover:text-accent transition-colors duration-300">Contatos</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
