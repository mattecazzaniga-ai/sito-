/**
 * Single source of truth for every editable string on the site.
 *
 * Everything marked "PLACEHOLDER" is not a real, confirmed detail — swap it
 * for the real value as soon as it is known. Facts about past editions
 * (Albo d'Oro, premi individuali, chi ha partecipato) must stay accurate:
 * do not add a name, a result or a number that isn't verified. Nothing
 * here is wired to a backend yet; the shapes below are what the future
 * admin dashboard (see /app/admin) is expected to write to.
 */

export const siteConfig = {
  name: "Aziende in Campo",
  shortName: "AiC",
  tagline: "Il calcio a 5 delle aziende.",
  // Meta description: < 160 caratteri, parola chiave principale all'inizio.
  description:
    "Il torneo di calcio a 5 tra aziende di Oristano: una giornata di sport, team building e networking tra le realtà del territorio. Iscrivi la tua squadra.",
  url: "https://www.aziendeincampo.it", // PLACEHOLDER — dominio definitivo
  organizer: "Orisound",
  locale: "it_IT",
};

export const contact = {
  email: "orisoundevent@gmail.com",
  phone: "+39 333 579 3417",
  instagram: "https://instagram.com/aziendeincampo",
  tiktok: "https://www.tiktok.com/@aziendeincampo",
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Storia", href: "/storia" },
  { label: "Perché partecipare", href: "/#perche-partecipare" },
  { label: "Albo d'oro", href: "/albo-doro" },
  { label: "Iscrizioni", href: "/#iscrizione" },
  { label: "FAQ", href: "/#faq" },
];

export const eventInfo = {
  sport: "Calcio a 5",
  dateLabel: "Prossima edizione", // PLACEHOLDER — data della 3ª edizione non ancora annunciata
  location: "Via Ghilarza 1, Oristano", // sede: MC Sport Oristano
};

/**
 * Testi della home, nell'ordine in cui compaiono. Voce, terminologia e regole
 * di stile: docs/brand-guidelines.md (tu, titoli con il punto, CTA fisse).
 */
export const hero = {
  badge: "Il torneo di calcio a 5 tra aziende",
  titleTop: "Aziende",
  titleBottom: "In Campo",
  subtitle: "Una giornata di calcio a 5 in cui i colleghi diventano una squadra e le aziende del territorio si incontrano in campo.",
  primaryCta: "Iscrivi la tua azienda",
  secondaryCta: "Scopri il torneo",
};

/** Etichette fisse delle due CTA: stesse parole in tutto il sito. */
export const ctaLabels = {
  register: "Iscrivi la tua azienda",
  partner: "Diventa partner",
};

export const eventIntro = {
  eyebrow: "Il torneo",
  title: "Il team building che si gioca davvero.",
  paragraphs: [
    "Aziende in Campo è il torneo di calcio a 5 tra le aziende del territorio di Oristano: una giornata intera fuori dall'ufficio, in cui il gioco di squadra smette di essere uno slogan e diventa una partita da vincere insieme.",
    "Tra una partita e l'altra succede quello che in riunione non succede: colleghi che si conoscono davvero, aziende che si incontrano senza formalità, relazioni che continuano anche dopo il fischio finale.",
  ],
  highlights: [
    { label: "Sport", value: "Calcio a 5" },
    { label: "Team building", value: "Fuori dall'ufficio" },
    { label: "Networking", value: "Tra aziende" },
  ],
};

/**
 * Numeri reali comunicati dall'organizzatore (non stime): aggiornare a ogni
 * nuova edizione. Niente extra qui — solo cifre confermate.
 */
export const impactStats = [
  { value: 2, suffix: "", label: "Edizioni disputate" },
  { value: 200, suffix: "+", label: "Atleti in campo" },
  { value: 500, suffix: "+", label: "Presenze totali" },
  { value: 10, suffix: "", label: "Aziende coinvolte" },
];

