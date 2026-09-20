import { Users } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminEmptyState } from "@/components/admin/admin-empty-state";

export default function AdminPartecipantiPage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Partecipanti"
        description="Elenco dei singoli partecipanti collegati a ciascuna azienda/squadra."
      />
      <AdminEmptyState
        icon={Users}
        title="Nessun dato ancora collegato"
        description="Questa vista è pronta per elencare i partecipanti non appena verrà collegato un database (uno-a-molti con Aziende/Squadre)."
      />
    </div>
  );
}
