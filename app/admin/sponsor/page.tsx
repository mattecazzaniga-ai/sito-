import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { sponsors } from "@/lib/content";

const tierLabel = { main: "Main Partner", gold: "Gold Partner", partner: "Partner" };

export default function AdminSponsorPage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminPageHeader
        title="Sponsor"
        description="Elenco in sola lettura, letto da lib/content.ts. Collegare al database per gestire loghi e livelli da qui."
      />

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Sponsor
              </th>
              <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Livello
              </th>
            </tr>
          </thead>
          <tbody>
            {sponsors.map((sponsor) => (
              <tr key={sponsor.name} className="border-b border-neutral-100 last:border-0">
                <td className="px-5 py-3 font-medium text-ink">{sponsor.name}</td>
                <td className="px-5 py-3 text-neutral-600">{tierLabel[sponsor.tier]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