export const valuesContent = {
  eyebrow: "Cosa resta",
  title: "Le relazioni non nascono in ufficio. Nascono in campo.",
  description: "Una giornata di sport lascia alla tua squadra qualcosa che dura più di un risultato.",
  pillars: [
    { icon: "handshake", label: "Fiducia", description: "In campo ci si copre a vicenda. In ufficio si continua a farlo." },
    { icon: "users", label: "Collaborazione", description: "Ruoli diversi, un solo obiettivo: come nel lavoro di ogni giorno." },
    { icon: "heart", label: "Appartenenza", description: "Si gioca per la propria azienda, e lo si sente fin dal primo minuto." },
    { icon: "camera", label: "Ricordi", description: "Foto, video e racconti di una giornata che i colleghi si porteranno dietro." },
  ] as const,
};

export const whyParticipate = {
  eyebrow: "Perché partecipare",
  title: "Cosa porta alla tua azienda.",
  description: "Quattro motivi concreti per portare i tuoi colleghi in campo.",
  benefits: [
    {
      icon: "award",
      title: "Orgoglio di squadra",
      description: "I tuoi colleghi difendono il nome dell'azienda davanti alle altre realtà del territorio.",
    },
    {
      icon: "camera",
      title: "Copertura ufficiale",
      description: "Foto e video di tutta la giornata: contenuti autentici da condividere e ricordi che restano.",
    },
    {
      icon: "coffee",
      title: "Momento conviviale",
      description: "La pausa pranzo fa parte della giornata: il momento giusto per conoscersi, anche con le altre aziende.",
    },
    {
      icon: "sparkles",
      title: "Emozioni vere",
      description: "Tifo, gol e parate: l'adrenalina di un torneo vissuta fianco a fianco con i colleghi.",
    },
  ] as const,
};

