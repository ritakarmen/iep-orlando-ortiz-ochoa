import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return <main id="contenido" className="not-found container"><Compass size={54} strokeWidth={1.3} /><span className="eyebrow">PÁGINA NO ENCONTRADA</span><h1>Busquemos otro camino.</h1><p>Esta página no está disponible. Vuelve al inicio para seguir conociendo nuestro colegio.</p><Link href="/" className="button button-primary"><ArrowLeft size={17} /> Volver al inicio</Link></main>;
}
