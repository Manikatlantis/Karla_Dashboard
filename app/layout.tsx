import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty Appreciation & Recommendation Portal",
  description: "A public, positive, appreciation-based academic portal."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <header className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                Faculty Appreciation & Recommendation Portal
              </h1>
              <p className="text-sm text-neutral-400">
                A moderated space for professional appreciation and support.
              </p>
            </div>

            <nav className="flex gap-4 text-sm text-neutral-300">
              <a className="hover:text-white" href="/">Home</a>
              <a className="hover:text-white" href="/about">About</a>
              <a className="hover:text-white" href="/wall">Appreciation Wall</a>
              <a className="hover:text-white" href="/submit">Submit</a>
              <a className="hover:text-white" href="/admin">Admin</a>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="mt-12 border-t border-white/10 pt-6 text-xs text-neutral-400">
            This portal does not support ratings, rankings, or negative reviews. Submissions are moderated.
          </footer>
        </div>
      </body>
    </html>
  );
}