export const testimonialsContent = {
  eyebrow: "Chi c'era",
  title: "Chi ha giocato, lo racconta così.",
  description: "Recensioni reali, raccolte in forma anonima dall'organizzazione dopo le edizioni passate.",
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

// Recensioni reali raccolte dall'organizzatore, in forma anonima.
export const testimonials: Testimonial[] = [
  {
    quote: "È stata un'iniziativa molto bella. Mi sono divertito tantissimo e spero di ripeterla anche l'anno prossimo.",
    author: "Partecipante",
    role: "Recensione anonima",
  },
  {
    quote:
      "L'unica cosa che posso dire, avendo partecipato a diverse iniziative analoghe, è che sono rimasto davvero sorpreso dalla riuscita in toto di questa giornata: pur essendo solo la prima edizione, posso solo fare i complimenti. Sono rimasto molto colpito dall'evento.",
    author: "Partecipante",
    role: "Recensione anonima · 1ª edizione",
  },
  {
    quote: "Impressioni positivissime: tempi celeri, organizzazione puntuale, arbitri professionali e capaci.",
    author: "Partecipante",
    role: "Recensione anonima",
  },
];

export type GalleryPhoto = {
  src: string;
  alt: string;
};

/**
 * Libreria fotografica del torneo: qui raccogliamo ogni foto disponibile
 * (azione, premiazioni, momenti di squadra), incluse quelle già usate altrove
 * nel sito — questa è la raccolta completa, i duplicati sono voluti.
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/azione-contrasto-ondulor-cellini.jpg",
    alt: "Contrasto per il pallone tra un giocatore Ondulor e un giocatore Cellini",
  },
  {
    src: "/images/azione-tiro-al-volo-ondulor.jpg",
    alt: "Un giocatore Ondulor calcia al volo davanti a un avversario Cellini",
  },
  {
    src: "/images/azione-portiere-doppia-marcatura.jpg",
    alt: "Il portiere si prepara a un tiro ravvicinato circondato da due attaccanti",
  },
  {
    src: "/images/azione-parata-diesa.jpg",
    alt: "Il portiere si tuffa in presa bassa mentre il pallone vola sopra la traversa",
  },
  {
    src: "/images/hero-calcio-a-5.jpg",
    alt: "Giocatori di calcio a 5 di Aziende in Campo si stringono la mano a fine partita",
  },
  {
    src: "/images/albo-doro-2025-fette-di-sole.jpg",
    alt: "Squadra vincitrice Fette di Sole — edizione 2025 di Aziende in Campo",
  },
  {
    src: "/images/albo-doro-2026-diesa-mcdonalds.jpg",
    alt: "Squadra vincitrice Diesa S.r.l. / McDonald's — edizione 2026 di Aziende in Campo",
  },
  {
    src: "/images/premio-2025-miglior-giocatore-sireus.jpg",
    alt: "Luca Sireus (Abbi Group) — Miglior giocatore, edizione 2025",
  },
  {
    src: "/images/premio-2025-miglior-portiere-zucca.jpg",
    alt: "Ivan Zucca (Fette di Sole) — Miglior portiere, edizione 2025",
  },
  {
    src: "/images/premio-2026-miglior-giocatore-delussu.jpg",
    alt: "Andrea Delussu (Diesa S.r.l. / McDonald's) — Miglior giocatore, edizione 2026",
  },
  {
    src: "/images/premio-2026-miglior-portiere-cossu.jpg",
    alt: "Gabriele Cossu (Consorzio UNO) — Miglior portiere, edizione 2026",
  },
  {
    src: "/images/azione-dribbling-uno-mcdonalds.jpg",
    alt: "Un giocatore Diesa/McDonald's dribbla un avversario del Consorzio UNO",
  },
  {
    src: "/images/azione-tiro-mcdonalds.jpg",
    alt: "Un giocatore Diesa/McDonald's calcia verso la porta",
  },
  {
    src: "/images/azione-portiere-ondulor.jpg",
    alt: "Portiere in azione durante una partita di Aziende in Campo",
  },
  {
    src: "/images/azione-contrasto-palla.jpg",
    alt: "Due giocatori si contendono il pallone durante una partita di Aziende in Campo",
  },
  {
    src: "/images/azione-corsa-mcdonalds.jpg",
    alt: "Giocatore in corsa durante una partita di Aziende in Campo",
  },
];

export const galleryContent = {
  eyebrow: "Galleria",
  title: "Le immagini delle edizioni passate.",
  description: "Azioni, parate e premiazioni: sfoglia le foto di Aziende in Campo.",
  openLabel: "Sfoglia la galleria",
};

export const participantsContent = {
  eyebrow: "Chi è già sceso in campo",
  title: "Hanno già giocato con noi.",
  description: "Le aziende e le realtà del territorio che hanno preso parte alle edizioni di Aziende in Campo.",
};

export const howItWorksContent = {
  eyebrow: "Come funziona",
  title: "Dal form al campo in quattro passi.",
  description: "Tu iscrivi l'azienda, noi pensiamo al resto: campo, arbitri, programma e premiazione.",
};

export const howItWorksSteps = [
  {
    number: "01",
    title: "Iscrivi la tua azienda",
    description:
      "Compila il form in due minuti. Ti ricontattiamo noi per confermare il posto e definire i dettagli.",
  },
  {
    number: "02",
    title: "Forma la squadra",
    description:
      "Da 5 a 12 giocatori, più 2 accompagnatori: coinvolgi i colleghi e scegli chi rappresenterà l'azienda.",
  },
  {
    number: "03",
    title: "Scendi in campo",
    description:
      "Fase a gironi, poi eliminazione diretta: sfidi le altre aziende del territorio fino alla finale.",
  },
  {
    number: "04",
    title: "Vivi la giornata",
    description:
      "Pranzo, networking e premiazione: la festa continua ben oltre il fischio finale.",
  },
];

/**
 * Identity chips shown at the top of the Format section. These describe the
 * event, not numbers to display elsewhere (no team counts on the site).
 */
export const formatIdentity = [
  { icon: "ball", label: "Calcio a 5" },
  { icon: "trophy", label: "Torneo" },
  { icon: "users", label: "Squadre aziendali" },
  { icon: "calendar", label: "Giornata di evento" },
] as const;

export const formatContent = {
  eyebrow: "Il format",
  title: "Una giornata, un torneo.",
  description:
    "Gironi, eliminazione diretta e una pausa pranzo per tutti: una giornata pensata per giocare, conoscersi e festeggiare insieme.",
};

// Solo fatti confermati o segnaposto dichiarati come tali: nessuna regola inventata.
export const formatDetails = {
  structure: "Fase a gironi seguita da eliminazione diretta",
  lunch: "Pausa pranzo per tutte le squadre a metà giornata",
  awards: "Premiazione a fine giornata per la squadra vincitrice e i riconoscimenti individuali",
  funFactor: "Divertimento e team building tra le aziende del territorio",
};

/**
 * Editorial origin story for /storia. Verbatim copy provided by the
 * organizer — do not paraphrase, shorten, or invent additional personal
 * details, names or dates beyond what's written here.
 */
export type StoryBeat =
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string; highlight?: string; photo?: string; photoPending?: boolean }
  | { type: "pullquote"; lines: string[] };

