# Aziende in Campo — Linee guida di brand v1.0

Riferimento unico per chi scrive o modifica il sito, i social e le comunicazioni. I testi del sito vivono
in `lib/content.ts`; i colori e i font in `app/globals.css`.

## Quick reference

- **Verde brand:** `#147333` (CTA, accenti) · **Navy brand:** `#273460` (testo, sezioni scure)
- **Font:** Barlow Condensed (titoli, maiuscolo) · Barlow (testo)
- **Voce:** energica · concreta · accogliente · del territorio
- **Si dà del tu** al lettore (referente aziendale, HR, titolare).

## 1. Posizionamento

**Chi siamo in una frase:** il torneo di calcio a 5 tra aziende del territorio di Oristano, organizzato da Orisound.

**Proposta di valore**
> Per le aziende che vogliono unire il proprio team e farsi conoscere sul territorio, Aziende in Campo è
> la giornata di calcio a 5 in cui i colleghi diventano una squadra. A differenza del team building
> tradizionale, si gioca davvero: gironi, finale, premiazione, contro le altre aziende della zona.

**Messaggi chiave (in ordine di priorità)**

| Messaggio | Bisogno del lettore | Prova |
|---|---|---|
| Il team building che si gioca davvero | Unire i colleghi fuori dall'ufficio | Format a gironi + eliminazione diretta, pausa pranzo condivisa |
| Networking tra aziende, senza formalità | Conoscere altre realtà del territorio | 10 aziende coinvolte in 2 edizioni |
| Una giornata che resta | Motivazione, orgoglio, contenuti | Copertura foto/video ufficiale, premiazione, 500+ presenze |
| Aperto a tutti, non serve essere sportivi | "Non siamo atleti" | Squadre da 5 a 12, conta lo spirito di gruppo |

**Pitch da 10 secondi:** «Aziende in Campo è il torneo di calcio a 5 tra aziende di Oristano: una giornata in cui i tuoi colleghi diventano una squadra.»

## 2. Voce

| Tratto | Siamo | Non siamo | Suona così | Non suona così |
|---|---|---|---|---|
| **Energica** | ritmo, verbi d'azione, frasi brevi | urlata, piena di punti esclamativi | «Scendi in campo con la tua azienda.» | «FANTASTICO!!! Non perdere l'evento dell'anno!!!» |
| **Concreta** | fatti, numeri verificati, dettagli utili | vaga o autocelebrativa | «Da 5 a 12 giocatori, più 2 accompagnatori.» | «Un'esperienza unica e indimenticabile.» |
| **Accogliente** | inclusiva, rassicurante | elitaria o agonistica | «Non serve essere sportivi: conta la squadra.» | «Solo per veri campioni.» |
| **Del territorio** | Oristano, aziende locali, comunità | generica, corporate | «Le aziende del territorio si incontrano in campo.» | «Leader nel settore degli eventi corporate.» |

**Tono per contesto:** sito e CTA → energico e diretto · FAQ e form → chiaro e rassicurante · storia → narrativo ·
albo d'oro → celebrativo ma sobrio · privacy/cookie → formale.

## 3. Regole di stile

- **Tu**, mai voi, nei testi rivolti al lettore («la tua azienda», «scrivici»).
- **Titoli di sezione:** frase breve che termina con il **punto** («Come funziona.»). Il maiuscolo lo applica il CSS: nel testo sorgente si scrive in minuscolo normale.
- **Eyebrow** (occhiello sopra il titolo): 1–3 parole, senza punto.
- **CTA:** verbo all'imperativo + oggetto. Primaria sempre **«Iscrivi la tua azienda»**; secondaria partnership sempre **«Diventa partner»**. Una sola CTA primaria per blocco.
- **Numeri:** in cifre per dati e statistiche (10 aziende, 500+ presenze); date per esteso («3 maggio 2026»).
- **Punteggiatura:** al massimo un punto esclamativo per pagina; niente puntini di sospensione nei titoli; trattino lungo ( — ) con spazi.
- **Niente superlativi non dimostrabili** («il migliore», «l'unico»): vale solo ciò che si può provare.

## 4. Terminologia

| Usa | Non usare | Note |
|---|---|---|
| calcio a 5 | calcetto, futsal | «calcetto» solo come parola chiave SEO nei meta |
| torneo / giornata / edizione | evento corporate, manifestazione | «giornata» per l'esperienza, «edizione» per l'anno |
| squadra | team (nei titoli) | «team building» resta in inglese |
| partner | sponsor | «sponsor» solo in FAQ e form, accanto a «partner» |
| iscrizione / iscrivi | registrazione, registrati | |
| Aziende in Campo | AIC, Aziende In Campo | «in» minuscolo nel testo; il logotipo è a parte |
| MC Sport, via Ghilarza 1, Oristano | | nome completo della sede |

## 5. Dati e verità

I dati storici (albo d'oro, premi, partecipanti, numeri) sono **fatti verificati**: non si aggiunge nulla senza
fonte. Le testimonianze si riportano **alla lettera**, in forma anonima. La narrazione di `/storia` è testo
dell'organizzatore: non va parafrasata. Ciò che non è confermato (data, prezzo, regolamento) resta segnato
come `PLACEHOLDER` in `lib/content.ts` e sul sito si comunica come «in arrivo».

## 6. Sistema visivo

- **Ritmo delle sezioni in home:** si alternano bianco → grigio chiaro (`neutral-100`) → bianco, con le bande navy (`ink`) come punteggiatura. Mai due sezioni consecutive con lo stesso sfondo.
- **Card:** `rounded-3xl`, bordo `neutral-200`, padding 7–8, sfondo bianco; l'hover solleva di 4–6 px solo se la card è interattiva o informativa.
- **Icone:** Lucide, tratto 1.75, dentro il badge verde (`IconBadge`).
- **Occhiello:** pallino verde + testo verde maiuscolo spaziato (`Eyebrow`), identico in tutte le pagine.
- **Intestazioni di pagina interne:** componente `PageHeader` (stessi margini, occhiello, titolo, sottotitolo).
- **Foto:** reali, di azione di calcio a 5, angoli `rounded-3xl`; niente foto di stock.
