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
  description:
    "Aziende in Campo è il torneo di calcio a 5 tra aziende e realtà del territorio di Oristano: una giornata di sport, squadra e competizione fuori dal normale ambiente di lavoro.",
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
];

export const eventInfo = {
  sport: "Calcio a 5",
  dateLabel: "Prossima edizione", // PLACEHOLDER — data della 3ª edizione non ancora annunciata
  location: "Oristano", // sede storica: campo MC Sport — da confermare per la prossima edizione
};

export const eventIntro = {
  eyebrow: "Il concept",
  title: "Il calcio a 5, vissuto insieme.",
  paragraphs: [
    "Aziende in Campo è un torneo di calcio a 5 dedicato alle aziende e alle realtà del territorio di Oristano.",
    "L'obiettivo è creare una giornata in cui colleghi e aziende possano vivere la competizione sul campo e condividere un'esperienza al di fuori del normale ambiente lavorativo.",
  ],
  highlights: [
    { label: "Sport", value: "Calcio a 5" },
    { label: "Format", value: "Torneo" },
    { label: "Territorio", value: "Oristano" },
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
  eyebrow: "Il vero valore",
  title: "Le relazioni non si costruiscono in ufficio.",
  description:
    "Aziende in Campo crea le condizioni perché nascano davvero: sul campo, in una giornata che i colleghi ricorderanno.",
  pillars: [
    { icon: "handshake", label: "Fiducia" },
    { icon: "users", label: "Collaborazione" },
    { icon: "heart", label: "Appartenenza" },
    { icon: "camera", label: "Ricordi" },
  ] as const,
};

export const whyParticipate = {
  eyebrow: "Perché partecipare",
  title: "Non lo diciamo noi. Lo dicono i numeri.",
  description: "Ecco cosa succede davvero quando la tua azienda scende in campo.",
  benefits: [
    {
      icon: "award",
      title: "Orgoglio",
      description: "Orgoglio di rappresentare la tua azienda.",
    },
    {
      icon: "camera",
      title: "Copertura ufficiale",
      description: "Copertura ufficiale di tutta la giornata: ricordi che restano.",
    },
    {
      icon: "coffee",
      title: "Momento conviviale",
      description: "Incluso nella giornata: momenti per conoscersi anche fuori dall'ufficio.",
    },
    {
      icon: "sparkles",
      title: "Emozioni",
      description: "Le emozioni vere di una giornata di sport vissuta insieme ai colleghi.",
    },
  ] as const,
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

// PLACEHOLDER — recensioni reali in arrivo dall'organizzatore
export const testimonials: Testimonial[] = [];

export type GalleryPhoto = {
  src: string;
  alt: string;
};

/**
 * Libreria fotografica del torneo. Vuota per ora: le foto arriveranno
 * dall'organizzatore edizione dopo edizione. Non riutilizzare qui immagini
 * già impiegate altrove nel sito.
 */
export const galleryPhotos: GalleryPhoto[] = [];

export const howItWorksSteps = [
  {
    number: "01",
    title: "Iscrivi la tua azienda",
    description:
      "Compila il form di iscrizione: bastano pochi minuti per prenotare il posto della tua azienda al torneo.",
  },
  {
    number: "02",
    title: "Forma la tua squadra",
    description:
      "Coinvolgi i tuoi colleghi e costruisci la squadra di calcio a 5 che rappresenterà l'azienda.",
  },
  {
    number: "03",
    title: "Scendi in campo",
    description:
      "Il giorno del torneo affronti le altre squadre aziendali del territorio, tra fase a gironi e fase finale.",
  },
  {
    number: "04",
    title: "Vivi l'evento",
    description:
      "Partite, premiazione e networking informale: la giornata continua ben oltre il fischio finale.",
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

// Solo fatti confermati o segnaposto dichiarati come tali: nessuna regola inventata.
export const formatDetails = {
  structure: "Fase a gironi seguita da eliminazione diretta",
  lunch: "Pausa pranzo per tutte le squadre a metà giornata",
  awards: "Premiazione a fine giornata per la squadra vincitrice e i riconoscimenti individuali",
};

/**
 * Editorial origin story for /storia. Verbatim copy provided by the
 * organizer — do not paraphrase, shorten, or invent additional personal
 * details, names or dates beyond what's written here.
 */
export type StoryBeat =
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string; highlight?: string; photo?: string }
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
export const history = [
  { year: "2025", title: "Nasce Aziende in Campo", description: "Prima edizione del torneo di calcio a 5 tra aziende del territorio di Oristano." },
  { year: "2026", title: "Seconda edizione", description: "Il torneo torna con la seconda edizione." },
  { year: "2027", title: "Prossima edizione", description: "Informazioni in arrivo." }, // PLACEHOLDER
];

// Ordine della giornata: nessun orario, per non dover rincorrere ogni cambio di programma.
export const timeline = [
  { title: "Check-in", description: "Accredito squadre e welcome kit." },
  { title: "Fase a gironi", description: "Le squadre si affrontano nella prima fase del torneo." },
  { title: "Pausa pranzo", description: "Pranzo e networking tra le aziende." },
  { title: "Eliminazione diretta", description: "Semifinali tra le squadre qualificate dai gironi." },
  { title: "Finali", description: "Finale 3°-4° posto e finalissima." },
  { title: "Premiazione", description: "Premi, foto di gruppo e chiusura della giornata." },
];

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
export const participants: string[] = [
  "Fette di Sole",
  "Abbi Group",
  "Vestis",
  "Ondulor",
  "Catte Cup",
  "F.lli Cellino",
  "Cellino",
  "Simec",
  "Diesa S.r.l. (McDonald's)",
  "Consorzio UNO – Università di Oristano",
];

export type HallOfFameEntry = {
  year: string;
  date?: string;
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
    winner: "Fette di Sole",
    opponent: "Abbi Group",
    // score: PLACEHOLDER — punteggio esatto della finale da confermare
    note: "Il 30 novembre 2025 Fette di Sole ha vinto la finale della prima edizione contro Abbi Group.",
    verified: true, // fonte: organizzatore + ornews.it — verificare prima della pubblicazione
    photo: "/images/albo-doro-2025-fette-di-sole.jpg",
  },
  {
    year: "2026",
    date: "3 maggio 2026",
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

export const hallOfFameCta = {
  title: "Il tuo nome può essere il prossimo su questa bacheca.",
  description: "Comincia da qui.",
};

export type SponsorTier = "main" | "gold" | "partner";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
};

// Nessuno sponsor confermato al momento: la sezione pubblica mostra solo l'invito a diventare partner.
export const sponsors: Sponsor[] = [];

export const faqItems = [
  {
    question: "Chi può partecipare?",
    answer:
      "Qualsiasi azienda o realtà del territorio di Oristano può iscrivere una squadra di calcio a 5: non è richiesto un settore specifico, solo la voglia di scendere in campo.",
  },
  {
    question: "Quante persone servono per formare una squadra?",
    answer:
      "Il numero minimo e massimo di giocatori per squadra viene indicato nel form di iscrizione ed è pensato per permettere rotazioni durante la giornata.",
  },
  {
    question: "È necessario essere sportivi?",
    answer:
      "No. Aziende in Campo è pensato per il divertimento e il networking prima ancora che per la competizione agonistica: contano squadra e spirito di gruppo.",
  },
  {
    question: "Quanto costa partecipare?",
    answer:
      "Il costo di iscrizione è in fase di definizione. Verrà comunicato a tutte le aziende interessate prima della conferma finale.", // PLACEHOLDER
  },
  {
    question: "Cosa comprende l'iscrizione?",
    answer:
      "L'iscrizione comprende la partecipazione al torneo di calcio a 5 e l'accesso alle attività della giornata. I dettagli definitivi verranno confermati via email.", // PLACEHOLDER
  },
  {
    question: "Dove si svolge l'evento?",
    answer:
      "Il torneo si svolge a Oristano. La location della prossima edizione è in fase di conferma e verrà comunicata a tutte le squadre iscritte.", // PLACEHOLDER sul campo esatto
  },
  {
    question: "Come vengono organizzate le partite?",
    answer:
      "Il torneo si sviluppa con una fase a gironi seguita da semifinali e finale, come nelle edizioni già disputate.",
  },
  {
    question: "Ci sono premi?",
    answer:
      "Sì: alla squadra vincitrice e ai migliori giocatori vengono assegnati riconoscimenti a fine giornata, come nell'Albo d'Oro delle edizioni passate.",
  },
  {
    question: "Come posso diventare sponsor?",
    answer:
      "Compila il form nella sezione Sponsor oppure scrivici direttamente: ti ricontatteremo per illustrarti i pacchetti di partnership disponibili.",
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