export const storyNarrative = {
  eyebrow: "La storia",
  title: "Tutto nasce da un'idea semplice.",
  beats: [
    {
      type: "lead",
      text: "Ogni giorno le aziende collaborano, si incontrano e costruiscono il futuro del territorio. Ma raramente hanno un'occasione autentica per conoscersi fuori dall'ambiente di lavoro.",
    },
    {
      type: "paragraph",
      text: "Da questa osservazione nasce Aziende in Campo: dall'idea di un ragazzo con la passione per lo sport e per il proprio territorio, che ha immaginato un evento capace di portare le aziende fuori dall'ufficio e dentro una giornata diversa, fatta di calcio a 5, relazioni e divertimento.",
      highlight: "passione",
    },
    {
      type: "pullquote",
      lines: ["Non un torneo qualsiasi.", "Un'esperienza."],
    },
    {
      type: "paragraph",
      text: "Non è un'idea nata dal nulla. Un torneo di calcio a 5 tra aziende, in questo territorio, esisteva già: si era fermato, ma non è mai stato dimenticato. Aziende in Campo nasce anche per questo, per riportarlo in campo e trasformarlo in un appuntamento che il territorio possa aspettare ogni anno.",
      highlight: "riportarlo in campo",
      photoPending: true, // foto del vecchio torneo in arrivo dall'organizzatore
    },
    {
      type: "paragraph",
      text: "Il calcio a 5 diventa così il punto d'incontro: un linguaggio semplice e universale capace di unire persone, creare complicità e accorciare le distanze.",
      highlight: "complicità",
    },
    {
      type: "paragraph",
      text: "Ogni squadra scende in campo rappresentando con orgoglio la propria azienda. Ogni partita diventa un'occasione per competere, conoscersi e condividere qualcosa che va oltre il risultato.",
      highlight: "orgoglio",
      photo: "/images/azione-tiro-mcdonalds.jpg",
    },
    {
      type: "paragraph",
      text: "E quando il fischio finale arriva, non rimane soltanto una classifica. Rimangono fotografie, video, emozioni, risate e ricordi di una giornata vissuta insieme.",
      highlight: "ricordi",
    },
    {
      type: "paragraph",
      text: "L'obiettivo è costruire, edizione dopo edizione, un appuntamento capace di crescere insieme al territorio. Oristano è dove tutto è cominciato, non dove tutto deve fermarsi: l'ambizione è portare Aziende in Campo anche oltre i suoi confini, ovunque ci sia un'azienda pronta a scendere in campo.",
      highlight: "territorio",
      photo: "/images/azione-dribbling-uno-mcdonalds.jpg",
    },
  ] as StoryBeat[],
  closing: {
    lead: "Perché una squadra non si costruisce soltanto sul campo.",
    final: "Si costruisce insieme.",
  },
};

/**
 * Project history. No team-count numbers belong here — see REGOLA SUI DATI.
 */
export const historyContent = {
  eyebrow: "Le edizioni",
  title: "Anno per anno.",
  description: "Il percorso di Aziende in Campo, edizione dopo edizione.",
};

