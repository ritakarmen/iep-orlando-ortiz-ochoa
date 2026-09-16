import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, Check, ChevronDown, Compass, GraduationCap, Heart, Lightbulb, MessageCircle, Palette, Puzzle, ShieldCheck, Sprout, Users } from "lucide-react";
import { AdmissionForm } from "@/components/admission-form";
import { levels, school } from "@/lib/school";

const pillars = [
  { icon: Heart, title: "Valores que dejan huella", text: "Respeto, empatía y responsabilidad para ser mejores personas cada día." },
  { icon: Lightbulb, title: "Aprender con propósito", text: "Experiencias que despiertan la curiosidad y conectan el aprendizaje con la vida." },
  { icon: Users, title: "Crecemos en comunidad", text: "Familia y colegio unidos para acompañar cada paso de su desarrollo." },
  { icon: Sprout, title: "Cada estudiante importa", text: "Una mirada cercana que reconoce sus fortalezas, su ritmo y sus sueños." },
];

const questions = [
  ["¿Qué niveles educativos ofrece el colegio?", "El IEP Orlando Ortiz Ochoa ofrece Educación Inicial, Primaria y Secundaria. Puedes explorar la propuesta de cada nivel en esta web y preparar una consulta para conocer más detalles."],
  ["¿Cómo puedo iniciar el proceso de admisión?", "Empieza por conocer nuestra propuesta y elige el nivel de interés. En la sección de contacto puedes preparar tu consulta. Las vacantes, fechas, requisitos y costos deben confirmarse directamente con la institución."],
  ["¿Puedo conocer el colegio antes de matricular?", "Puedes incluir tu interés en una visita en el formulario de consulta. La disponibilidad, el día y el horario de una visita deben coordinarse y confirmarse con el colegio."],
  ["¿Dónde consulto los requisitos y las pensiones?", "Solicita la información vigente para el nivel y grado que te interesa a través de los canales oficiales del colegio. La web no publica montos, disponibilidad ni requisitos que aún no hayan sido confirmados por la institución."],
];

