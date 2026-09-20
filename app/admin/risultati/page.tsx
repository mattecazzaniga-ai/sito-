import { Trophy } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminEmptyState } from "@/components/admin/admin-empty-state";

export default function AdminRisultatiPage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Risultati"
        description="Inserimento dei risultati partita per partita: da qui la classifica si aggiornerebbe automaticamente."
      />
      <AdminEmptyState
        icon={Trophy}
        title="Nessun risultato ancora registrato"
        description="Una volta collegato il database, i risultati inseriti qui aggiorneranno automaticamente la pagina Classifica."
      />
    </div>
  );
}