// Descrizioni costruite solo con i fatti già verificati in hallOfFame.
export const history = [
  { year: "2025", title: "Prima edizione", description: "30 novembre 2025, MC Sport Oristano: nasce il torneo. Vince Fette di Sole, 3-0 in finale su Abbi Group." },
  { year: "2026", title: "Seconda edizione", description: "3 maggio 2026: il torneo torna in campo. Vince Diesa S.r.l. / McDonald's, 3-0 in finale su Consorzio UNO Oristano." },
  { year: "2027", title: "Prossima edizione", description: "Data e dettagli in arrivo: seguici su Instagram e TikTok per non perderli." }, // PLACEHOLDER
];

export const timelineContent = {
  eyebrow: "La giornata",
  title: "Il programma.",
  description: "Dal check-in alla premiazione, ecco come si svolge la giornata. Gli orari vengono comunicati alle squadre iscritte prima dell'evento.",
};

// Ordine della giornata: nessun orario, per non dover rincorrere ogni cambio di programma.
export const timeline = [
  { title: "Check-in", description: "Accredito squadre e welcome kit." },
  { title: "Fase a gironi", description: "Le squadre si affrontano nella prima fase del torneo." },
  { title: "Pausa pranzo", description: "Pranzo e networking tra le aziende." },
  { title: "Eliminazione diretta", description: "Le squadre qualificate dai gironi si giocano le semifinali." },
  { title: "Finali", description: "Finale 3°-4° posto e finalissima." },
  { title: "Premiazione", description: "Premi, foto di gruppo e chiusura della giornata." },
];

export type Participant = {
  name: string;
  logo?: string; // logo reale fornito dall'organizzatore — se assente, si mostra l'iniziale
};

/**
 * Realtà che hanno effettivamente preso parte alle edizioni già disputate
 * di Aziende in Campo. Nessun anno, posizione o numero di squadre: solo il
 * nome, come richiesto per la sezione "Chi è già sceso in campo".
 *
 * Fonti: giornaledioristano.it e ornews.it (edizione 2026); ornews.it
 * (edizione 2025). Verificare prima di ogni modifica — non aggiungere un
 * nome che non abbia una fonte giornalistica o una conferma diretta
 * dell'organizzazione.
 */
export const participants: Participant[] = [
  { name: "Fette di Sole", logo: "/images/logos/fette-di-sole.png" },
  { name: "Abbi Group" },
  { name: "Vestis" },
  { name: "Ondulor", logo: "/images/logos/ondulor.png" },
  { name: "Catte Cup" },
  { name: "F.lli Cellino" },
  { name: "Cellino" },
  { name: "Simec", logo: "/images/logos/simec.png" },
  { name: "Diesa S.r.l. (McDonald's)" },
  { name: "Consorzio UNO – Università di Oristano" },
];

export type HallOfFameEntry = {
  year: string;
  date?: string;
  isoDate?: string; // formato ISO 8601 (YYYY-MM-DD), per i dati strutturati
  winner: string;
  opponent?: string;
  score?: string;
  note: string;
  verified: boolean;
  photo?: string;
};

/**
 * Solo i vincitori con primo posto verificato da fonte attendibile.
 * Se un anno non è verificato, "winner" resta vuoto e "verified" è false:
 * il componente mostra "Risultato da inserire" invece di un nome.
 */
export const hallOfFame: HallOfFameEntry[] = [
  {
    year: "2025",
    date: "30 novembre 2025",
    isoDate: "2025-11-30",
    winner: "Fette di Sole",
    opponent: "Abbi Group",
    score: "3-0",
    note: "Il 30 novembre 2025 Fette di Sole ha vinto la finale della prima edizione 3-0 contro Abbi Group.",
    verified: true, // fonte: organizzatore — confermato dall'organizzatore
    photo: "/images/albo-doro-2025-fette-di-sole.jpg",
  },
  {
    year: "2026",
    date: "3 maggio 2026",
    isoDate: "2026-05-03",
    winner: "Diesa S.r.l. / McDonald's",
    opponent: "Consorzio UNO Oristano",
    score: "3-0",
    note: "Il 3 maggio 2026 Diesa S.r.l. / McDonald's ha vinto la finale della seconda edizione 3-0 contro Consorzio UNO Oristano.",
    verified: true, // fonte: organizzatore + oristanonoi.it
    photo: "/images/albo-doro-2026-diesa-mcdonalds.jpg",
  },
];

