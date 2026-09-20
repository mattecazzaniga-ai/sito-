import { UsersRound } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminEmptyState } from "@/components/admin/admin-empty-state";

export default function AdminSquadrePage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Squadre"
        description="Squadre formate da ciascuna azienda partecipante, con rosa giocatori e girone assegnato."
      />
      <AdminEmptyState
        icon={UsersRound}
        title="Nessuna squadra ancora collegata"
        description="Quando sarà disponibile un database, questa vista permetterà di creare squadre, assegnare i gironi e gestire le rose."
      />
    </div>
  );
}
