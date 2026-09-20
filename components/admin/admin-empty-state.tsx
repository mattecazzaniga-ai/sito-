import type { LucideIcon } from "lucide-react";
import { Construction } from "lucide-react";

export function AdminEmptyState({
  icon: Icon = Construction,
  title,
  description,
}: {
  icon?: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-16 text-center">
      <Icon className="h-8 w-8 text-neutral-400" strokeWidth={1.5} aria-hidden="true" />
      <p className="font-display text-base font-semibold uppercase tracking-wide text-neutral-600">{title}</p>
      <p className="max-w-sm text-sm text-neutral-500">{description}</p>
    </div>
  );
}
