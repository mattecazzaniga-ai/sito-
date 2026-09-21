import { Building2, ClipboardList, Handshake, Trophy } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminStatCard } from "@/components/admin/admin-stat-card";
import { hallOfFame, participants, sponsors } from "@/lib/content";

export default function AdminOverviewPage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Overview"
        description="Riepilogo dei dati attualmente presenti nel sito. Collegare a un database reale per renderli modificabili da qui."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AdminStatCard icon={Building2} label="Aziende partecipanti" value={participants.length} />
        <AdminStatCard icon={Trophy} label="Edizioni in albo d'oro" value={hallOfFame.length} />
        <AdminStatCard icon={Handshake} label="Sponsor" value={sponsors.length} />
        <AdminStatCard icon={ClipboardList} label="Iscrizioni ricevute" value="—" />
      </div>

      <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-6 text-sm text-neutral-600">
        <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
          Prossimi passi per rendere questa dashboard operativa
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Aggiungere autenticazione (es. middleware + provider auth) per proteggere /admin.</li>
          <li>Collegare un database (aziende, squadre, partite, risultati, iscrizioni, sponsor).</li>
          <li>Sostituire i dati statici in <code className="rounded bg-neutral-100 px-1">lib/content.ts</code> con query al database.</li>
          <li>Collegare gli endpoint <code className="rounded bg-neutral-100 px-1">/api/iscrizioni</code> e <code className="rounded bg-neutral-100 px-1">/api/contatti</code> alla persistenza reale.</li>
          <li>Verificare ogni fatto storico (Albo d&rsquo;oro, premi individuali, partecipanti) prima di pubblicarlo: sono dati reali, non segnaposto.</li>
        </ul>
      </div>
    </div>
  );
}
