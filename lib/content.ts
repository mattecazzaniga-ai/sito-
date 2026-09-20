/**
 * Single source of truth for every editable string on the site.
 *
 * Everything marked "PLACEHOLDER" is not a real, confirmed detail — swap it
 * for the real value as soon as it is known. Nothing here is wired to a
 * backend yet; the shapes below are what the future admin dashboard
 * (see /app/admin) is expected to write to.
 */

export const siteConfig = {
  name: "Aziende in Campo",
  shortName: "AiC",
  tagline: "Dove le aziende scendono in campo.",
  description:
    "Aziende in Campo è l'evento sportivo che porta persone, squadre e aziende fuori dall'ufficio per una giornata di sport, competizione e networking informale.",
  url: "https://www.aziendeincampo.it", // PLACEHOLDER — dominio definitivo
  organizer: "Orisound",
  locale: "it_IT",
};

export const contact = {
  email: "info@aziendeincampo.it", // PLACEHOLDER
  phone: "+39 02 1234 5678", // PLACEHOLDER
  instagram: "https://instagram.com/aziendeincampo", // PLACEHOLDER
  linkedin: "https://linkedin.com/company/aziendeincampo", // PLACEHOLDER
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "L'evento", href: "/#evento" },
  { label: "Come funziona", href: "/#come-funziona" },
  { label: "Aziende", href: "/#aziende" },
  { label: "Sponsor", href: "/#sponsor" },
  { label: "FAQ", href: "/#faq" },
];

export const eventInfo = {
  dateLabel: "Giugno 2026", // PLACEHOLDER — data da confermare
  dateNote: "Data esatta in via di definizione",
  location: "Centro Sportivo, Milano", // PLACEHOLDER
  locationNote: "Location da confermare",
  sport: "Calcio a 7", // PLACEHOLDER — sport principale
  maxParticipants: "120+", // PLACEHOLDER
};

export const heroStats = [
  { value: 16, suffix: "+", label: "Aziende" },
  { value: 120, suffix: "+", label: "Partecipanti" },
  { value: 8, suffix: "", label: "Squadre" },
  { value: 1, suffix: "", label: "Giornata" },
];

export const eventIntro = {
  eyebrow: "Il concept",
  title: "Non è solo una partita.",
  paragraphs: [
    "Aziende in Campo nasce per portare le persone fuori dall'ufficio e dentro una giornata fatta di sport, squadra, competizione e divertimento.",
    "Un format pensato per aziende che vogliono costruire relazioni vere, fuori dai contesti formali, con la stessa energia di un grande evento sportivo.",
  ],
  highlights: [
    { label: "Sport", value: "Vero" },
    { label: "Networking", value: "Informale" },
    { label: "Format", value: "Premium" },
  ],
};

export const howItWorksSteps = [
  {
    number: "01",
    title: "Iscrivi la tua azienda",
    description:
      "Compila il form di iscrizione: bastano pochi minuti per prenotare il posto della tua azienda.",
  },
  {
    number: "02",
    title: "Forma la tua squadra",
    description:
      "Coinvolgi i tuoi colleghi e costruisci la squadra che rappresenterà l'azienda in campo.",
  },
  {
    number: "03",
    title: "Scendi in campo",
    description:
      "Il giorno dell'evento vivi gironi e fasi finali insieme alle altre aziende partecipanti.",
  },
  {
    number: "04",
    title: "Vivi l'evento",
    description:
      "Sport, premiazione e networking informale: la giornata continua ben oltre il fischio finale.",
  },
];

export const formatDetails = {
  sport: "Calcio a 7", // PLACEHOLDER
  playersPerTeam: "7 + panchina", // PLACEHOLDER
  matchDuration: "2 tempi da 12 minuti", // PLACEHOLDER
  teams: "8 squadre aziendali", // PLACEHOLDER
  groupStage: "Fase a gironi, 2 gruppi da 4 squadre", // PLACEHOLDER
  finalStage: "Semifinali + finale 1°-2° e 3°-4° posto", // PLACEHOLDER
  prizes: "Coppa, medaglie e premi per il miglior giocatore", // PLACEHOLDER
  extras: "Area networking, ristoro e musica per tutta la giornata", // PLACEHOLDER
};

