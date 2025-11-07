import { QuoteCard } from "../components/QuoteCard";
import { quotes } from "../lib/quotes";

const poems = quotes.filter((quote) => quote.category === "poezi");
const transmissions = quotes.filter((quote) => quote.category === "transmetim");

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-12 sm:py-16">
      <section
        id="poezi"
        className="flex flex-col gap-6 rounded-3xl border border-parchment-dark/70 bg-white/90 p-8 shadow-md"
      >
        <header>
          <p className="text-xs uppercase tracking-[0.32em] text-emerald-700">
            Zëri i poezisë
          </p>
          <h2 className="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            Lotët në vargjet e Ibn Mubarakut
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Poemat e tij i kthejnë sytë tek qëllimi: loti nuk është thjesht
            ndjenjë, por kujtesë e përhershme se njeriu është udhëtar dhe duhet
            të përgatitet për takimin me Zotin.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {poems.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      </section>

      <section
        id="transmetime"
        className="flex flex-col gap-6 rounded-3xl border border-parchment-dark/70 bg-white/90 p-8 shadow-md"
      >
        <header>
          <p className="text-xs uppercase tracking-[0.32em] text-emerald-700">
            Zëri i rrëfimeve
          </p>
          <h2 className="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            Lotët në mësimet e “Kitāb al-Zuhd”
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Ibn Mubarak mblodhi fjalë të hershme që dritësojnë zemrën. Më
            poshtë janë pasazhe kyçe që flasin për dijen që të bën të qash,
            frikën që e mban syrin të lagur dhe lutjet që kërkojnë lotë si
            mëshirë.
          </p>
        </header>
        <div className="flex flex-col gap-6">
          {transmissions.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      </section>

      <section
        id="burime"
        className="rounded-3xl border border-parchment-dark/60 bg-parchment p-8 text-sm text-slate-700 shadow-inner"
      >
        <h2 className="font-serif text-2xl font-semibold text-slate-900">
          Burime & Metodologji
        </h2>
        <ul className="mt-4 space-y-3">
          <li>
            <span className="font-semibold text-slate-800">
              Teksti bazë i poezive:
            </span>{" "}
            Dorëshkrimi i Dīwān-it sipas botimit{" "}
            <a
              className="text-emerald-800 underline underline-offset-4"
              href="https://github.com/OpenITI/0200AH/blob/master/data/0181IbnMubarak/0181IbnMubarak.Diwan/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenITI (JK007552)
            </a>
            . Transliteration dhe përkthim i lirë në shqip për të ruajtur tonin
            hyjnor të vargjeve.
          </li>
          <li>
            <span className="font-semibold text-slate-800">
              Transmetimet nga “Kitāb al-Zuhd wa’l-Raqā’iq”:
            </span>{" "}
            Versioni i digjitalizuar Shamela (0013028) në bibliotekën{" "}
            <a
              className="text-emerald-800 underline underline-offset-4"
              href="https://github.com/OpenITI/0200AH/blob/master/data/0181IbnMubarak/0181IbnMubarak.Zuhd/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenITI
            </a>
            . Numrat e transmetimeve janë renditur sipas kapitullit “باب ما جاء
            في الحزن والبكاء”.
          </li>
          <li>
            <span className="font-semibold text-slate-800">
              Përkthimi & përmbledhjet:
            </span>{" "}
            Të gjitha përkthimet në shqip janë punuar enkas për këtë faqe, duke
            mbajtur kuptimin literal dhe frymën shpirtërore të burimeve arabe.
          </li>
        </ul>
      </section>
    </div>
  );
}
