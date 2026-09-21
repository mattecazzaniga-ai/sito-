# Aziende in Campo

Sito ufficiale di **Aziende in Campo**, il torneo di calcio a 5 tra aziende e realtà del territorio di Oristano. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Sviluppo

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build di produzione
npm run lint    # ESLint
```

## Struttura del sito

- `/` — home: hero, cos'è il torneo, numeri, valori, perché partecipare, testimonianze, aziende partecipanti, come funziona, format, sponsor, iscrizione, FAQ.
- `/storia` — pagina dedicata alla storia del progetto (timeline edizioni). Contenuto narrativo esteso in arrivo.
- `/albo-doro` — pagina dedicata a vincitori e premi individuali di ogni edizione, con CTA finale verso l'iscrizione.
- `/contatti`, `/privacy-policy`, `/cookie-policy` — pagine di servizio.

## Contenuti da sostituire prima del lancio

Tutti i testi/dati editabili sono centralizzati in **`lib/content.ts`**. Cerca i commenti `PLACEHOLDER` per trovare rapidamente cosa manca:

- Data e location della prossima edizione (`eventInfo`)
- Dettagli non ancora ufficiali del format (regolamento, durata partite) (`formatDetails`)
- Punteggio esatto della finale 2025 (`hallOfFame`, campo `score` mancante per quell'edizione)
- Sponsor e relativo livello (`sponsors`)
- Testimonianze reali (`testimonials`, oggi vuoto — la sezione mostra un placeholder "in arrivo" finché resta vuoto)
- Contatti (email, telefono, social) (`contact`)
- Risposte FAQ con prezzo/location non ancora confermati
- Dominio definitivo (`siteConfig.url`, usato anche per la sitemap e i meta Open Graph)

`impactStats` (edizioni disputate, atleti, presenze, aziende coinvolte) sono numeri reali forniti dall'organizzatore, non stime: aggiornarli a ogni nuova edizione.

### Dati storici: accuratezza prima di tutto

`participants` (chi è già sceso in campo), `hallOfFame` (albo d'oro) e `individualAwards` (premi individuali) sono **fatti reali**, non segnaposto. Ogni voce riporta in commento la fonte usata per verificarla. Prima di modificarli:

- non aggiungere un nome, un risultato o un premio senza una fonte attendibile (articolo di stampa locale o conferma diretta dell'organizzazione);
- non mostrare classifiche complete, secondi/terzi posti o numero di squadre per edizione — per scelta editoriale il sito mostra solo il vincitore di ogni edizione verificata;
- se un dato non è verificato, lascia `verified: false` (Albo d'oro) o ometti la voce piuttosto che inventarla.

Le foto/video sono al momento placeholder generati via CSS (componente `PlaceholderVisual`, riconoscibile dalla piccola etichetta nell'angolo). Sostituiscili con asset reali in `public/` e usa `next/image` o `<video>` al loro posto — idealmente foto/azione di calcio a 5, non calcio a 11 generico.

## Form e backend

- `POST /api/iscrizioni` — form di iscrizione (home, sezione "Iscrizione"). Valida i campi e risponde `{ ok: true }`, ma **non salva ancora nulla**: vedi il TODO nel file per collegare un database/CRM e l'invio email.
- `POST /api/contatti` — form contatti/partnership (`/contatti`). Stessa logica.

## Area organizzatore (`/app/admin`)

Scaffold dell'architettura per la futura dashboard privata (Overview, Aziende, Partecipanti, Squadre, Partite, Risultati, Albo d'oro, Sponsor, Iscrizioni, Comunicazioni). **Non è ancora protetta da autenticazione** ed è esclusa da robots.txt: prima di andare in produzione va aggiunta autenticazione reale (middleware + provider auth) e collegato un database.

## Deploy

Pensato per Vercel: `vercel deploy` o collegando il repository dalla dashboard Vercel. Nessuna variabile d'ambiente richiesta per il funzionamento base.
