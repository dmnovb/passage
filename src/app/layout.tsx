import type { Metadata } from "next";
import "./globals.css";
import Sidemenu from "@/components/layout/sidemenu";

export const metadata: Metadata = {
  title: "Passage",
  description: "Find bible passages by tranquil categories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarWidth = "280px";
  return (
    <html lang="en">
      <body className="rhythm">
        <div className="min-h-screen">
          <aside
            className="glass rounded-none  p-6 fixed inset-y-0 left-0 hidden md:block overflow-auto"
            style={{ width: sidebarWidth }}
          >
            <div className="sticky top-6">
              <Sidemenu />
            </div>
          </aside>

          <div className="mx-auto max-w-7xl px-6 py-10" style={{ paddingLeft: `calc(1.5rem + ${sidebarWidth})` }}>
            <main className="rounded-xl p-2">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
