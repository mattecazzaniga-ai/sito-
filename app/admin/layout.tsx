import type { Metadata } from "next";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

/**
 * Scaffold for the future organizer dashboard. There is no authentication
 * yet — before shipping this to production, gate the whole /admin segment
 * behind real auth (middleware.ts + a session check) and wire each page to
 * its data source.
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh bg-neutral-100">
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 px-5 py-8 sm:px-8 lg:px-10">{children}</main>
      </div>
    </div>
  );
}
