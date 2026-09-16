import Link from "next/link";
import Image from "next/image";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand${light ? " brand-light" : ""}`} aria-label="IEP Orlando Ortiz Ochoa — Inicio">
      <span className="brand-seal"><Image src="/images/escudo-colegio.png" alt="Escudo del colegio Orlando Ortiz Ochoa" width={82} height={82} sizes="82px" loading="eager" /></span>
      <span className="brand-name"><span>INSTITUCIÓN EDUCATIVA PRIVADA</span><strong>Orlando Ortiz Ochoa</strong><small>Aprender. Crecer. Trascender.</small></span>
    </Link>
  );
}
