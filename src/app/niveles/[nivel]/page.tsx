import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Heart } from "lucide-react";
import { levels } from "@/lib/school";

type Props = { params: Promise<{ nivel: string }> };

export function generateStaticParams() { return levels.map((level) => ({ nivel: level.id })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { nivel } = await params;
  const level = levels.find((item) => item.id === nivel);
  if (!level) return {};
  return { title: `Educación ${level.name}`, description: level.description, openGraph: { title: `Educación ${level.name} | IEP Orlando Ortiz Ochoa`, description: level.description, images: [] }, twitter: { card: "summary", title: `Educación ${level.name} | IEP Orlando Ortiz Ochoa`, description: level.description, images: [] } };
}

export default async function LevelPage({ params }: Props) {
  const { nivel } = await params;
  const level = levels.find((item) => item.id === nivel);
  if (!level) notFound();
  return <main id="contenido" className={`level-detail level-${level.color}`}><section className="detail-hero"><div className="container"><Link href="/#niveles" className="back-link"><ArrowLeft size={16} /> Todos los niveles</Link><div className="detail-grid"><div><span className="eyebrow"><span /> EDUCACIÓN {level.name.toUpperCase()} · {level.stage.toUpperCase()}</span><h1>{level.tagline}</h1><p>{level.detail}</p><Link href="/#contacto" className="button button-primary">Consultar sobre {level.name.toLowerCase()} <ArrowUpRight size={18} /></Link></div><div className="detail-image"><Image src={level.image} alt={level.alt} fill sizes="(max-width: 760px) 100vw, 50vw" priority /><span className="level-stage">{level.stage}</span></div></div></div></section><section className="section"><div className="container detail-learning"><div><span className="eyebrow"><span /> APRENDIZAJES QUE ACOMPAÑAN</span><h2>Mucho por descubrir.<br /><em>Todo por crecer.</em></h2><p>{level.description}</p></div><div className="skills-list">{level.skills.map((skill) => <div key={skill}><span><Check size={19} /></span><h3>{skill}</h3></div>)}</div></div></section><section className="container detail-callout"><Heart size={35} strokeWidth={1.4} /><h2>Cada estudiante tiene su propio camino.<br /><em>Queremos acompañarlo.</em></h2><Link href="/#admisiones" className="button button-primary">Conocer el proceso de admisión <ArrowUpRight size={18} /></Link></section><section className="section"><div className="container"><span className="eyebrow">SIGUE EXPLORANDO</span><div className="other-levels">{levels.filter((item) => item.id !== nivel).map((item) => <Link href={`/niveles/${item.id}`} key={item.id}><div><span>{item.stage}</span><h3>Educación {item.name}</h3></div><ArrowRight size={24} /></Link>)}</div><p className="image-disclaimer">Fotografías referenciales. Consulta directamente con la institución las edades, grados y condiciones de ingreso vigentes.</p></div></section></main>;
}
