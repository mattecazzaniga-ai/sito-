import { Mail } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminEmptyState } from "@/components/admin/admin-empty-state";

export default function AdminComunicazioniPage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Comunicazioni"
        description="Invio di email/aggiornamenti alle aziende iscritte (es. conferma iscrizione, orari, promemoria)."
      />
      <AdminEmptyState
        icon={Mail}
        title="Nessun canale collegato"
        description="Questa sezione è pronta per integrare un provider email (transazionale o newsletter) quando le iscrizioni saranno persistite."
      />
    </div>
  );
}
