# IEP Orlando Ortiz Ochoa

Web institucional en español, construida con **Next.js App Router, React y TypeScript**. Diseño adaptable a escritorio, tableta y celular.

## Ejecutar

Requiere Node.js 20.9 o superior y npm.

```sh
npm install
npm run dev
```

Abrir `http://localhost:3000`.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Contenido

- Portada, propuesta educativa, vida escolar, proceso de admisión y preguntas frecuentes.
- Páginas de Inicial, Primaria y Secundaria en `/niveles/inicial`, `/niveles/primaria` y `/niveles/secundaria`.
- Menú móvil, navegación por teclado, preguntas desplegables y preferencias de movimiento reducido.
- Formulario validado que prepara una consulta, permite copiarla o descargarla, y habilita el envío por WhatsApp o correo al configurar esos canales.
- Metadatos específicos por nivel, fuentes e imágenes locales y optimización de imágenes con Next.js.

## Personalización antes de publicar

Editar `src/lib/school.ts` para completar el correo, teléfono, WhatsApp (código de país y número, solo dígitos), dirección y textos de cada nivel. No se han inventado datos de contacto, pensiones, vacantes ni testimonios. La propuesta editorial y los rangos de edad/grado deben validarse con el colegio.

El formulario **no envía ni almacena datos en un servidor**. Los datos permanecen en la memoria de la página hasta que la persona decide copiar, descargar o enviar la consulta mediante un canal configurado. Sin correo o WhatsApp, se indica explícitamente que la consulta no ha sido enviada.

Los colores se editan en las variables al inicio de `src/app/globals.css`. La paleta está basada en el escudo facilitado por el colegio: azul marino `#142f67`, dorado `#edc64b` y celeste `#3979c1`. El archivo original, con transparencia, está en `public/images/escudo-colegio.png` y se utiliza en la cabecera, el pie de página y el icono de la pestaña del navegador.

## Fotografías referenciales

Las fotografías son de Unsplash y Pexels y no representan al colegio. Sustituirlas por imágenes autorizadas de la institución antes de una publicación oficial. Recursos utilizados:

- Portada y Primaria: https://images.unsplash.com/photo-1588072432836-e10032774350
- Inicial: https://www.pexels.com/photo/8613082/
- Secundaria: https://images.unsplash.com/photo-1509062522246-3755977927d7

El sitio se puede desplegar en un servicio compatible con Next.js. No requiere base de datos ni variables secretas para ejecutarse.

## Pruebas de interfaz

Tras `npm run build`, ejecutar `npx playwright install chromium` y `npm run test:e2e`. Las pruebas comprueban las rutas, el formulario, la descarga de consultas, la navegación y el diseño a 1440, 820 y 390 píxeles. Las capturas quedan en `artifacts/`.

Para usar Microsoft Edge ya instalado en Windows, se puede omitir la instalación de Chromium y establecer `$env:PLAYWRIGHT_CHANNEL = 'msedge'` en PowerShell antes de ejecutar las pruebas.
