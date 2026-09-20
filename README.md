# Aziende in Campo

Sito ufficiale dell'evento sportivo aziendale **Aziende in Campo**. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

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

## Contenuti da sostituire prima del lancio

Tutti i testi/dati editabili sono centralizzati in **`lib/content.ts`**. Cerca i commenti `PLACEHOLDER` per trovare rapidamente cosa manca:

- Data, location, sport e numero massimo partecipanti (`eventInfo`)
- Dettagli del format (sport, durata partite, gironi, premi) (`formatDetails`)
- Aziende partecipanti e loro settore/logo (`companies`)
- Classifica di esempio (`standings`)
- Sponsor e relativo livello (`sponsors`)
- Contatti (email, telefono, social) (`contact`)
- Risposte FAQ con prezzo/location non ancora confermati
- Dominio definitivo (`siteConfig.url`, usato anche per la sitemap e i meta Open Graph)

Le foto/video sono al momento placeholder generati via CSS (componente `PlaceholderVisual`, riconoscibile dalla piccola etichetta nell'angolo). Sostituiscili con asset reali in `public/` e usa `next/image` o `<video>` al loro posto.

I loghi aziende/sponsor sono iniziali generate (`CompanyMark`) — sostituiscili con i loghi reali quando disponibili.

## Form e backend

- `POST /api/iscrizioni` — form di iscrizione (home, sezione "Iscrizione"). Valida i campi e risponde `{ ok: true }`, ma **non salva ancora nulla**: vedi il TODO nel file per collegare un database/CRM e l'invio email.
- `POST /api/contatti` — form contatti/partnership (`/contatti`). Stessa logica.

## Area organizzatore (`/app/admin`)

Scaffold dell'architettura per la futura dashboard privata (Overview, Aziende, Partecipanti, Squadre, Partite, Risultati, Classifica, Sponsor, Iscrizioni, Comunicazioni). **Non è ancora protetta da autenticazione** ed è esclusa da robots.txt: prima di andare in produzione va aggiunta autenticazione reale (middleware + provider auth) e collegato un database.

## Deploy

Pensato per Vercel: `vercel deploy` o collegando il repository dalla dashboard Vercel. Nessuna variabile d'ambiente richiesta per il funzionamento base.