export type IndividualAward = {
  year: string;
  award: string;
  name: string;
  photo?: string; // PLACEHOLDER — foto in arrivo, una per premio
};

// Solo premi individuali confermati da fonte attendibile.
export const individualAwards: IndividualAward[] = [
  {
    year: "2025",
    award: "Miglior giocatore",
    name: "Luca Sireus (Abbi Group)", // fonte: ornews.it — verificare
    photo: "/images/premio-2025-miglior-giocatore-sireus.jpg",
  },
  {
    year: "2025",
    award: "Miglior portiere",
    name: "Ivan Zucca (Fette di Sole)",
    photo: "/images/premio-2025-miglior-portiere-zucca.jpg",
  },
  {
    year: "2026",
    award: "Miglior giocatore",
    name: "Andrea Delussu (Diesa S.r.l. / McDonald's)", // fonte: oristanonoi.it
    photo: "/images/premio-2026-miglior-giocatore-delussu.jpg",
  },
  {
    year: "2026",
    award: "Miglior portiere",
    name: "Gabriele Cossu (Consorzio UNO)", // fonte: oristanonoi.it
    photo: "/images/premio-2026-miglior-portiere-cossu.jpg",
  },
];

export const hallOfFamePage = {
  eyebrow: "Albo d'oro",
  title: "Chi ha scritto la storia sul campo.",
  description: "Le squadre vincitrici e i premi individuali di ogni edizione. Apri un'edizione per scoprire miglior giocatore e miglior portiere.",
};

export const hallOfFameCta = {
  title: "Il prossimo nome sulla bacheca può essere il tuo.",
  description: "Iscrivi la tua azienda alla prossima edizione e scendi in campo per la vittoria.",
};

export type SponsorTier = "main" | "gold" | "partner";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
};

// Nessuno sponsor confermato al momento: la sezione pubblica mostra solo l'invito a diventare partner.
export const sponsors: Sponsor[] = [];

export const sponsorsContent = {
  eyebrow: "Partnership",
  title: "Diventa partner di Aziende in Campo.",
  description:
    "Associa il tuo marchio a un torneo che in due edizioni ha già superato le 500 presenze. Raccontaci la tua idea di partnership: la costruiamo insieme.",
};

export const registrationContent = {
  eyebrow: "Iscrizione",
  title: "Porta la tua azienda in campo.",
  description: "Lascia i tuoi dati: ti ricontattiamo noi per confermare l'iscrizione e definire insieme tutti i dettagli.",
  // Solo fatti confermati (FAQ e sede): niente promesse su prezzi o date.
  reassurance: [
    "Ti ricontattiamo noi per confermare il posto",
    "Squadre da 5 a 12 giocatori, più 2 accompagnatori",
    "MC Sport, via Ghilarza 1, Oristano",
  ],
  successTitle: "Richiesta inviata.",
  successMessage:
    "Grazie! Abbiamo ricevuto la tua richiesta di iscrizione: ti ricontattiamo a breve via email per i prossimi passi.",
};

export const faqContent = {
  eyebrow: "Domande frequenti",
  title: "Tutto quello che devi sapere.",
  description: "Non trovi la risposta che cerchi? Scrivici: ti rispondiamo volentieri.",
};

export const finalCta = {
  title: "Il prossimo calcio d'inizio aspetta la tua azienda.",
  description: "Iscrivi la tua squadra: al resto pensiamo noi.",
};