export const timeline = [
  { time: "09:00", title: "Check-in", description: "Accredito squadre e welcome kit." },
  { time: "10:00", title: "Inizio", description: "Prima fase a gironi." },
  { time: "13:00", title: "Pausa", description: "Pranzo e networking." },
  { time: "14:30", title: "Fase finale", description: "Semifinali tra le migliori squadre." },
  { time: "17:30", title: "Finali", description: "Finale 3°-4° e finalissima." },
  { time: "18:30", title: "Premiazione", description: "Premi, foto di gruppo e chiusura." },
];

export type Company = {
  name: string;
  sector: string;
};

// PLACEHOLDER — sostituire con le aziende realmente iscritte (nome, settore, logo in /public/logos)
export const companies: Company[] = [
  { name: "Azienda Uno", sector: "Tecnologia" },
  { name: "Azienda Due", sector: "Finanza" },
  { name: "Azienda Tre", sector: "Manifattura" },
  { name: "Azienda Quattro", sector: "Retail" },
  { name: "Azienda Cinque", sector: "Consulenza" },
  { name: "Azienda Sei", sector: "Energia" },
  { name: "Azienda Sette", sector: "Logistica" },
  { name: "Azienda Otto", sector: "Real Estate" },
  { name: "Azienda Nove", sector: "Healthcare" },
  { name: "Azienda Dieci", sector: "Media" },
  { name: "Azienda Undici", sector: "Assicurazioni" },
  { name: "Azienda Dodici", sector: "Food & Beverage" },
];

export type StandingRow = {
  position: number;
  team: string;
  played: number;
  points: number;
};

// PLACEHOLDER — struttura pronta per essere collegata ai risultati reali
export const standings: StandingRow[] = [
  { position: 1, team: "Azienda A", played: 4, points: 12 },
  { position: 2, team: "Azienda B", played: 4, points: 9 },
  { position: 3, team: "Azienda C", played: 4, points: 7 },
  { position: 4, team: "Azienda D", played: 4, points: 6 },
  { position: 5, team: "Azienda E", played: 4, points: 4 },
];

export type SponsorTier = "main" | "gold" | "partner";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
};

// PLACEHOLDER — sostituire con sponsor reali e relativi loghi in /public/logos
export const sponsors: Sponsor[] = [
  { name: "Main Partner", tier: "main" },
  { name: "Gold Partner Uno", tier: "gold" },
  { name: "Gold Partner Due", tier: "gold" },
  { name: "Partner Uno", tier: "partner" },
  { name: "Partner Due", tier: "partner" },
  { name: "Partner Tre", tier: "partner" },
  { name: "Partner Quattro", tier: "partner" },
];

export const faqItems = [
  {
    question: "Chi può partecipare?",
    answer:
      "Qualsiasi azienda può iscrivere una o più squadre: non è richiesto un settore specifico, solo la voglia di scendere in campo.",
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
      "L'iscrizione comprende la partecipazione al torneo, il kit squadra e l'accesso a tutte le attività della giornata. I dettagli definitivi verranno confermati via email.", // PLACEHOLDER
  },
  {
    question: "Dove si svolge l'evento?",
    answer:
      "La location è in fase di conferma: verrà comunicata a tutte le aziende iscritte non appena disponibile.", // PLACEHOLDER
  },
  {
    question: "Come vengono organizzate le partite?",
    answer:
      "Le squadre vengono suddivise in gironi con calendario e orari comunicati in anticipo, seguiti da una fase finale a eliminazione diretta.",
  },
  {
    question: "Ci sono premi?",
    answer:
      "Sì: sono previsti premi per le prime squadre classificate e riconoscimenti individuali. I dettagli finali sono in definizione.", // PLACEHOLDER
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
        { label: "L'evento", href: "/#evento" },
        { label: "Aziende", href: "/#aziende" },
        { label: "Sponsor", href: "/#sponsor" },
        { label: "FAQ", href: "/#faq" },
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
  { label: "Classifica", href: "/admin/classifica" },
  { label: "Sponsor", href: "/admin/sponsor" },
  { label: "Iscrizioni", href: "/admin/iscrizioni" },
  { label: "Comunicazioni", href: "/admin/comunicazioni" },
];
