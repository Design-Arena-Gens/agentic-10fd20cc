import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
  title: "Lotët e Abdullah ibn Mubarakut",
  description:
    "Përzgjedhje fjalësh dhe poezi nga Abdullah ibn Mubarak rreth lotëve, qarjes dhe butësisë së zemrës."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-parchment-light text-slate-900 antialiased">
        <header className="border-b border-parchment-dark/70 bg-parchment">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="font-serif text-3xl font-semibold tracking-wide text-slate-800 sm:text-4xl">
                Fjalë për Lotin & Qarjen
              </p>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                Abdullah ibn Mubarak (181H) – përmes vargjeve dhe transmetimeve
                që theksojnë lotin nga frika e Allahut dhe butësinë e zemrës.
              </p>
            </div>
            <nav className="flex items-center justify-center gap-4 text-sm font-medium text-slate-700">
              <Link href="#poezi" className="transition hover:text-slate-900">
                Poezi
              </Link>
              <Link
                href="#transmetime"
                className="transition hover:text-slate-900"
              >
                Transmetime
              </Link>
              <Link href="#burime" className="transition hover:text-slate-900">
                Burime
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-parchment-dark/70 bg-parchment px-6 py-6 text-center text-xs text-slate-600">
          Përgatitur me kujdes duke u mbështetur në dorëshkrimet e trashëguara
          të Ibn Mubarakut. © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
