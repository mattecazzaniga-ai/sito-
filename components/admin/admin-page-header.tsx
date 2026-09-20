import type { ReactNode } from "react";

export function AdminPageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-neutral-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-2xl font-bold uppercase text-ink sm:text-3xl">{title}</h1>
        {description ? <p className="mt-1 max-w-xl text-sm text-neutral-500">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
