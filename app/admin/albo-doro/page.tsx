import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { hallOfFame, individualAwards } from "@/lib/content";

export default function AdminAlboDoroPage() {
  return (
    <div className="flex flex-col gap-10">
      <AdminPageHeader
        title="Albo d'oro"
        description="Solo vincitori e premi individuali verificati da fonte attendibile. Non aggiungere un risultato senza una fonte chiara."
      />

      <div>
        <h2 className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Vincitori per edizione
        </h2>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">Anno</th>
                <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">Vincitore</th>
                <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">Verificato</th>
              </tr>
            </thead>
            <tbody>
              {hallOfFame.map((entry) => (
                <tr key={entry.year} className="border-b border-neutral-100 last:border-0">
                  <td className="px-5 py-3 font-medium text-ink">{entry.year}</td>
                  <td className="px-5 py-3 text-neutral-700">{entry.verified ? entry.winner : "Da inserire"}</td>
                  <td className="px-5 py-3 text-neutral-600">{entry.verified ? "Sì" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Premi individuali
        </h2>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">Anno</th>
                <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">Premio</th>
                <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-neutral-500">Nome</th>
              </tr>
            </thead>
            <tbody>
              {individualAwards.map((award) => (
                <tr key={`${award.year}-${award.award}`} className="border-b border-neutral-100 last:border-0">
                  <td className="px-5 py-3 font-medium text-ink">{award.year}</td>
                  <td className="px-5 py-3 text-neutral-700">{award.award}</td>
                  <td className="px-5 py-3 text-neutral-600">{award.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
