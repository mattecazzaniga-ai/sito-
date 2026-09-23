import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { participants } from "@/lib/content";

export default function AdminAziendePage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Aziende"
        description="Realtà che hanno già partecipato ad Aziende in Campo, in sola lettura da lib/content.ts. Verificare la fonte prima di aggiungere o rimuovere un nome."
      />

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Azienda / realtà
              </th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant) => (
              <tr key={participant.name} className="border-b border-neutral-100 last:border-0">
                <td className="px-5 py-3 font-medium text-ink">{participant.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
