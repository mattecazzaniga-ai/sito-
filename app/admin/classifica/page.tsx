import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { standings } from "@/lib/content";

export default function AdminClassificaPage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Classifica"
        description="Dati di esempio, letti da lib/content.ts. In produzione questa vista leggerà (e permetterà di correggere) i risultati calcolati dalle partite."
      />

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">Pos.</th>
              <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">Squadra</th>
              <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">Giocate</th>
              <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">Punti</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row) => (
              <tr key={row.team} className="border-b border-neutral-100 last:border-0">
                <td className="px-5 py-3 font-medium text-ink">{row.position}</td>
                <td className="px-5 py-3 text-neutral-700">{row.team}</td>
                <td className="px-5 py-3 text-neutral-600">{row.played}</td>
                <td className="px-5 py-3 font-semibold text-ink">{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
