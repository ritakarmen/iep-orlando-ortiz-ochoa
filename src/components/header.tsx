"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "./brand";

const navigation = [
  ["Inicio", "/"],
  ["Nosotros", "/#nosotros"],
  ["Niveles educativos", "/#niveles"],
  ["Vida escolar", "/#vida-escolar"],
  ["Admisiones", "/#admisiones"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); document.getElementById("menu-toggle")?.focus(); }
    };
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [open]);

  return (
    <>
      <div className="announcement"><div className="container announcement-inner"><span><Sparkles size={13} /> Una gran etapa comienza con una buena educación.</span><Link href="/#admisiones">Conoce nuestro proceso de admisión <ArrowUpRight size={13} /></Link></div></div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegación principal">
            {navigation.map(([label, href]) => <Link key={label} href={href} className={href === "/" && pathname === "/" ? "nav-active" : ""}>{label}</Link>)}
          </nav>
          <Link href="/#contacto" className="button button-primary header-cta">Conversemos <ArrowUpRight size={16} /></Link>
          <button id="menu-toggle" type="button" className="menu-toggle" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        <nav id="mobile-navigation" className="mobile-nav" hidden={!open} aria-label="Navegación móvil">
          {navigation.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></Link>)}
          <Link href="/#contacto" className="mobile-contact" onClick={() => setOpen(false)}>Conversemos <ArrowUpRight size={16} /></Link>
        </nav>
      </header>
    </>
  );
}
