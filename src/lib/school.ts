// Completar con los datos oficiales antes de publicar el sitio.
export const school = {
  name: "IEP Orlando Ortiz Ochoa",
  shortName: "Orlando Ortiz Ochoa",
  email: "",
  phone: "",
  whatsapp: "", // Código de país y número, solo dígitos. Ejemplo de formato: 519XXXXXXXX.
  address: "",
  mapsUrl: "",
};

export const levels = [
  {
    id: "inicial",
    name: "Inicial",
    stage: "3, 4 y 5 años",
    tagline: "El comienzo de grandes descubrimientos.",
    description: "Aprender jugando, explorar con curiosidad y crecer en un entorno de cariño y confianza.",
    image: "/images/inicial.jpg",
    alt: "Niños explorando y aprendiendo juntos en el aula",
    color: "gold",
    skills: ["Aprendizaje a través del juego", "Desarrollo de la autonomía", "Expresión y creatividad", "Habilidades socioemocionales"],
    detail: "Cada descubrimiento cuenta. Acompañamos los primeros pasos de nuestros niños con experiencias que despiertan sus sentidos, su imaginación y las ganas de conocer el mundo.",
  },
  {
    id: "primaria",
    name: "Primaria",
    stage: "1.° a 6.° grado",
    tagline: "La curiosidad se convierte en aprendizaje.",
    description: "Construimos bases sólidas, cultivamos talentos y descubrimos el gusto por aprender cada día.",
    image: "/images/primaria.jpg",
    alt: "Estudiantes participando en una actividad de aprendizaje en clase",
    color: "sky",
    skills: ["Comunicación y comprensión lectora", "Pensamiento lógico y matemático", "Aprendizaje por proyectos", "Convivencia y trabajo en equipo"],
    detail: "Aprender es hacer preguntas, encontrar caminos y compartir descubrimientos. Promovemos un aprendizaje activo que conecta los conocimientos del aula con la vida cotidiana.",
  },
  {
    id: "secundaria",
    name: "Secundaria",
    stage: "1.° a 5.° grado",
    tagline: "El futuro empieza con sus propias ideas.",
    description: "Impulsamos el pensamiento crítico, la autonomía y la confianza para construir su propio camino.",
    image: "/images/secundaria.jpg",
    alt: "Jóvenes estudiando y desarrollando ideas en equipo",
    color: "navy",
    skills: ["Pensamiento crítico e investigación", "Liderazgo y participación", "Autonomía y hábitos de estudio", "Exploración de intereses y vocación"],
    detail: "Acompañamos una etapa de cambios, decisiones y nuevos retos. Nuestro propósito es que cada estudiante reconozca sus capacidades y se prepare para afrontar el futuro con criterio y valores.",
  },
] as const;
