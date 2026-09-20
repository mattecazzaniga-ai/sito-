import { Swords } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminEmptyState } from "@/components/admin/admin-empty-state";

export default function AdminPartitePage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Partite"
        description="Calendario di gironi e fase finale, con orari, campo e punteggio di ogni incontro."
      />
      <AdminEmptyState
        icon={Swords}
        title="Nessuna partita ancora programmata"
        description="Questa vista è pronta per generare e gestire il calendario partite non appena squadre e gironi saranno definiti a database."
      />
    </div>
  );
}
