import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { companies } from "@/lib/content";

export default function AdminAziendePage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Aziende"
        description="Elenco in sola lettura, letto da lib/content.ts. Collegare al database per rendere questa tabella modificabile."
      />

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Azienda
              </th>
              <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Settore
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.name} className="border-b border-neutral-100 last:border-0">
                <td className="px-5 py-3 font-medium text-ink">{company.name}</td>
                <td className="px-5 py-3 text-neutral-600">{company.sector}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