export const contactPage = {
  eyebrow: "Contatti",
  title: "Parliamone.",
  description:
    "Informazioni sul torneo, iscrizioni o proposte di partnership: scrivici dal form o contattaci direttamente. Ti rispondiamo il prima possibile.",
};

export const faqItems = [
  {
    question: "Chi può partecipare?",
    answer:
      "Qualsiasi azienda, di qualsiasi dimensione e settore: grandi aziende, bar, barbershop, negozi, studi professionali. Non serve un settore specifico, solo la voglia di scendere in campo.",
  },
  {
    question: "Chi può giocare nella squadra?",
    answer:
      "La squadra può essere composta dai dipendenti dell'azienda. In caso di necessità sono ammessi fino a tre collaboratori strettamente legati alla realtà aziendale, come ex dipendenti, partner o fornitori: di questi tre, al massimo uno può essere un parente.",
  },
  {
    question: "Quante persone servono per formare una squadra?",
    answer:
      "Ogni squadra è formata da un minimo di 5 a un massimo di 12 giocatori, più 2 accompagnatori/allenatori.",
  },
  {
    question: "Possono partecipare anche i colleghi che non giocano?",
    answer:
      "Sì: l'evento è pensato anche per colleghi, accompagnatori e famiglie, che possono vivere la giornata insieme alla squadra, tifando e condividendo il team building e il networking.",
  },
  {
    question: "È necessario essere sportivi?",
    answer:
      "No. Aziende in Campo nasce per il divertimento e il networking prima ancora che per l'agonismo: contano la squadra e lo spirito di gruppo, non il livello tecnico.",
  },
  {
    question: "Dove si svolge l'evento?",
    answer:
      "Il torneo si svolge in via Ghilarza 1 a Oristano, presso il centro sportivo MC Sport.",
  },
  {
    question: "L'evento si svolge anche in caso di maltempo?",
    answer:
      "In caso di maltempo verrà individuata un'altra data, comunicata a tutte le squadre iscritte.",
  },
  {
    question: "Ci sono premi?",
    answer:
      "Sì: alla squadra vincitrice e ai migliori giocatori vengono assegnati riconoscimenti a fine giornata, come nell'Albo d'Oro delle edizioni passate.",
  },
  {
    question: "Possiamo organizzare un'edizione dedicata alla nostra azienda?",
    answer:
      "Sì: scrivici e costruiamo insieme una giornata di team building dedicata solo alla tua azienda.",
  },
  {
    question: "Come posso diventare partner o sponsor?",
    answer:
      "Scrivici dalla pagina Contatti scegliendo «Diventare partner / sponsor»: ti presentiamo le opportunità disponibili e costruiamo insieme la proposta più adatta al tuo marchio.",
  },
];

export const footerLinks = {
  columns: [
    {
      title: "Naviga",
      links: [
        { label: "Home", href: "/#home" },
        { label: "Storia", href: "/storia" },
        { label: "Perché partecipare", href: "/#perche-partecipare" },
        { label: "Albo d'oro", href: "/albo-doro" },
        { label: "Iscrizioni", href: "/#iscrizione" },
      ],
    },
    {
      title: "Informazioni",
      links: [
        { label: "Contatti", href: "/contatti" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Cookie Policy", href: "/cookie-policy" },
      ],
    },
  ],
};

/**
 * Placeholder shape for the future admin dashboard nav (see /app/admin).
 * Not authenticated yet — this only documents the intended information
 * architecture so the real implementation can slot in later.
 */
export const adminNavSections = [
  { label: "Overview", href: "/admin" },
  { label: "Aziende", href: "/admin/aziende" },
  { label: "Partecipanti", href: "/admin/partecipanti" },
  { label: "Squadre", href: "/admin/squadre" },
  { label: "Partite", href: "/admin/partite" },
  { label: "Risultati", href: "/admin/risultati" },
  { label: "Albo d'oro", href: "/admin/albo-doro" },
  { label: "Sponsor", href: "/admin/sponsor" },
  { label: "Iscrizioni", href: "/admin/iscrizioni" },
  { label: "Comunicazioni", href: "/admin/comunicazioni" },
];
