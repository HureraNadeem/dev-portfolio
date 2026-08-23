import type { Dictionary } from './types';

/**
 * French. Product names, company names, technologies and course titles stay as
 * written — they are proper nouns, not vocabulary.
 */
const fr: Dictionary = {
  nav: {
    home: 'Accueil',
    education: 'Formation',
    experience: 'Expérience',
    projects: 'Projets',
    contact: 'Contact',
  },
  common: {
    resume: 'CV 📄',
    bookCall: 'Réserver un appel de 30 min 📅',
    languageLabel: 'Langue',
    skipToContent: 'Aller au contenu',
    madeWith: 'Réalisé avec {heart} par',
    scrollToTop: 'Revenir en haut',
    toggleMenu: 'Ouvrir ou fermer le menu de navigation',
    theme: 'Thème',
    switchToLight: 'Passer au mode clair',
    switchToDark: 'Passer au mode sombre',
  },
  meta: {
    siteTitle: 'Hurera Nadeem — Développeur Full-Stack',
    siteDescription:
      'Portfolio de Hurera Nadeem, ingénieur logiciel full-stack spécialisé en React, Next.js, Node.js et applications cloud-native. Découvrez mon expérience, ma formation et mes projets.',
    education: {
      title: 'Formation',
      description:
        'La formation de Hurera Nadeem : licence en génie logiciel à la NUST d’Islamabad, complétée par des cours en ligne sur React, Next.js, Node.js, TypeScript et le machine learning.',
    },
    experience: {
      title: 'Expérience',
      description:
        'L’expérience professionnelle de Hurera Nadeem en ingénierie full-stack, ingénierie produit et DevOps, ainsi que son engagement bénévole dans les communautés tech.',
    },
    projects: {
      title: 'Projets',
      description:
        'Une sélection de projets de Hurera Nadeem : plateformes SaaS dopées à l’IA, outils de gestion des équipes et applications web et mobiles full-stack conçues avec Next.js, React et Node.js.',
    },
    contact: {
      title: 'Contact',
      description:
        'Contactez Hurera Nadeem : retrouvez-moi sur GitHub, LinkedIn, Instagram et Facebook, ou écrivez-moi par e-mail.',
    },
  },
  home: {
    greetingTitle: 'Salut ! Moi, c’est Hurera',
    greetingSubtitle:
      'Développeur full-stack (MERN/MEVN) 💻 · Passionné de DevOps et de cloud ☁️ · Résolveur de problèmes 🤔',
    whatIDoTitle: '{ Ce que je fais ? }',
    whatIDoLead:
      'J’adore coder sur des projets en freelance et aider les entreprises à développer leur activité. 🤜🤛',
    whatIDoLead2: 'Voici mes domaines d’expertise technique :',
    cards: {
      frontend: {
        name: 'Ingénierie frontend',
        descriptions: [
          'Développement d’applications web responsives, en page unique ou rendues côté serveur, avec React.js, Next.js, Vue 3 et Astro.',
          'Gestion de l’état applicatif avec Redux, Redux Saga, Pinia et React Context.',
          'Création de bibliothèques de composants modulaires et réutilisables avec Tailwind CSS, ShadCN, Material-UI et Bootstrap, à partir de maquettes Figma.',
          'Écriture de frontends typés en TypeScript, avec une attention portée à l’accessibilité, à l’adaptabilité et aux performances sur tous les appareils.',
          'Travail sur l’internationalisation (i18n), les widgets intégrables et les intégrations frontend tierces.',
        ],
      },
      backend: {
        name: 'Ingénierie backend et APIs',
        descriptions: [
          'Conception et développement d’APIs REST, de services et de microservices avec Node.js, Express.js, NestJS et Fastify.',
          'Travail avec des bases de données relationnelles et documentaires — PostgreSQL, MySQL, MongoDB et DynamoDB — via des ORM et ODM comme Prisma, Sequelize et Mongoose.',
          'Mise en place de l’authentification et de l’autorisation avec JWT, OAuth, vérification par OTP et contrôle d’accès basé sur les rôles.',
          'Utilisation de Redis pour la mise en cache et la gestion des sessions, et conception de schémas et de migrations pour des modèles de données évolutifs.',
          'Intégration d’APIs et de webhooks tiers, et construction de chaînes de notification par e-mail et SMS.',
        ],
      },
      cloud: {
        name: 'Cloud, DevOps et infrastructure',
        descriptions: [
          'Développement et déploiement sur AWS — Lambda, DynamoDB, S3, CloudFront, ECS Fargate et EC2 — avec une infrastructure décrite sous forme de code via AWS CDK.',
          'Conteneurisation d’applications avec Docker, et configuration de Nginx et Caddy comme proxys inverses.',
          'Automatisation des tests, des builds et des déploiements via des pipelines CI/CD sur GitHub Actions, GitLab CI/CD et Jenkins.',
          'Écriture de tests unitaires et de bout en bout avec Jest et Playwright pour garder un code fiable à mesure qu’il grandit.',
          'Travail avec GCP, Azure et Firebase en complément d’AWS, et collaboration via Git et Jira.',
        ],
      },
      ai: {
        name: 'IA et ingénierie agentique',
        descriptions: [
          'Création de produits dopés à l’IA et de workflows agentiques avec des LLM d’Anthropic (Claude), d’OpenAI et d’autres.',
          'Travail avec le Model Context Protocol (MCP) pour exposer outils et données aux agents de code et aux clients IA.',
          'Intégration de la recherche documentaire sur des documents, des sites web et des bases de données, avec relecture humaine et garde-fous autour des sorties du modèle.',
          'Automatisation des chaînes de génération de contenu et de pages, de la sortie du modèle jusqu’au build et au déploiement.',
          'Écriture d’outils, de skills et de prompts pour agents, versionnés et reproductibles.',
        ],
      },
    },
  },
  education: {
    title: 'Formation',
    subtitle: 'Mes diplômes et certifications',
    intro: 'Voici l’essentiel de mon parcours universitaire 🙃',
    degreeSection: '{ Diplôme obtenu }',
    coursesSection: '{ Cours en ligne }',
    university: 'National University of Sciences and Technology, Islamabad',
    degree: 'Licence en génie logiciel',
    location: 'Islamabad, Pakistan',
    bullets: [
      '⚡ J’ai acquis de solides connaissances grâce à des cours exigeants d’informatique couvrant les structures de données, les algorithmes, les systèmes de gestion de bases de données, les systèmes d’exploitation et le machine learning.',
      '⚡ J’ai découvert de l’intérieur tout le cycle de développement logiciel et les pratiques du secteur grâce à des cours spécialisés en génie logiciel : ingénierie des exigences, conception et architecture logicielles, construction logicielle, entre autres.',
      '⚡ En parallèle de mon cursus, j’ai suivi des formations sur la stack MERN et exploré l’univers du web :)',
      '⚡ L’environnement bienveillant de la NUST a joué un rôle déterminant dans mon développement personnel, en encourageant la diversité et en renforçant ma confiance. L’accent mis sur la vie collective a lui aussi beaucoup contribué à ma progression.',
      '⚡ L’une de mes activités extrascolaires les plus enrichissantes a été d’animer et de gérer des communautés tech : HackClub NUST, Google Developers Student Club (GDSC) NUST, IEEE-NUST, NUST Media Club et Orientation of NUST. Ces expériences m’ont permis de rencontrer des personnes qui partagent mes centres d’intérêt et de contribuer à l’écosystème, technique et non technique, très vivant de la NUST.',
    ],
  },
  experience: {
    title: 'Expérience',
    subtitle: 'Emploi, stages et bénévolat',
    intro:
      'Je suis un ingénieur logiciel passionné qui aime imaginer des solutions créatives avec du code. Mon domaine de prédilection est la construction d’applications évolutives avec la stack MERN. J’ai également à cœur de faire vivre les communautés tech et je participe activement à de nombreux événements du secteur. Accompagner et soutenir les développeurs qui démarrent leur carrière me procure une immense satisfaction, parce que nous connaissons tous la galère du point-virgule manquant. 😉',
    work: 'Emploi',
    volunteerships: 'Bénévolat',
    entries: {
      pockla: {
        role: 'Ingénieur logiciel senior',
        tenure: 'Novembre 2025 - Aujourd’hui',
        location: 'Londres, Royaume-Uni · À distance',
        description: [
          'Pockla est une startup AdTech basée à Londres qui construit une infrastructure « agent-first » pour des sites web auto-adaptatifs : au lieu d’une landing page statique unique pour tout le monde, des agents IA génèrent une page adaptée à chaque prospect, sans reconstruire le site.',
          'La plateforme pilote toute la boucle de génération de leads pour des entreprises britanniques de l’assurance, de la finance, de l’indemnisation et du droit : acquisition de trafic via la publicité payante, les appels sortants pilotés par IA et l’e-mailing à froid, arrivée de chaque prospect sur une page générée rien que pour lui, puis qualification et maturation par des agents SMS et vocaux. Des marques comme Lottie, Kene, Omnos et NWEH lui font déjà confiance.',
          'Soutenue par environ 2 M£ de financement, dont une levée d’amorçage de 1,6 M£ menée par Venrex, avec la participation d’Upside Ventures (le fonds des Sidemen), Love Ventures, Shuttle et SyndicateRoom.',
          'Développement du cœur de la plateforme CLI en Node.js et d’un serveur MCP exposant plus de 30 outils, qui pilote 20 skills autonomes de Claude Code via une machine à états afin de générer, contrôler, tester et déployer des landing pages Astro de bout en bout.',
          'Conception du backend serverless sur AWS avec une API Fastify sur Lambda, DynamoDB, S3 et CloudFront provisionnés par CDK, ainsi qu’une couche edge ECS Fargate faisant tourner Caddy avec TLS à la demande pour le routage multi-tenant de domaines personnalisés.',
          'J’ai diagnostiqué et éliminé une panne mémoire bloquante en production lors des builds massifs de pages : je l’ai remontée jusqu’à un plafond mémoire fixe du compilateur WASM et j’ai migré vers le compilateur natif Rust d’Astro, ce qui a permis de compiler plus de 2 000 pages en une quarantaine de secondes et de supprimer complètement le contournement par lots.',
          'Refonte du pipeline de déploiement pour répliquer l’intégralité du build vers S3 avec comparaison par somme de contrôle : seuls les fichiers modifiés sont envoyés, tandis que chaque page, ressource et artefact SEO est servi depuis la même origine.',
          'Mise en place d’espaces de travail multi-tenants avec authentification JWT (jetons d’accès et de rafraîchissement) et contrôle d’accès basé sur les rôles, ainsi qu’une chaîne d’ingestion de leads et de transmission aux acheteurs avec suivi de livraison pour chaque soumission.',
        ],
      },
      ripeseed: {
        role: 'Ingénieur logiciel',
        tenure: 'Août 2024 - Aujourd’hui',
        location: 'Lahore, Pakistan',
        description: [
          'RipeSeed est un studio d’ingénierie produit basé à Lahore, fondé en 2021, qui livre des produits web, mobiles et IA pour des clients SaaS, e-commerce et startups : plus de 150 projets livrés, une note de 5,0 sur Clutch et plus d’un million de dollars générés sur Upwork, entièrement depuis le Pakistan.',
          'Développement d’applications web performantes et évolutives avec React.js, Next.js, Node.js et NestJS, en TypeScript pour garantir un code typé et maintenable, sur une infrastructure cloud-native AWS et des APIs REST pensées pour la montée en charge et la haute disponibilité.',
          'Construction de Brava CrewConnect, une plateforme de gestion des équipes pour un fabricant américain de tuiles, qui automatise la certification des formations, l’affectation des chantiers et le suivi de conformité entre sous-traitants, avec des intégrations Monday.com, FlexiQuiz et CompanyCam et des notifications multicanales par e-mail et SMS.',
          'J’ai conçu et livré un système de contrôle d’accès basé sur les rôles piloté par la base de données, avec une matrice de permissions modifiable à l’exécution et un sélecteur « voir en tant que » qui résout les droits d’un seul rôle et ne peut que restreindre les privilèges, jamais les élargir — appliqué à la fois côté API et côté back-office.',
          'J’ai conçu un moteur de territoires géographiques qui rattache chaque chantier à un seul territoire et à un seul technicien référent, avec une couverture à plusieurs niveaux (pays, région, code postal), une résolution au plus précis et une carte choroplèthe interactive pour dessiner les zones de couverture.',
          'J’ai livré de bout en bout une fonctionnalité de formation en réalité virtuelle événementielle : planification des sessions, listes de formateurs et d’apprenants, un sous-système dédié de codes d’accès par SMS avec expiration limitée, délai avant renvoi et blocage après plusieurs tentatives, ainsi qu’une API externe restreinte par clé pour la plateforme VR.',
          'J’ai mené une migration du modèle de données vers la v2, en abandonnant des tables obsolètes au profit d’un modèle d’identité centré sur l’utilisateur, en basculant toutes les lectures vers la nouvelle structure tout en conservant les écritures héritées par sécurité en cas de retour arrière.',
          'J’ai livré PRGRSS.ai, une plateforme de mentorat web et mobile multiplateforme destinée aux communautés noires et racisées du Royaume-Uni, avec mise en relation mentors-mentorés par IA, visioconférence en temps réel, messagerie intégrée et suivi de progression, sur React Native, Firebase et GCP.',
        ],
      },
      brilio: {
        role: 'Ingénieur produit fondateur',
        tenure: 'Janvier 2025 - Octobre 2025',
        location: 'Abou Dhabi, Émirats arabes unis · À distance',
        description: [
          'Brilio est une plateforme d’IA agentique sans code qui permet aux entreprises de déployer en quelques minutes des agents IA capables d’apprendre seuls — entraînés sur des documents, des sites web, des transcriptions YouTube, des paires questions-réponses et des bases SQL, tournant sur GPT, Claude et DeepSeek, avec des seuils de confiance paramétrables pour qu’un agent passe la main à un humain au lieu de deviner, et apprenne de chaque réponse donnée par cet humain.',
          'J’ai encadré une équipe de 4 ingénieurs frontend et défini la direction technique et les standards.',
          'J’ai livré 4 produits d’IA générative, dont Brilio, de bout en bout en 9 mois.',
          'J’ai porté le cycle de vie produit, de la validation du concept au lancement.',
          'J’ai refondu le frontend de Brilio pour en faire une expérience produit centrée sur l’usage.',
          'J’ai préparé Brilio pour le marché européen en implémentant la prise en charge de 6 langues.',
          'J’ai piloté le lancement du chatbot IA intégrable de Brilio, via script et plugins WordPress et Shopify, permettant une intégration immédiate dans les applications des clients.',
        ],
      },
      cowlar: {
        role: 'Ingénieur logiciel full stack',
        tenure: 'Février 2024 - Août 2024',
        location: 'Islamabad, Pakistan',
        description: [
          'Cowlar Design Studio est un cabinet de développement produit et de conseil technologique de plus de 175 personnes — la branche studio de Cowlar Inc. (Y Combinator W17), la startup de colliers connectés surnommée « le Fitbit pour vaches » — avec une expertise en IoT, robotique, vision par ordinateur, machine learning et logiciels d’entreprise.',
          'J’ai collaboré avec l’équipe ML sur un produit retail piloté par l’IA, en intégrant les retours continus des utilisateurs pour en améliorer les fonctionnalités et la satisfaction.',
          'J’ai développé des composants frontend modulaires et réutilisables avec Vue.js, React.js et TypeScript pour gagner en efficacité côté interface et garantir la robustesse du produit.',
          'J’ai implémenté des APIs REST avec Node.js et Express.js, en utilisant Sequelize pour MySQL et Mongoose pour MongoDB afin d’assurer des échanges efficaces avec la base de données.',
          'J’ai travaillé sur Thanos, la plateforme de machine learning de bout en bout du studio, qui couvre tout, de la collecte et l’annotation des données au déploiement de modèles assisté par IA, augmentant le débit d’annotation de 60 % sur de grands jeux d’images et accélérant les cycles de développement des modèles.',
          'J’ai écrit des requêtes complexes pour les statistiques du tableau de bord, accélérant la récupération des données de 40 % et améliorant l’analytique en temps réel.',
          'J’ai optimisé des APIs et des requêtes existantes, réduisant le temps d’exécution de 75 % et améliorant le débit du système de 55 %, avec à la clé une application nettement plus réactive.',
        ],
      },
      'devsinc-intern': {
        role: 'Stagiaire ingénieur DevOps',
        tenure: 'Juillet 2023 - Septembre 2023',
        location: 'Islamabad, Pakistan',
        description: [
          'Devsinc est l’une des plus grandes entreprises logicielles du Pakistan et l’une des plus dynamiques, avec plus de 2 000 collaborateurs au Pakistan, aux États-Unis et en Inde, qui accompagne startups, grands comptes et organismes publics en transformation numérique et en ingénierie produit.',
          'J’ai été retenu, avec les félicitations du jury, parmi les rares candidats sélectionnés sur un vivier de 25 000 postulants.',
          'J’ai suivi un programme de formation exigeant, consacré aux outils et pratiques DevOps les plus récents.',
          'J’ai acquis une maîtrise des technologies fondamentales comme Linux et Git, ainsi que des outils DevOps essentiels comme Docker et Kubernetes (K8s).',
          'J’ai appris à écrire des pipelines CI/CD avec GitHub Actions et Jenkins.',
          'J’ai gagné en aisance sur l’infrastructure as code avec Terraform et démontré ma maîtrise de services AWS comme EC2 et S3, dans le respect des bonnes pratiques CI/CD.',
          'J’ai pris seul la responsabilité de deux projets, l’un en Node.js et l’autre en Ruby on Rails (ROR), en supervisant tout le cycle CI/CD.',
          'J’ai mobilisé l’ensemble des outils appris pour conteneuriser et déployer les deux applications dans l’écosystème AWS, en m’appuyant sur EC2 pour garantir évolutivité et fiabilité.',
          'J’ai mis en place Nginx comme proxy inverse afin d’optimiser les performances applicatives et de gérer efficacement le trafic entrant.',
        ],
      },
      runthesims: {
        role: 'Ingénieur frontend',
        tenure: 'Mai 2022 - Août 2022',
        location: 'Baie de San Francisco, États-Unis (à distance)',
        description: [
          'RunTheSims est une plateforme d’analyse par abonnement dédiée au sport-fantasy quotidien, conçue et exploitée par des joueurs professionnels de DFS, qui enchaîne projections, taux de possession, optimiseurs, simulations et optimisation de portefeuille dans un seul flux de travail — du chiffre brut aux compositions à espérance de gain positive sur un portefeuille diversifié, avec une couverture NFL, MLB, golf PGA, Formule 1 et MMA.',
          'J’ai contribué au développement de l’outil de simulation et de son tableau de bord avec ReactJS, React Context et Material-UI, en construisant des composants réutilisables pour des vues de projections et de simulations très denses en données, et en améliorant l’expérience utilisateur d’ensemble.',
        ],
      },
      'creative-chaos': {
        role: 'Stagiaire ingénieur logiciel',
        tenure: 'Juin 2022 - Août 2022',
        location: 'San Francisco, États-Unis / Karachi, Pakistan / À distance',
        description: [
          'Creative Chaos est une société d’innovation technologique dont le siège est à San Francisco, fondée en 2000, qui construit des MVP pour des startups et des entreprises du Fortune 500 : plus de 300 collaborateurs et plus de 400 projets livrés via un réseau mondial couvrant les États-Unis, l’Europe, le Moyen-Orient et l’Asie.',
          'J’ai pris seul en charge le développement du frontend de KATRA, une application multiplateforme qui met en relation les personnes ayant un besoin urgent de sang avec des donneurs volontaires, sous le tutorat d’un architecte solutions et d’ingénieurs logiciels seniors. Ce défi m’a permis de démontrer ma capacité à mener des projets complexes en autonomie et à livrer d’excellents résultats, en travaillant étroitement avec une équipe pluridisciplinaire.',
          'J’ai développé et maintenu une logique applicative complexe avec Redux Sagas, permettant une gestion d’état efficace et des flux de données asynchrones.',
          'J’ai optimisé les performances en appliquant de bonnes pratiques d’architecture comme le découpage du code et le chargement différé afin d’accélérer l’application.',
          'J’ai travaillé main dans la main avec les développeurs backend pour intégrer les APIs REST et j’ai géré la récupération et la manipulation des données avec Redux Sagas, assurant une circulation fluide entre frontend et backend.',
          'J’ai collaboré avec les designers et les chefs de produit pour traduire wireframes et maquettes en composants interactifs et fonctionnels, en garantissant un rendu cohérent et soigné sur tous les appareils.',
          'J’ai travaillé étroitement avec l’ingénieur DevOps pour garantir des déploiements et des mises en production sans accroc.',
        ],
      },
      kpibar: {
        role: 'Ingénieur frontend',
        tenure: 'Février 2022 - Mars 2022',
        location: 'Madrid, Espagne / À distance',
        description: [
          'Kpibar est une société de logiciels basée à Madrid, fondée en 2020, qui construit un espace de travail unique pour la gestion des tâches et le suivi de la performance des équipes, afin de garder un œil sur les indicateurs qui comptent sans jongler entre plusieurs outils.',
          'J’ai construit des composants frontend modulaires et réutilisables pour la plateforme Kpibar avec React, Ant Design et React Context, en utilisant Context pour porter l’état global et partager proprement les données dans l’arbre de composants plutôt que de faire descendre les props couche par couche.',
          'J’ai livré des améliorations d’interface et d’interaction avec l’équipe, en affinant l’ergonomie sur l’ensemble du produit.',
          'J’ai refactorisé et optimisé le code existant, améliorant les performances, l’évolutivité et la réutilisation des composants.',
        ],
      },
      codefier: {
        role: 'Développeur web junior',
        tenure: 'Janvier 2022 - Mars 2022',
        location: 'Rawalpindi, Pakistan / À distance',
        description: [
          'CodeFier est une agence pakistanaise de design et de développement qui accompagne des clients d’Islamabad et de Rawalpindi, en créant des sites web, des applications mobiles et de l’UI/UX, aux côtés de prestations de SEO et de marketing digital.',
          'J’ai construit de zéro le frontend d’un outil RH interne en JavaScript, HTML et CSS natifs — sans framework ni bibliothèque de composants.',
          'J’ai créé des interfaces interactives et intuitives pour générer des rapports et des attestations d’emploi, simplifiant le quotidien de l’équipe RH.',
          'J’ai mis en place des mises en page responsives pour que l’outil tienne la route sur ordinateur, tablette et mobile.',
          'J’ai travaillé directement avec l’équipe RH pour comprendre ses besoins et les traduire en composants d’interface fonctionnels et visuellement cohérents.',
        ],
      },
      'devsinc-ambassador': {
        role: 'Ambassadeur campus',
        tenure: 'Mars 2023 - Mai 2024',
        location: 'Islamabad, Pakistan / À distance',
        description: [
          'Je contribue activement à la mission de Devsinc : rapprocher le monde de l’entreprise et le monde universitaire.',
          'Je suis chargé d’organiser différents événements Devsinc sur le campus.',
          'En m’appuyant sur mes compétences en réseaux sociaux, notamment sur LinkedIn, je promeus ces événements pour maximiser leur portée et leur impact au sein de la communauté de la NUST.',
          'Je travaille étroitement avec l’équipe Devsinc pour assurer une organisation et un déroulement sans accroc, en créant des expériences engageantes et utiles pour les participants.',
          'En valorisant efficacement les initiatives et les événements de Devsinc, je contribue à la notoriété et à la visibilité de la marque auprès des étudiants de la NUST.',
        ],
      },
      'hackclub-joint-secretary': {
        role: 'Secrétaire adjoint (Web et IT)',
        tenure: 'Août 2022 - Juillet 2023',
        location: 'NUST, Islamabad',
        description: [
          'J’ai piloté l’équipe chargée de maintenir le site du club, en veillant à son bon fonctionnement et à son esthétique.',
          'J’ai aidé les membres de l’équipe et les étudiants des promotions inférieures à progresser techniquement en tant que développeurs.',
          'J’ai accompagné activement les membres de l’équipe, en leur offrant conseils et soutien dans leur parcours en développement web.',
        ],
      },
      on22: {
        role: 'Responsable des partenariats',
        tenure: 'Août 2022 - Octobre 2022',
        location: 'NUST, Islamabad',
        description: [
          'Orientation est l’événement phare de la NUST : il réunit plus de 1 800 étudiants et plus de 3 000 participants enthousiastes autour d’un large éventail d’activités.',
          'J’ai démarché de nombreuses entreprises en leur présentant l’intérêt et les retombées d’un partenariat avec l’événement.',
          'J’ai conclu des accords avec deux entreprises, obtenant leur soutien en tant que partenaires de l’événement Orientation.',
          'J’ai joué un rôle déterminant dans l’obtention de contributions financières et de ressources, garantissant la bonne tenue de l’événement.',
        ],
      },
      gdsc: {
        role: 'Membre de l’équipe (développement web)',
        tenure: 'Avril 2022 - Août 2022',
        location: 'NUST, Islamabad',
        description: [
          'En tant que membre du GDSC, j’ai participé activement à la gestion et au fonctionnement du club.',
          'J’ai collaboré avec les autres membres pour gérer et organiser efficacement les activités du club, en assurant une bonne coordination et une exécution soignée des événements et des projets.',
          'J’ai continuellement progressé comme développeur grâce à la pratique et à la découverte de différentes technologies et frameworks de développement web.',
        ],
      },
      'hackclub-social-media': {
        role: 'Co-responsable marketing réseaux sociaux',
        tenure: 'Novembre 2021 - Août 2022',
        location: 'NUST, Islamabad',
        description: [
          'J’ai dirigé le marketing sur les réseaux sociaux en tant que responsable d’équipe pour HackClub, en couvrant les grands événements et en publiant des mises à jour régulières sur Instagram et Facebook.',
          'J’ai fait progresser le nombre d’abonnés et la portée des pages de HackClub sur les réseaux sociaux.',
          'J’ai coordonné les bénévoles de HackClub et du GDSC NUST pendant le Devfest Islamabad 2021 et le Codefest 2021, en favorisant la collaboration et les synergies.',
          'J’ai collaboré avec 10Pearls Islamabad pour Game Of Code, un concours de programmation rapide.',
        ],
      },
      'hackclub-web': {
        role: 'Membre de l’équipe Web et IT',
        tenure: 'Juin 2021 - Novembre 2021',
        location: 'NUST, Islamabad',
        description: [
          'J’ai contribué en tant que membre de l’équipe Web et IT, en participant activement au développement du site officiel de Hack Club, NUST.',
          'Avec React.js, React Bootstrap (Reactstrap) et Material UI, nous avons conçu un site moderne et visuellement soigné.',
          'J’ai également collaboré étroitement avec l’équipe sur diverses tâches web et IT, en assurant une bonne coordination et une exécution efficace des projets.',
        ],
      },
      insaniyat: {
        role: 'Collecteur de fonds',
        tenure: 'Avril 2021 - Mai 2021',
        location: 'NUST, Islamabad',
        description: [
          'J’ai participé au Project Insaniyat, une initiative de collecte de fonds à vocation sociale, lors de mon deuxième semestre à la NUST.',
          'J’ai mené un travail d’équipe pour recueillir des dons et lever des fonds pour de belles causes.',
          'Nous avons réuni environ 127 000 roupies de dons.',
          'Nous avons reversé ces fonds au réseau d’écoles Sunbeams pour soutenir sa campagne d’ouverture d’écoles dans les zones rurales du pays.',
        ],
      },
      'nust-media': {
        role: 'Responsable d’équipe (Web et IT)',
        tenure: 'Septembre 2021 - Décembre 2021',
        location: 'NUST, Islamabad',
        description: [
          'J’ai encadré une équipe de 5 personnes en tant que responsable Web et IT du NUST Media Club.',
          'J’ai géré et maintenu le site WordPress du club, en veillant à son bon fonctionnement et à ses performances.',
          'J’ai collaboré étroitement avec l’équipe Publications pour mettre à jour et publier des articles de blog attractifs sur le site.',
          'J’étais chargé de tenir le site à jour avec les articles du NUST Media Club et des contenus pertinents et informatifs, renforçant la présence en ligne du club.',
        ],
      },
      'ieee-nust': {
        role: 'Membre de l’équipe (Web et IT)',
        tenure: 'Octobre 2021 - Décembre 2021',
        location: 'NUST, Islamabad',
        description: [
          'J’ai contribué en tant que membre de l’équipe Web et IT d’IEEE NUST.',
          'J’ai conçu et développé des modèles d’e-mails professionnels, en garantissant une identité de marque cohérente et une communication efficace avec le public.',
          'Je me suis coordonné avec d’autres équipes, comme le marketing et le graphisme, pour aligner les efforts web et IT et améliorer la réussite globale des projets.',
          'J’ai participé activement aux initiatives de vie associative, en organisant des événements et des activités pour favoriser l’engagement et la collaboration au sein de la communauté IEEE NUST.',
        ],
      },
    },
  },
  projects: {
    title: 'Projets',
    intro:
      'Fort d’une bonne connaissance de React, Next.js, Redux, Node.js, Express, GraphQL et MongoDB, je développe des applications web robustes et évolutives. En m’appuyant sur ces technologies, je crée des interfaces engageantes qui offrent une expérience de qualité, je gère des états applicatifs complexes pour garantir une circulation fluide des données, je développe des APIs serveur efficaces et je conçois des modèles de données performants tout en assurant un stockage sécurisé. Cette maîtrise me permet de livrer des applications de haut niveau, à la hauteur des exigences du développement web moderne. 🫡',
    sectionTitle: '{ Travaux sélectionnés }',
    createdIn: 'Créé en',
    moreOnGithub: 'Plus de projets sur GitHub',
    entries: {
      'pockla-ai':
        'Grâce à l’IA, chacun de vos clients dispose de sa propre landing page personnalisée. Connectez votre CRM et chaque contact obtient automatiquement une page sur mesure.',
      'brilio-ai':
        'SaaS d’IA permettant aux entreprises comme aux particuliers de créer des agents IA sur mesure, d’entraîner des LLM avec leur logique métier et d’intégrer des données issues de documents, de liens web, de bases de données et de conversations questions-réponses.',
      'brava-crewconnect':
        'Plateforme de gestion des équipes pour les couvreurs, qui automatise la certification des formations, l’affectation des chantiers et le suivi de conformité entre sous-traitants. Elle propose des intégrations en temps réel avec Monday.com, FlexiQuiz et CompanyCam, ainsi que des notifications multicanales (e-mail et SMS).',
      'prgrss-ai':
        'Plateforme web et mobile multiplateforme dédiée au mentorat assisté par IA pour les communautés noires et racisées du Royaume-Uni, avec mise en relation mentors-mentorés par IA, visioconférence en temps réel, suivi de progression et messagerie intégrée, pour un accompagnement de bout en bout.',
      thanos:
        'Thanos AI est l’aboutissement de nos outils de numérisation : une solution complète de bout en bout pour les projets de machine learning, qui couvre tout, de la collecte et l’annotation des données au déploiement de modèles assisté par IA.',
      'dev-portfolio':
        'Le site que vous êtes en train de parcourir 😉 Dev-Portfolio est un portfolio open source et personnalisable permettant aux développeurs de présenter leurs compétences techniques et de mettre en avant leurs réalisations.',
      katra:
        'Application full-stack multiplateforme réalisée pour Creative Chaos, conçue pour mettre en relation sans friction les personnes ayant besoin de sang et des donneurs généreux. Cette solution simplifie et améliore la communication entre les deux parties, pour un processus fluide et efficace.',
    },
  },
  contact: {
    title: 'Contact',
    intro:
      'Je suis en quelque sorte le Batman des réseaux sociaux : toujours tapi dans l’ombre de chaque plateforme, prêt à surgir pour sauver la mise ! Que vous cherchiez un peu de magie technique ou quelqu’un pour parler tech, écrivez-moi. Connectons-nous et mettons un peu de bonne humeur dans le monde de la tech ! 🤝',
    facts: {
      email: 'E-mail',
      basedIn: 'Localisation',
      basedInValue:
        'Islamabad, Pakistan — je travaille avec des équipes sur plusieurs fuseaux horaires',
      role: 'Poste',
      roleValue: 'Ingénieur logiciel full-stack',
      openTo: 'Ouvert à',
      openToValue: 'Postes à temps plein, missions en freelance et projets indépendants',
    },
    reachOutTitle: 'Pourquoi me contacter',
    reachOut: [
      'Construire des applications web de bout en bout — React, Next.js, Vue, Node.js, NestJS et Express, avec PostgreSQL, MongoDB ou Redis derrière.',
      'Faire avancer un produit existant : nouvelles fonctionnalités, travail sur les performances, ou remise à plat d’un code qui a grandi plus vite que sa structure.',
      'Déploiement et infrastructure — AWS, Docker, pipelines CI/CD et un processus de mise en production auquel l’équipe fait confiance.',
      'Travail produit assisté par IA, des intégrations de LLM aux outils internes.',
      'Intervenir ou aider à organiser un événement de la communauté tech — j’en ai organisé un certain nombre.',
    ],
    emailNote:
      'L’e-mail reste le moyen le plus sûr de me joindre ; je réponds généralement sous quelques jours.',
    cta: 'Écrivez-moi par e-mail 📧',
  },
};

export default fr;
