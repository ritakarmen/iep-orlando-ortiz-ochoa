import Link from "next/link";
import { ArrowUpRight, Heart, Mail, MapPin, Phone } from "lucide-react";
import { Brand } from "./brand";
import { school } from "@/lib/school";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro"><Brand /><p>Un lugar para descubrir talentos, construir sueños y aprender para la vida.</p><span className="footer-made"><Heart size={14} /> Educamos con propósito.</span></div>
        <div><h3>Descubre el colegio</h3><Link href="/#nosotros">Nuestra propuesta</Link><Link href="/#vida-escolar">Vida escolar</Link><Link href="/#admisiones">Admisiones</Link><Link href="/#preguntas">Preguntas frecuentes</Link></div>
        <div><h3>Niveles educativos</h3><Link href="/niveles/inicial">Educación Inicial <ArrowUpRight size={13} /></Link><Link href="/niveles/primaria">Educación Primaria <ArrowUpRight size={13} /></Link><Link href="/niveles/secundaria">Educación Secundaria <ArrowUpRight size={13} /></Link></div>
        <div><h3>Estamos para ayudarte</h3>{school.address && <p className="contact-line"><MapPin size={16} /> {school.address}</p>}{school.phone && <a href={`tel:${school.phone.replace(/\s/g, "")}`}><Phone size={16} /> {school.phone}</a>}{school.email && <a href={`mailto:${school.email}`}><Mail size={16} /> {school.email}</a>}<Link href="/#contacto">Consulta sobre admisiones <ArrowUpRight size={13} /></Link><p className="footer-note">Juntos, demos el siguiente paso en su educación.</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} IEP Orlando Ortiz Ochoa.</span><span>Inicial · Primaria · Secundaria</span></div>
    </footer>
  );
}