export default function Home() {
  return (
    <main id="contenido">
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-kicker"><span /> UN COLEGIO, MUCHAS POSIBILIDADES</span>
            <h1 id="hero-title">Pequeños pasos.<br /><span>Grandes</span><br /><em>futuros.</em><span className="hero-star" aria-hidden="true">✳</span></h1>
            <p>Acompañamos sus primeros descubrimientos y sus grandes sueños. Una educación con valores para aprender, crecer y transformar el mundo.</p>
            <div className="hero-actions"><Link href="#niveles" className="button button-primary">Descubre nuestra propuesta <ArrowUpRight size={18} /></Link><Link href="#nosotros" className="hero-secondary">Conócenos <span><ArrowDown size={17} /></span></Link></div>
            <div className="hero-levels"><span><Check size={14} /> Inicial</span><span><Check size={14} /> Primaria</span><span><Check size={14} /> Secundaria</span><span className="hero-levels-note">Juntos en cada etapa.</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image"><Image src="/images/hero.jpg" alt="Estudiantes compartiendo un momento de lectura y aprendizaje" fill sizes="(max-width: 760px) 100vw, 52vw" priority /><div className="hero-image-shade" /><div className="image-caption"><span className="caption-line" /><span>El mejor lugar para empezar<br /><strong>a ser todo lo que pueden ser.</strong></span></div></div>
            <div className="floating-note"><span className="note-icon"><Heart size={24} strokeWidth={1.7} /></span><span>Mucho más que aprender.<strong>Crecer siendo felices.</strong></span><span className="note-spark" aria-hidden="true">✧</span></div>
            <div className="hero-stamp" aria-hidden="true"><span>APRENDER PARA</span><Sprout size={29} strokeWidth={1.4} /><span>TODA LA VIDA</span></div>
            <div className="hero-dots" aria-hidden="true" />
          </div>
        </div>
        <div className="hero-bottom container"><span>SU HISTORIA EMPIEZA AQUÍ</span><span className="hero-bottom-line" /><a href="#niveles" aria-label="Explorar niveles educativos"><ArrowDown size={17} /></a></div>
      </section>

      <section className="values-strip" aria-label="Nuestra esencia"><div className="container values-strip-grid"><div><BookOpen /><span>Educación <strong>integral</strong></span></div><div><Heart /><span>Formación en <strong>valores</strong></span></div><div><Users /><span>Acompañamiento <strong>cercano</strong></span></div><div><Sprout /><span>Aprendizaje para <strong>la vida</strong></span></div></div></section>

      <section id="niveles" className="section levels-section">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow"><span /> CRECEMOS CONTIGO</span><h2>Una gran educación.<br /><em>En cada etapa.</em></h2></div><p>Cada edad es un mundo por descubrir.<br />Una propuesta que crece con ellos, desde<br className="desktop-break" /> sus primeros pasos hasta sus próximos desafíos.</p></div>
          <div className="levels-grid">{levels.map((level, index) => { const Icon = [Puzzle, BookOpen, GraduationCap][index]; return <article key={level.id} className={`level-card level-${level.color}`}><Link href={`/niveles/${level.id}`} className="level-image-link" aria-label={`Conocer Educación ${level.name}`}><div className="level-photo"><Image src={level.image} alt={level.alt} fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw" /><span className="level-stage">{level.stage}</span></div></Link><div className="level-body"><div className="level-title"><span className="level-icon"><Icon size={24} strokeWidth={1.7} /></span><h3>{level.name}</h3><span className="level-number">0{index + 1}</span></div><p>{level.description}</p><Link href={`/niveles/${level.id}`} className="level-link">Descubre {level.name.toLowerCase()} <span><ArrowUpRight size={18} /></span></Link></div></article>; })}</div>
        </div>
      </section>

      <section id="nosotros" className="section about-section"><div className="container about-grid"><div className="about-visual"><div className="about-image"><Image src="/images/inicial.jpg" alt="Docente acompañando el aprendizaje de estudiantes en el aula" fill sizes="(max-width: 760px) 100vw, 45vw" /></div><div className="about-quote"><span aria-hidden="true">“</span><p>Educar es descubrir<br />lo extraordinario<br /><em>en cada estudiante.</em></p><span className="quote-signature">NUESTRA RAZÓN DE SER</span></div><span className="about-spark" aria-hidden="true">✳</span></div><div className="about-content"><span className="eyebrow"><span /> SOMOS ORLANDO ORTIZ OCHOA</span><h2>Un colegio que enseña.<br /><em>Una comunidad que inspira.</em></h2><p>Creemos que una buena educación va más allá del aula. Por eso, ponemos en el centro a nuestros estudiantes: lo que sienten, lo que sueñan y todo lo que pueden llegar a ser.</p><div className="pillars">{pillars.map(({ icon: Icon, title, text }) => <div className="pillar" key={title}><span><Icon size={21} strokeWidth={1.7} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><Link href="#contacto" className="text-link">Conozcámonos mejor <ArrowUpRight size={18} /></Link></div></div></section>

      <section id="vida-escolar" className="section school-life"><div className="container"><div className="section-heading"><div><span className="eyebrow"><span /> APRENDER TAMBIÉN ES VIVIR</span><h2>Más experiencias.<br /><em>Más formas de descubrirse.</em></h2></div><p>Dentro y fuera del aula, cada experiencia<br className="desktop-break" /> es una oportunidad para desarrollar<br className="desktop-break" /> talentos y aprender juntos.</p></div><div className="life-grid"><div className="life-main"><Image src="/images/secundaria.jpg" alt="Estudiantes compartiendo ideas y aprendiendo en comunidad" fill sizes="(max-width: 760px) 100vw, 55vw" /><div><span className="photo-label">VIDA EN COMUNIDAD</span><h3>Los mejores recuerdos<br />se construyen juntos.</h3><p>Amistades, aprendizajes y momentos que nos hacen crecer.</p></div></div><div className="life-features"><article><span className="life-icon navy"><Palette size={25} strokeWidth={1.6} /></span><div><span className="mini-eyebrow">IMAGINAR Y CREAR</span><h3>Talentos que se expresan</h3><p>El arte y la creatividad como formas de descubrir su propia voz.</p></div></article><article><span className="life-icon gold"><Compass size={25} strokeWidth={1.6} /></span><div><span className="mini-eyebrow">EXPLORAR Y DESCUBRIR</span><h3>Ideas que van más allá</h3><p>La curiosidad como punto de partida para hacer preguntas y encontrar respuestas.</p></div></article><article><span className="life-icon sky"><Users size={25} strokeWidth={1.6} /></span><div><span className="mini-eyebrow">COMPARTIR Y CRECER</span><h3>Aprender a convivir</h3><p>Experiencias que nos enseñan a colaborar, escuchar y cuidar a los demás.</p></div></article></div></div><p className="image-disclaimer">Fotografías referenciales de experiencias educativas.</p></div></section>

      <section id="admisiones" className="section admissions-section"><div className="container"><div className="section-heading centered"><span className="eyebrow"><span /> EL INICIO DE ALGO GRANDE</span><h2>Su próximo capítulo<br /><em>lo escribimos juntos.</em></h2><p>Elegir un colegio es una decisión importante.<br />Te acompañamos para que des el siguiente paso con confianza.</p></div><div className="steps-grid">{[{ number: "01", icon: BookOpen, title: "Descubre nuestra propuesta", text: "Explora los niveles y conoce la forma en que entendemos la educación." }, { number: "02", icon: MessageCircle, title: "Conversemos en familia", text: "Prepara tus preguntas y consulta los requisitos, vacantes y fechas vigentes." }, { number: "03", icon: Sprout, title: "Demos el siguiente paso", text: "Coordina con el colegio una visita y recibe orientación para el proceso de matrícula." }].map(({ number, icon: Icon, title, text }) => <article className="admission-step" key={number}><div className="step-top"><span>{number}</span><Icon size={27} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="admission-next"><Link href="#contacto" className="button button-primary">Me interesa formar parte <ArrowUpRight size={18} /></Link><span><ShieldCheck size={16} /> Cada gran camino empieza con una conversación.</span></div></div></section>

      <section id="contacto" className="contact-section"><div className="container contact-grid"><div className="contact-copy"><span className="eyebrow light"><span /> HABLEMOS DE SU FUTURO</span><h2>Grandes sueños.<br />Un primer <em>hola.</em></h2><p>Nos encantará acompañarte en esta nueva etapa. Prepara tu consulta y cuéntanos qué buscas para la educación de tu familia.</p><div className="contact-promise"><span><MessageCircle size={24} strokeWidth={1.5} /></span><div><h3>Una conversación que importa</h3><p>Resuelve tus dudas sobre nuestra propuesta y el proceso de admisión.</p></div></div><div className="contact-promise"><span><Heart size={24} strokeWidth={1.5} /></span><div><h3>Familia y colegio, un mismo equipo</h3><p>El comienzo de una relación basada en la confianza y el acompañamiento.</p></div></div><div className="contact-decoration" aria-hidden="true"><span>✳</span><span>Su futuro nos inspira.</span></div></div><AdmissionForm /></div></section>

      <section id="preguntas" className="section faq-section"><div className="container faq-grid"><div><span className="eyebrow"><span /> TE AYUDAMOS A DECIDIR</span><h2>Es natural<br /><em>tener preguntas.</em></h2><p>Aquí encontrarás un buen punto de partida.</p><Link href="#contacto" className="text-link">Tengo otra consulta <ArrowUpRight size={17} /></Link></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={19} /></summary><p>{answer}</p></details>)}</div></div></section>

      {school.whatsapp && <a className="floating-contact" href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp"><MessageCircle size={24} /></a>}
    </main>
  );
}
