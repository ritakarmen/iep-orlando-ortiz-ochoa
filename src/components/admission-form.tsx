"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Download, RotateCcw, ShieldCheck } from "lucide-react";
import { school } from "@/lib/school";

export function AdmissionForm() {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const hasContact = Boolean(school.whatsapp || school.email);

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setMessage(`Hola, IEP Orlando Ortiz Ochoa.\n\nMi nombre es ${String(data.get("name")).trim()} y me gustaría recibir información sobre admisiones para el nivel ${data.get("level")}.\n\nCorreo de contacto: ${String(data.get("email")).trim()}${data.get("phone") ? `\nTeléfono: ${String(data.get("phone")).trim()}` : ""}${String(data.get("message")).trim() ? `\n\nConsulta: ${String(data.get("message")).trim()}` : ""}\n\n¡Muchas gracias!`);
    setCopied(false);
    setCopyError(false);
  }

  async function copy() {
    try { await navigator.clipboard.writeText(message); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  }

  function download() {
    const url = URL.createObjectURL(new Blob([message], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "consulta-admisiones-orlando-ortiz-ochoa.txt";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <div className="admission-form">
      {message ? <div className="form-result" role="status" aria-live="polite"><span className="result-icon"><Check size={26} /></span><h3>Tu consulta está lista</h3><p>{hasContact ? "Revisa el mensaje y envíalo al colegio por el canal que prefieras." : "Puedes copiarla o descargarla. El colegio aún no ha habilitado un canal de envío en esta web; tu consulta no ha sido enviada."}</p><pre className="message-preview">{message}</pre><div className="result-actions">{school.whatsapp && <a className="button button-primary" href={`https://wa.me/${school.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">Enviar por WhatsApp <ArrowUpRight size={16} /></a>}{school.email && <a className="button button-primary" href={`mailto:${school.email}?subject=${encodeURIComponent("Consulta sobre admisiones")}&body=${encodeURIComponent(message)}`}>Enviar por correo <ArrowUpRight size={16} /></a>}<button className="button button-outline" onClick={copy}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Copiada" : "Copiar consulta"}</button><button className="button button-outline" onClick={download}><Download size={16} /> Descargar</button></div>{copyError && <p className="form-notice">No se pudo copiar automáticamente. Puedes seleccionar el texto o descargarlo.</p>}<button className="text-button" onClick={() => setMessage("")}><RotateCcw size={14} /> Preparar otra consulta</button></div> : <form onSubmit={prepare}>
        <span className="eyebrow">DEMOS EL PRIMER PASO</span><h3>Queremos conocerte</h3><p>Cuéntanos qué etapa está por comenzar.</p>
        <div className="field"><label htmlFor="parent-name">Nombre del padre, madre o apoderado <span>*</span></label><input id="parent-name" name="name" autoComplete="name" placeholder="Tu nombre completo" required minLength={2} maxLength={100} pattern=".*\S.*" /></div>
        <div className="form-row"><div className="field"><label htmlFor="email">Correo electrónico <span>*</span></label><input type="email" id="email" name="email" autoComplete="email" placeholder="tucorreo@ejemplo.com" required maxLength={150} /></div><div className="field"><label htmlFor="phone">Celular <span className="optional">(opcional)</span></label><input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="Tu número de contacto" maxLength={25} /></div></div>
        <div className="field"><label htmlFor="level">Nivel de interés <span>*</span></label><select name="level" id="level" required defaultValue=""><option value="" disabled>Selecciona un nivel educativo</option><option value="Inicial">Inicial · 3, 4 y 5 años</option><option value="Primaria">Primaria · 1.° a 6.° grado</option><option value="Secundaria">Secundaria · 1.° a 5.° grado</option></select></div>
        <div className="field"><label htmlFor="message">¿En qué podemos ayudarte? <span className="optional">(opcional)</span></label><textarea id="message" name="message" placeholder="Cuéntanos tus dudas sobre nuestra propuesta educativa…" rows={3} maxLength={1500} /></div>
        <button type="submit" className="button button-primary form-submit">Preparar mi consulta <ArrowUpRight size={18} /></button>
        <p className="privacy-note"><ShieldCheck size={15} /> Tus datos se usan solo para preparar esta consulta en tu dispositivo. No se guardan en un servidor.</p>
      </form>}
    </div>
  );
}
