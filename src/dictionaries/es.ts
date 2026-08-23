import type { Dictionary } from './types';

/**
 * Spanish. Product names, company names, technologies and course titles stay as
 * written — they are proper nouns, not vocabulary.
 */
const es: Dictionary = {
  nav: {
    home: 'Inicio',
    education: 'Formación',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  common: {
    resume: 'Currículum 📄',
    languageLabel: 'Idioma',
    skipToContent: 'Saltar al contenido',
    madeWith: 'Hecho con {heart} por',
    scrollToTop: 'Volver arriba',
    toggleMenu: 'Abrir o cerrar el menú de navegación',
    theme: 'Tema',
    switchToLight: 'Cambiar al modo claro',
    switchToDark: 'Cambiar al modo oscuro',
  },
  meta: {
    siteTitle: 'Hurera Nadeem — Desarrollador Full-Stack',
    siteDescription:
      'Portafolio de Hurera Nadeem, ingeniero de software full-stack especializado en React, Next.js, Node.js y aplicaciones nativas en la nube. Descubre mi experiencia, formación y proyectos.',
    education: {
      title: 'Formación',
      description:
        'Formación de Hurera Nadeem: Grado en Ingeniería del Software por la NUST de Islamabad, además de cursos en línea de React, Next.js, Node.js, TypeScript y machine learning.',
    },
    experience: {
      title: 'Experiencia',
      description:
        'Experiencia profesional de Hurera Nadeem en ingeniería full-stack, ingeniería de producto y DevOps, además de su labor de voluntariado en comunidades tecnológicas.',
    },
    projects: {
      title: 'Proyectos',
      description:
        'Una selección de proyectos de Hurera Nadeem: plataformas SaaS con IA, herramientas de gestión de personal y aplicaciones web y móviles full-stack creadas con Next.js, React y Node.js.',
    },
    contact: {
      title: 'Contacto',
      description:
        'Ponte en contacto con Hurera Nadeem: conecta por GitHub, LinkedIn, Instagram y Facebook, o escríbeme por correo electrónico.',
    },
    notFound: { title: '404 — Página no encontrada', description: 'Esta página no existe.' },
  },
  home: {
    greetingTitle: '¡Hola! Soy Hurera',
    greetingSubtitle:
      'Desarrollador full-stack (MERN/MEVN) 💻 · Entusiasta de DevOps y la nube ☁️ · Solucionador de problemas 🤔',
    whatIDoTitle: '{ ¿A qué me dedico? }',
    whatIDoLead:
      'Me encanta programar proyectos por contrato y ayudar a las empresas a hacer crecer su negocio. 🤜🤛',
    whatIDoLead2: 'Estas son mis especialidades técnicas:',
    cards: {
      frontend: {
        name: 'Ingeniería frontend',
        descriptions: [
          'Desarrollo de aplicaciones web responsive, de página única y renderizadas en servidor, con React.js, Next.js, Vue 3 y Astro.',
          'Gestión del estado de la aplicación con Redux, Redux Saga, Pinia y React Context.',
          'Creación de bibliotecas de componentes modulares y reutilizables con Tailwind CSS, ShadCN, Material-UI y Bootstrap, partiendo de diseños en Figma.',
          'Desarrollo de frontends con tipado seguro en TypeScript, cuidando la accesibilidad, la adaptabilidad y el rendimiento en todos los dispositivos.',
          'Trabajo con internacionalización (i18n), widgets integrables e integraciones frontend de terceros.',
        ],
      },
      backend: {
        name: 'Ingeniería backend y APIs',
        descriptions: [
          'Diseño y construcción de APIs REST, servicios y microservicios con Node.js, Express.js, NestJS y Fastify.',
          'Trabajo con bases de datos relacionales y documentales —PostgreSQL, MySQL, MongoDB y DynamoDB— mediante ORMs y ODMs como Prisma, Sequelize y Mongoose.',
          'Implementación de autenticación y autorización con JWT, OAuth, verificación por OTP y control de acceso basado en roles.',
          'Uso de Redis para caché y gestión de sesiones, y diseño de esquemas y migraciones para modelos de datos en evolución.',
          'Integración de APIs y webhooks de terceros, y construcción de canales de notificación por correo electrónico y SMS.',
        ],
      },
      cloud: {
        name: 'Nube, DevOps e infraestructura',
        descriptions: [
          'Construcción y despliegue en AWS —Lambda, DynamoDB, S3, CloudFront, ECS Fargate y EC2— con infraestructura como código mediante AWS CDK.',
          'Contenerización de aplicaciones con Docker y configuración de Nginx y Caddy como proxies inversos.',
          'Automatización de pruebas, compilaciones y despliegues mediante pipelines de CI/CD en GitHub Actions, GitLab CI/CD y Jenkins.',
          'Escritura de pruebas unitarias y de extremo a extremo con Jest y Playwright para mantener la fiabilidad del código a medida que crece.',
          'Trabajo con GCP, Azure y Firebase junto a AWS, y colaboración mediante Git y Jira.',
        ],
      },
      ai: {
        name: 'IA e ingeniería de agentes',
        descriptions: [
          'Creación de productos con IA y flujos de trabajo con agentes, usando LLMs de Anthropic (Claude), OpenAI y otros.',
          'Trabajo con el Model Context Protocol (MCP) para exponer herramientas y datos a agentes de programación y clientes de IA.',
          'Integración de recuperación de información sobre documentos, sitios web y bases de datos, con revisión humana y salvaguardas sobre la salida del modelo.',
          'Automatización de canales de generación de contenido y páginas, desde la salida del modelo hasta la compilación y el despliegue.',
          'Desarrollo de herramientas, habilidades y prompts para agentes que se mantienen versionados y reproducibles.',
        ],
      },
    },
  },
  education: {
    title: 'Formación',
    subtitle: 'Mis titulaciones y certificaciones',
    intro: 'Esto es lo que conviene saber sobre mi trayectoria académica 🙃',
    degreeSection: '{ Titulación obtenida }',
    coursesSection: '{ Cursos en línea }',
    university: 'National University of Sciences and Technology, Islamabad',
    degree: 'Grado en Ingeniería del Software',
    location: 'Islamabad, Pakistán',
    bullets: [
      '⚡ Adquirí amplios conocimientos gracias a exigentes asignaturas de Informática que abarcaron áreas como estructuras de datos, algoritmos, sistemas de gestión de bases de datos, sistemas operativos y machine learning.',
      '⚡ Conocí de primera mano todo el ciclo de desarrollo de software y los procesos del sector a través de asignaturas especializadas de ingeniería del software, como Ingeniería de Requisitos, Diseño y Arquitectura de Software y Construcción de Software, entre otras.',
      '⚡ Además de lo académico, he cursado formación en desarrollo con el stack MERN y he explorado el mundo de la web :)',
      '⚡ El entorno de apoyo de la NUST ha sido decisivo en mi desarrollo personal, fomentando la diversidad y reforzando mi confianza. El énfasis en la construcción de comunidad también ha contribuido enormemente a mi crecimiento.',
      '⚡ Una de mis actividades extracurriculares más satisfactorias ha sido liderar y gestionar comunidades tecnológicas como HackClub NUST, Google Developers Student Club (GDSC) NUST, IEEE-NUST, NUST Media Club y Orientation of NUST. Han sido experiencias muy gratificantes que me han permitido conectar con personas afines y contribuir al vibrante ecosistema, técnico y no técnico, de la NUST.',
    ],
  },
  experience: {
    title: 'Experiencia',
    subtitle: 'Empleo, prácticas y voluntariado',
    intro:
      'Soy un ingeniero de software apasionado al que le encanta crear soluciones creativas con código. Mi especialidad principal es el desarrollo de aplicaciones escalables con el stack MERN. Además, me entusiasma impulsar comunidades tecnológicas y participo activamente en distintos eventos del sector. Orientar y apoyar a quienes empiezan su carrera como desarrolladores me produce una enorme satisfacción, porque todos conocemos la lucha de encontrar el punto y coma que falta. 😉',
    work: 'Empleo',
    volunteerships: 'Voluntariado',
    entries: {
      pockla: {
        role: 'Ingeniero de Software Sénior',
        tenure: 'Noviembre de 2025 - Actualidad',
        location: 'Londres, Reino Unido · En remoto',
        description: [
          'Pockla es una startup de AdTech con sede en Londres que construye infraestructura «agent-first» para sitios web autoadaptables: en lugar de una única landing page estática para todo el mundo, agentes de IA generan una página adaptada a cada cliente potencial, sin necesidad de rehacer el sitio.',
          'La plataforma gestiona el ciclo completo de generación de leads para empresas británicas de seguros, finanzas, reclamaciones y servicios jurídicos: atrae tráfico mediante publicidad de pago, llamadas salientes con IA y correo en frío, lleva a cada prospecto a una página generada solo para él y después lo cualifica y cultiva con agentes de SMS y voz basados en IA. Marcas como Lottie, Kene, Omnos y NWEH ya confían en ella.',
          'Respaldada por unos 2 millones de libras de financiación, incluida una ronda semilla de 1,6 millones liderada por Venrex, con participación de Upside Ventures (el brazo inversor de los Sidemen), Love Ventures, Shuttle y SyndicateRoom.',
          'Desarrollo del núcleo de la plataforma CLI en Node.js y de un servidor MCP que expone más de 30 herramientas y orquesta 20 skills autónomas de Claude Code mediante una máquina de estados, para generar, revisar, probar y desplegar landing pages en Astro de principio a fin.',
          'Diseño del backend serverless en AWS con una API en Fastify sobre Lambda, DynamoDB, S3 y CloudFront aprovisionados con CDK, más una capa edge en ECS Fargate con Caddy y TLS bajo demanda para el enrutado multiinquilino de dominios personalizados.',
          'Diagnostiqué y eliminé un fallo de memoria que bloqueaba la producción en las compilaciones masivas de páginas: lo rastreé hasta un límite fijo de memoria del compilador WASM y migré al compilador nativo en Rust de Astro, lo que permitió compilar más de 2.000 páginas en unos 40 segundos y retirar por completo la solución provisional por lotes.',
          'Rediseño del pipeline de despliegue para replicar toda la salida de compilación en S3 con comparación por checksum, de modo que solo se suben los archivos modificados mientras cada página, recurso y artefacto SEO se sirve desde el mismo origen.',
          'Implementación de espacios de trabajo multiinquilino con autenticación JWT de acceso y refresco y control de acceso basado en roles, junto a un canal de ingesta de leads y reenvío a compradores con seguimiento de entrega por cada envío.',
        ],
      },
      ripeseed: {
        role: 'Ingeniero de Software',
        tenure: 'Agosto de 2024 - Actualidad',
        location: 'Lahore, Pakistán',
        description: [
          'RipeSeed es un estudio de ingeniería de producto con sede en Lahore, fundado en 2021, que desarrolla productos web, móviles y de IA para clientes de SaaS, comercio electrónico y startups: más de 150 proyectos entregados, una valoración de 5,0 en Clutch y más de un millón de dólares facturados en Upwork íntegramente desde Pakistán.',
          'Desarrollo de aplicaciones web escalables y de alto rendimiento con React.js, Next.js, Node.js y NestJS, usando TypeScript para garantizar un código con tipado seguro y mantenible, sobre infraestructura nativa en la nube de AWS y APIs REST pensadas para la escalabilidad y la alta disponibilidad.',
          'Construcción de Brava CrewConnect, una plataforma de gestión de personal para un fabricante estadounidense de tejas que automatiza la certificación formativa de los equipos, la asignación de trabajos y el seguimiento del cumplimiento entre subcontratistas, con integraciones de Monday.com, FlexiQuiz y CompanyCam y notificaciones multicanal por correo y SMS.',
          'Diseñé y entregué un sistema de control de acceso basado en roles gobernado por base de datos, con una matriz de permisos editable en tiempo de ejecución y un selector de «ver como» que resuelve los permisos de un único rol y solo puede restringir privilegios, nunca ampliarlos, aplicado tanto en la API como en el panel de administración.',
          'Diseñé un motor de territorios geográficos que asigna cada trabajo a un único territorio y representante de campo responsable, con cobertura en varios niveles de país, estado y código postal, resolución por criterio más específico y un mapa coroplético interactivo para dibujar las áreas de cobertura.',
          'Entregué de principio a fin una funcionalidad de formación en RV basada en eventos: programación de sesiones, listas de formadores y alumnos, un subsistema propio de códigos de acceso por SMS con caducidad acotada, tiempo de espera para reenvíos y bloqueo por intentos, y una API externa restringida por clave para que la consuma la plataforma de RV.',
          'Impulsé una migración del modelo de datos a la v2, abandonando tablas obsoletas en favor de un modelo de identidad centrado en el usuario, trasladando todas las lecturas a la nueva estructura y manteniendo las escrituras heredadas por seguridad ante una posible reversión.',
          'Entregué PRGRSS.ai, una plataforma de mentoría web y móvil multiplataforma para la comunidad negra y racializada del Reino Unido, con emparejamiento de mentores y mentorizados mediante IA, vídeo en tiempo real, chat integrado y seguimiento del progreso sobre React Native, Firebase y GCP.',
        ],
      },
      brilio: {
        role: 'Ingeniero de Producto Fundador',
        tenure: 'Enero de 2025 - Octubre de 2025',
        location: 'Abu Dabi, Emiratos Árabes Unidos · En remoto',
        description: [
          'Brilio es una plataforma no-code de IA con agentes que permite a las empresas poner en marcha agentes autoformados en cuestión de minutos, entrenados con documentos, sitios web, transcripciones de YouTube, pares de preguntas y respuestas y bases de datos SQL, ejecutándose sobre GPT, Claude y DeepSeek, con umbrales de confianza configurables para que el agente ceda el paso a una persona en lugar de improvisar, y aprenda de cada respuesta que esa persona da.',
          'Lideré un equipo de 4 ingenieros de frontend y definí la dirección técnica y los estándares.',
          'Entregué 4 productos de IA generativa, incluido Brilio, de principio a fin en un plazo de 9 meses.',
          'Asumí el ciclo de vida del producto, desde la validación del concepto hasta el lanzamiento.',
          'Renové el frontend de Brilio y lo transformé en una experiencia de producto centrada en la usabilidad.',
          'Escalé Brilio al mercado europeo implementando soporte para 6 idiomas.',
          'Dirigí el lanzamiento del chatbot de IA integrable de Brilio mediante script y plugins de WordPress y Shopify, permitiendo su integración inmediata en las aplicaciones de los clientes.',
        ],
      },
      cowlar: {
        role: 'Ingeniero de Software Full Stack',
        tenure: 'Febrero de 2024 - Agosto de 2024',
        location: 'Islamabad, Pakistán',
        description: [
          'Cowlar Design Studio es una consultora de desarrollo de producto y tecnología de más de 175 personas —el brazo de estudio de Cowlar Inc. (Y Combinator W17), la startup de collares inteligentes apodada «el Fitbit para vacas»— con experiencia en IoT, robótica, visión por computador, machine learning y software empresarial.',
          'Colaboré con el equipo de machine learning en un producto de retail basado en IA, incorporando la retroalimentación continua de los usuarios para mejorar su funcionalidad y satisfacción.',
          'Desarrollé componentes de frontend modulares y reutilizables con Vue.js, React.js y TypeScript para ganar eficiencia en la interfaz y garantizar un producto sólido.',
          'Implementé APIs REST con Node.js y Express.js, usando Sequelize para MySQL y Mongoose para MongoDB con el fin de asegurar interacciones eficientes con la base de datos.',
          'Trabajé en Thanos, la plataforma integral de machine learning del estudio, que cubre desde la recogida y anotación de datos hasta el despliegue de modelos asistido por IA, aumentando el rendimiento de anotación un 60 % en grandes conjuntos de imágenes y acelerando los ciclos de desarrollo de modelos.',
          'Escribí consultas complejas para las estadísticas del panel, acelerando la recuperación de datos un 40 % y mejorando la analítica en tiempo real.',
          'Optimicé APIs y consultas existentes, reduciendo el tiempo de ejecución un 75 % y mejorando el rendimiento del sistema un 55 %, con la consiguiente mejora en la respuesta de la aplicación.',
        ],
      },
      'devsinc-intern': {
        role: 'Becario de Ingeniería DevOps',
        tenure: 'Julio de 2023 - Septiembre de 2023',
        location: 'Islamabad, Pakistán',
        description: [
          'Devsinc es una de las empresas de software más grandes y de mayor crecimiento de Pakistán, con más de 2.000 empleados en Pakistán, Estados Unidos e India, que ofrece transformación digital e ingeniería de producto a startups, grandes empresas y organismos públicos.',
          'Fui seleccionado, con distinción, entre los pocos candidatos elegidos de un grupo de 25.000 aspirantes.',
          'Completé un programa de formación exigente centrado en las herramientas y prácticas más actuales de DevOps.',
          'Dominé tecnologías fundamentales como Linux y Git, además de herramientas clave de DevOps como Docker y Kubernetes (K8s).',
          'Adquirí soltura en la escritura de pipelines de CI/CD con GitHub Actions y Jenkins.',
          'Gané competencia en infraestructura como código con Terraform y demostré dominio de servicios de AWS como EC2 y S3, siguiendo las buenas prácticas de CI/CD.',
          'Asumí en solitario la responsabilidad de dos proyectos, uno en Node.js y otro en Ruby on Rails (ROR), supervisando todo el ciclo de CI/CD.',
          'Utilicé el conjunto de herramientas aprendidas para contenerizar y desplegar ambas aplicaciones dentro del ecosistema de AWS, apoyándome en EC2 para garantizar escalabilidad y fiabilidad.',
          'Implementé Nginx como proxy inverso para optimizar el rendimiento de la aplicación y gestionar eficientemente el tráfico entrante.',
        ],
      },
      runthesims: {
        role: 'Ingeniero de Frontend',
        tenure: 'Mayo de 2022 - Agosto de 2022',
        location: 'Área de la Bahía de San Francisco, EE. UU. (En remoto)',
        description: [
          'RunTheSims es una plataforma de analítica por suscripción para deportes de fantasía diarios, creada y gestionada por jugadores profesionales de DFS, que encadena proyecciones, propiedad, optimizadores, simulaciones y optimización de carteras en un único flujo de trabajo, llevando al jugador desde las proyecciones en bruto hasta alineaciones de valor esperado positivo en una cartera diversificada, con cobertura de NFL, MLB, golf PGA, Fórmula 1 y MMA.',
          'Contribuí al desarrollo de la herramienta de simulación y su panel con ReactJS, React Context y Material-UI, creando componentes reutilizables para vistas densas de proyecciones y simulaciones y mejorando la experiencia de usuario en conjunto.',
        ],
      },
      'creative-chaos': {
        role: 'Becario de Ingeniería de Software',
        tenure: 'Junio de 2022 - Agosto de 2022',
        location: 'San Francisco, EE. UU. / Karachi, Pakistán / En remoto',
        description: [
          'Creative Chaos es una firma de innovación tecnológica con sede en San Francisco, fundada en 2000, que construye MVPs para startups y empresas de la lista Fortune 500: más de 300 profesionales y más de 400 proyectos entregados a través de una red global de entrega que abarca Estados Unidos, Europa, Oriente Medio y Asia.',
          'Asumí en solitario el desarrollo del frontend de KATRA, una aplicación multiplataforma que conecta a personas que necesitan sangre con urgencia con donantes dispuestos a ayudar, bajo la tutela de un arquitecto de soluciones y de ingenieros de software sénior. Este reto me permitió demostrar mi capacidad para abordar proyectos complejos de forma autónoma y entregar resultados excelentes, trabajando estrechamente con un equipo multidisciplinar.',
          'Desarrollé y mantuve lógica de aplicación compleja con Redux Sagas, posibilitando una gestión del estado eficiente y un flujo de datos asíncrono.',
          'Optimicé el rendimiento aplicando buenas prácticas de arquitectura como la división de código y la carga diferida para mejorar la velocidad de la aplicación.',
          'Trabajé codo con codo con el equipo de backend para integrar APIs REST y gestioné la obtención y manipulación de datos con Redux Sagas, garantizando un flujo fluido entre frontend y backend.',
          'Colaboré con diseñadores y responsables de producto para traducir wireframes y maquetas en componentes interactivos y funcionales, asegurando un diseño coherente y atractivo en múltiples dispositivos.',
          'Colaboré estrechamente con el ingeniero de DevOps para garantizar procesos de despliegue y publicación sin fricciones.',
        ],
      },
      kpibar: {
        role: 'Ingeniero de Frontend',
        tenure: 'Febrero de 2022 - Marzo de 2022',
        location: 'Madrid, España / En remoto',
        description: [
          'Kpibar es una empresa de software con sede en Madrid, fundada en 2020, que construye un espacio de trabajo único para la gestión de tareas y el seguimiento del rendimiento de los equipos, permitiéndoles controlar las métricas de negocio que importan sin saltar entre herramientas distintas.',
          'Construí componentes de frontend modulares y reutilizables para la plataforma de Kpibar con React, Ant Design y React Context, usando Context para mantener el estado global y compartir datos de forma limpia por todo el árbol de componentes en lugar de encadenar props capa por capa.',
          'Entregué mejoras de interfaz e interacción junto al equipo, afinando la usabilidad de todo el producto.',
          'Refactoricé y optimicé el código existente, mejorando el rendimiento, la escalabilidad y la reutilización de componentes.',
        ],
      },
      codefier: {
        role: 'Desarrollador Web Júnior',
        tenure: 'Enero de 2022 - Marzo de 2022',
        location: 'Rawalpindi, Pakistán / En remoto',
        description: [
          'CodeFier es una agencia pakistaní de diseño y desarrollo que atiende a clientes de Islamabad y Rawalpindi, creando sitios web, aplicaciones móviles y UI/UX junto a servicios de SEO y marketing digital.',
          'Construí desde cero el frontend de una herramienta interna de RR. HH. en JavaScript, HTML y CSS puros, sin framework ni biblioteca de componentes.',
          'Creé interfaces interactivas e intuitivas para generar informes y cartas de empleo, simplificando el trabajo diario del equipo de RR. HH.',
          'Implementé diseños responsive para que la herramienta funcionara bien en escritorio, tableta y móvil.',
          'Trabajé directamente con el equipo de RR. HH. para entender sus necesidades y traducirlas en componentes de interfaz funcionales y visualmente coherentes.',
        ],
      },
      'devsinc-ambassador': {
        role: 'Embajador de Campus',
        tenure: 'Marzo de 2023 - Mayo de 2024',
        location: 'Islamabad, Pakistán / En remoto',
        description: [
          'Contribuyendo activamente a la misión de Devsinc de tender puentes entre la industria y el mundo académico.',
          'Responsable de organizar diversos eventos de Devsinc en el campus.',
          'Aprovechando mis competencias en redes sociales, especialmente en LinkedIn, me encargo de promocionar estos eventos para maximizar su alcance e impacto dentro de la comunidad de la NUST.',
          'Trabajando estrechamente con el equipo de Devsinc para garantizar una planificación y ejecución impecables de los eventos, creando experiencias atractivas y valiosas para los participantes.',
          'Al dar a conocer eficazmente las iniciativas y eventos de Devsinc, contribuyo a la notoriedad y visibilidad de la marca entre el alumnado de la NUST.',
        ],
      },
      'hackclub-joint-secretary': {
        role: 'Secretario Adjunto (Web e IT)',
        tenure: 'Agosto de 2022 - Julio de 2023',
        location: 'NUST, Islamabad',
        description: [
          'Lideré al equipo en el mantenimiento del sitio web del club, velando por su funcionamiento y su cuidado estético.',
          'Ayudé a compañeros y estudiantes de cursos inferiores a mejorar sus competencias técnicas como desarrolladores.',
          'Ejercí de mentor activo del equipo, ofreciendo orientación y apoyo en su recorrido por el desarrollo web.',
        ],
      },
      on22: {
        role: 'Responsable de Patrocinios',
        tenure: 'Agosto de 2022 - Octubre de 2022',
        location: 'NUST, Islamabad',
        description: [
          'Orientation es el evento insignia de la NUST y reúne a más de 1.800 estudiantes y a más de 3.000 participantes entusiastas en una amplia variedad de actividades sociales.',
          'Contacté con numerosas empresas potenciales, mostrándoles el valor y los beneficios de patrocinar el evento.',
          'Cerré con éxito acuerdos con dos empresas, asegurando su apoyo como patrocinadoras del evento Orientation.',
          'Desempeñé un papel decisivo en la obtención de aportaciones económicas y recursos, garantizando la buena ejecución del evento.',
        ],
      },
      gdsc: {
        role: 'Miembro del Equipo (Desarrollo Web)',
        tenure: 'Abril de 2022 - Agosto de 2022',
        location: 'NUST, Islamabad',
        description: [
          'Como miembro del GDSC, participé activamente en la gestión y el funcionamiento del club.',
          'Colaboré con el resto del equipo para gestionar y organizar eficazmente las actividades del club, asegurando una buena coordinación y una ejecución eficiente de eventos y proyectos.',
          'Mejoré continuamente mis competencias como desarrollador mediante la práctica y el contacto con distintas tecnologías y frameworks de desarrollo web.',
        ],
      },
      'hackclub-social-media': {
        role: 'Colíder de Marketing en Redes Sociales',
        tenure: 'Noviembre de 2021 - Agosto de 2022',
        location: 'NUST, Islamabad',
        description: [
          'Dirigí el marketing en redes sociales como responsable de equipo de HackClub, cubriendo los eventos principales y publicando actualizaciones puntuales en Instagram y Facebook.',
          'Aumenté el número de seguidores y el alcance de las páginas de HackClub en redes sociales.',
          'Coordiné a los voluntarios de HackClub y GDSC NUST durante Devfest Islamabad 2021 y Codefest 2021, fomentando la colaboración y las sinergias.',
          'Colaboré con 10Pearls Islamabad en Game Of Code, una competición de programación por velocidad.',
        ],
      },
      'hackclub-web': {
        role: 'Miembro del Equipo de Web e IT',
        tenure: 'Junio de 2021 - Noviembre de 2021',
        location: 'NUST, Islamabad',
        description: [
          'Contribuí como miembro del equipo de Web e IT, participando activamente en el desarrollo del sitio web oficial de Hack Club, NUST.',
          'Con React.js, React Bootstrap (Reactstrap) y Material UI creamos un sitio web moderno y visualmente atractivo.',
          'Además, colaboré estrechamente con el equipo en diversas tareas de web e IT, asegurando una buena coordinación y una ejecución eficiente de los proyectos.',
        ],
      },
      insaniyat: {
        role: 'Captador de Fondos',
        tenure: 'Abril de 2021 - Mayo de 2021',
        location: 'NUST, Islamabad',
        description: [
          'Participé en Project Insaniyat, una iniciativa de recaudación de fondos con fines sociales, durante mi segundo semestre en la NUST.',
          'Lideré el esfuerzo de un equipo para recoger donaciones y recaudar fondos para causas nobles.',
          'Recaudamos con éxito unas 127.000 rupias en donaciones.',
          'Donamos los fondos al sistema escolar Sunbeams para apoyar su campaña de creación de escuelas en zonas rurales del país.',
        ],
      },
      'nust-media': {
        role: 'Responsable de Equipo (Web e IT)',
        tenure: 'Septiembre de 2021 - Diciembre de 2021',
        location: 'NUST, Islamabad',
        description: [
          'Lideré un equipo de 5 personas como responsable de Web e IT en el NUST Media Club.',
          'Gestioné y mantuve el sitio web en WordPress del club, velando por su funcionamiento y rendimiento.',
          'Colaboré estrechamente con el equipo de Publicaciones para actualizar y publicar entradas de blog atractivas en el sitio.',
          'Me encargué de mantener el sitio al día con los blogs del NUST Media Club y contenidos relevantes e informativos, reforzando la presencia en línea del club.',
        ],
      },
      'ieee-nust': {
        role: 'Miembro del Equipo (Web e IT)',
        tenure: 'Octubre de 2021 - Diciembre de 2021',
        location: 'NUST, Islamabad',
        description: [
          'Contribuí como miembro del equipo de Web e IT de IEEE NUST.',
          'Diseñé y desarrollé plantillas de correo profesionales, garantizando una identidad de marca coherente y una comunicación eficaz con el público.',
          'Me coordiné con otros equipos, como Marketing y Diseño Gráfico, para alinear los esfuerzos de web e IT y mejorar el éxito global de los proyectos.',
          'Participé activamente en iniciativas de creación de comunidad, organizando eventos y actividades para fomentar la participación y la colaboración dentro de la comunidad de IEEE NUST.',
        ],
      },
    },
  },
  projects: {
    title: 'Proyectos',
    intro:
      'Con un profundo conocimiento de React, Next.js, Redux, Node.js, Express, GraphQL y MongoDB, mi especialidad es desarrollar aplicaciones web sólidas y escalables. Aprovechando estas tecnologías creo interfaces atractivas que ofrecen experiencias excepcionales, gestiono estados complejos para garantizar un flujo de datos fluido, desarrollo APIs eficientes en servidor, diseño modelos de datos eficaces y aseguro un almacenamiento seguro. Este dominio me permite entregar aplicaciones de alta calidad a la altura de las exigencias del desarrollo web moderno. 🫡',
    sectionTitle: '{ Trabajos seleccionados }',
    createdIn: 'Creado en',
    moreOnGithub: 'Más proyectos en GitHub',
    entries: {
      'pockla-ai':
        'Gracias a la IA, cada uno de tus clientes recibe su propia landing page personalizada. Conecta tu CRM y cada contacto tendrá automáticamente una página hecha a su medida.',
      'brilio-ai':
        'SaaS de IA para que empresas y particulares creen agentes de IA a medida, entrenen LLMs con su lógica de negocio e integren datos procedentes de documentos, enlaces web, bases de datos y conversaciones de preguntas y respuestas.',
      'brava-crewconnect':
        'Plataforma de gestión de personal para contratistas de tejados que automatiza la certificación formativa de los equipos, la asignación de trabajos y el seguimiento del cumplimiento entre subcontratistas. Incluye integraciones en tiempo real con Monday.com, FlexiQuiz y CompanyCam, además de notificaciones multicanal (correo y SMS).',
      'prgrss-ai':
        'Plataforma web y móvil multiplataforma para la mentoría asistida por IA de la comunidad negra y racializada del Reino Unido, con emparejamiento de mentores y mentorizados mediante IA, videollamadas en tiempo real, seguimiento del progreso y chat integrado para ofrecer una mentoría de principio a fin.',
      thanos:
        'Thanos AI es la culminación de nuestras herramientas de digitalización: una solución integral para proyectos de machine learning que abarca desde la recogida y anotación de datos hasta el despliegue de modelos asistido por IA.',
      'dev-portfolio':
        'El sitio web por el que estás navegando ahora mismo 😉 Dev-Portfolio es un portafolio de código abierto y personalizable para que las personas desarrolladoras muestren sus competencias técnicas y destaquen sus logros.',
      katra:
        'Aplicación full-stack multiplataforma para Creative Chaos, diseñada para conectar sin fricciones a quienes necesitan sangre con donantes generosos. Esta solución simplifica y mejora la comunicación entre ambas partes, garantizando un proceso ágil y eficiente.',
    },
  },
  contact: {
    title: 'Contacto',
    intro:
      'Soy prácticamente la versión en redes sociales de Batman: siempre al acecho en las sombras de todas las plataformas, listo para aparecer y salvar el día. Así que, tanto si necesitas magia del sector como a alguien que sepa hablar de tecnología, escríbeme. ¡Conectemos y pongámosle un poco de humor al mundo tech! 🤝',
    facts: {
      email: 'Correo',
      basedIn: 'Ubicación',
      basedInValue: 'Islamabad, Pakistán — trabajo con equipos en distintos husos horarios',
      role: 'Puesto',
      roleValue: 'Ingeniero de Software Full-Stack',
      openTo: 'Disponible para',
      openToValue: 'Puestos a tiempo completo, trabajo por contrato y proyectos freelance',
    },
    reachOutTitle: 'Sobre qué escribirme',
    reachOut: [
      'Desarrollar aplicaciones web de principio a fin: React, Next.js, Vue, Node.js, NestJS y Express, con PostgreSQL, MongoDB o Redis por detrás.',
      'Llevar más lejos un producto existente: nuevas funcionalidades, trabajo de rendimiento o desenredar una base de código que ha crecido más rápido que su estructura.',
      'Despliegue e infraestructura: AWS, Docker, pipelines de CI/CD y un proceso de publicación en el que la gente confíe.',
      'Trabajo de producto asistido por IA, desde integraciones con LLMs hasta herramientas internas.',
      'Participar como ponente o ayudar a organizar un evento de la comunidad tecnológica: he organizado unos cuantos.',
    ],
    emailNote:
      'El correo electrónico es la vía más segura para localizarme; suelo responder en un par de días.',
    cta: 'Escríbeme por correo 📧',
    bookCall: 'Reserva una llamada de 30 min 📅',
  },
  notFound: {
    eyebrow: '404',
    title: 'Esta página anda por ahí, colgada',
    body: 'Que es una forma divertida de decir que no existe. O el enlace está roto, o moví algo y olvidé dejar una dirección de reenvío. En cualquier caso, aquí no hay nada que ver. 🙃',
    cta: 'Llévame al inicio 🏠',
    suggestionsLabel: 'O retoma por donde querías ir:',
    suggestedPages: 'Páginas sugeridas',
  },
};

export default es;
