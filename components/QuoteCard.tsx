"use client";

import { useState } from "react";
import type { Quote } from "../lib/quotes";

interface QuoteCardProps {
  quote: Quote;
}

export function QuoteCard({ quote }: QuoteCardProps) {
  const [showArabic, setShowArabic] = useState(false);

  return (
    <article className="group flex flex-col gap-4 rounded-2xl border border-parchment-dark/60 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-emerald-700">
            {quote.category === "poezi" ? "Poezi" : "Transmetim"}
          </p>
          <h3 className="font-serif text-2xl font-semibold text-slate-800">
            {quote.source.work}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setShowArabic((prev) => !prev)}
          className="self-start rounded-full border border-emerald-700/30 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-800 transition hover:border-emerald-700 hover:bg-emerald-700 hover:text-white"
        >
          {showArabic ? "Fshih arabishten" : "Shfaq arabishten"}
        </button>
      </header>

      <p className="text-base leading-relaxed text-slate-700">{quote.albanian}</p>
      <p className="text-sm italic text-emerald-900/80">{quote.insight}</p>

      {showArabic && (
        <blockquote className="parchment-edge rounded-xl bg-parchment-dark/20 p-4 text-right font-serif text-lg leading-loose text-slate-800 shadow-inner">
          {quote.arabic.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </blockquote>
      )}

      <footer className="flex flex-col gap-1 border-t border-parchment-dark/40 pt-3 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <span>{quote.source.entry}</span>
        <a
          href={quote.source.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-emerald-800 transition hover:text-emerald-600"
        >
          Teksti origjinal →
        </a>
      </footer>
    </article>
  );
}
