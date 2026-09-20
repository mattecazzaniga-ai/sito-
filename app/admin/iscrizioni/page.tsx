import { ClipboardList } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminEmptyState } from "@/components/admin/admin-empty-state";

export default function AdminIscrizioniPage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Iscrizioni"
        description="Richieste di iscrizione ricevute dal form pubblico (sezione Iscrizione della home page)."
      />
      <AdminEmptyState
        icon={ClipboardList}
        title="In attesa di persistenza"
        description="Il form pubblico invia già ogni richiesta a POST /api/iscrizioni. Collega quella route a un database per vedere qui l'elenco delle iscrizioni ricevute."
      />
    </div>
  );
}
