import { useState } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  TrendingUp,
  Wallet,
  ShieldCheck,
  GraduationCap,
  BarChart3,
  PieChart,
  Calculator,
  Bell,
  Search,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Landmark,
  BookOpen,
  LineChart,
  Menu,
  X,
} from "lucide-react";

const farben = {
  navy: "#143C78",
  navyDark: "#0D2D5A",
  navySoft: "#1C4E95",
  gold: "#F4C64E",
  green: "#27C26C",
  light: "#F4F7FB",
  text: "#1F2A44",
};

const marktDaten = [
  { name: "Apple Inc.", ticker: "AAPL", preis: "145,25 €", change: "+1,52%" },
  { name: "Tesla Inc.", ticker: "TSLA", preis: "720,58 €", change: "-0,18%" },
  { name: "S&P 500", ticker: "SPX", preis: "3.255,50 €", change: "+0,76%" },
  { name: "Bitcoin", ticker: "BTC", preis: "62.480,00 €", change: "+2,31%" },
];

const lernKarten = [
  "Investieren für Einsteiger",
  "Strategien zur Marktanalyse",
  "Risiken im Portfolio verwalten",
];

function Layout({ aktuelleSeite, setAktuelleSeite, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    ["Dashboard", "dashboard"],
    ["Märkte", "maerkte"],
    ["Portfolio", "portfolio"],
    ["Tools", "tools"],
    ["Bildung", "bildung"],
    ["Mitgliedschaft", "mitgliedschaft"],
    ["Kontakt", "kontakt"],
    ["Admin", "admin"],
    ["Login", "login"],
    ["Registrieren", "registrieren"],
  ];

  return (
    <div className="min-h-screen" style={{ background: farben.light, color: farben.text }}>
      <header className="sticky top-0 z-50 border-b border-white/10 shadow-lg" style={{ background: `linear-gradient(90deg, ${farben.navyDark}, ${farben.navy})` }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <button className="flex items-center gap-3" onClick={() => setAktuelleSeite("dashboard")}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-lg">
              <Crown className="h-5 w-5" />
            </div>
            <div className="text-left text-white">
              <div className="text-lg font-extrabold tracking-wide">ATHENA FINANCE</div>
              <div className="text-xs text-white/65">Intelligenter investieren</div>
            </div>
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.slice(0, 8).map(([label, key]) => (
              <button
                key={key}
                onClick={() => setAktuelleSeite(key)}
                className={`text-sm font-medium transition ${aktuelleSeite === key ? "text-white" : "text-white/75 hover:text-white"}`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button onClick={() => setAktuelleSeite("login")} className="rounded-xl px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10">Login</button>
            <button onClick={() => setAktuelleSeite("registrieren")} className="rounded-xl px-4 py-2 text-sm font-semibold shadow-lg" style={{ background: farben.gold, color: farben.navyDark }}>Registrieren</button>
          </div>

          <button className="rounded-xl p-2 text-white md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#12386f] px-4 py-3 md:hidden">
            <div className="grid gap-2">
              {navigation.map(([label, key]) => (
                <button
                  key={key}
                  onClick={() => {
                    setAktuelleSeite(key);
                    setMobileOpen(false);
                  }}
                  className="rounded-xl px-3 py-2 text-left text-sm text-white/85 hover:bg-white/10"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {children}

      <footer className="mt-10 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Athena Finance</div>
          <div className="flex flex-wrap gap-5">
            <a href="#">AGB</a>
            <a href="#">Datenschutz</a>
            <a href="#">Risikohinweis</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(90deg, ${farben.navyDark}, ${farben.navy}, ${farben.navySoft})` }}>
      <div className="absolute inset-0 opacity-25">
        <svg viewBox="0 0 1200 420" className="h-full w-full">
          <path d="M0 280 C120 260, 160 180, 240 205 S360 305, 430 220 S560 90, 640 130 S730 245, 820 160 S960 40, 1040 95 S1140 190, 1200 55" fill="none" stroke="rgba(39,194,108,.95)" strokeWidth="6" />
          <path d="M0 330 C120 300, 220 305, 320 250 S520 205, 620 260 S820 345, 920 255 S1080 220, 1200 285" fill="none" stroke="rgba(120,190,255,.9)" strokeWidth="3" />
          {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={i * 100} y1={0} x2={i * 100} y2={420} stroke="rgba(255,255,255,.08)" />)}
          {Array.from({ length: 6 }).map((_, i) => <line key={i} x1={0} y1={i * 70} x2={1200} y2={i * 70} stroke="rgba(255,255,255,.08)" />)}
        </svg>
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
        <div className="max-w-2xl text-white">
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold leading-tight md:text-5xl">
            Clever investieren,
            <br />
            Vermögen aufbauen
          </motion.h1>
          <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
            Behalte deine Anlagen im Blick und erreiche deine finanziellen Ziele mit klaren Analysen, starken Tools und einem modernen Dashboard.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-xl px-6 py-3 text-base font-semibold text-white shadow-xl" style={{ background: farben.green }}>Jetzt starten</button>
            <button className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm">Märkte ansehen</button>
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
          <div className="rounded-[24px] border border-white/10 bg-slate-950/20 p-4">
            <div className="mb-3 text-sm font-medium text-white/80">Live-Performance</div>
            <div className="h-64 rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-2">
              <svg viewBox="0 0 500 220" className="h-full w-full">
                {[40, 90, 140, 190].map((y, i) => <line key={i} x1={0} y1={y} x2={500} y2={y} stroke="rgba(255,255,255,.08)" />)}
                {[50, 120, 190, 260, 330, 400, 470].map((x, i) => <line key={i} x1={x} y1={0} x2={x} y2={220} stroke="rgba(255,255,255,.06)" />)}
                <path d="M20 170 L70 150 L110 160 L145 130 L190 145 L230 95 L275 115 L315 90 L360 105 L405 50 L450 65 L485 20" fill="none" stroke="#27C26C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0 190 C70 175, 140 200, 220 170 S350 160, 500 180" fill="none" stroke="rgba(120,190,255,.9)" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatistikKarten() {
  const stats = [
    ["Portfolio-Wert", "56.750,00 €", "+7,8%"],
    ["Tagesgewinn/-verlust", "+850,00 €", "Live"],
    ["Aktien", "25.400,00 €", "Anlagen"],
    ["Krypto", "12.300,00 €", "+5,6%"],
  ];

  return (
    <section className="mx-auto -mt-8 max-w-7xl px-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value, change]) => (
          <motion.div key={label} whileHover={{ y: -4 }} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-500">{label}</div>
            <div className="mt-2 flex items-end gap-2">
              <div className="text-3xl font-bold text-slate-900">{value}</div>
              <div className="pb-1 text-sm font-semibold" style={{ color: farben.green }}>{change}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Bereich({ title, action, children }) {
  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        {action && <button className="text-sm font-medium text-slate-500">{action}</button>}
      </div>
      {children}
    </section>
  );
}

function DashboardSeite({ goTo }) {
  return (
    <>
      <Hero />
      <StatistikKarten />
      <main className="mx-auto mt-6 max-w-7xl space-y-6 px-6 pb-12">
        <Bereich title="Marktübersicht">
          <div className="grid gap-4 lg:grid-cols-4">
            {marktDaten.map((item) => (
              <div key={item.ticker} className="rounded-[22px] border border-slate-200 p-4 transition hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.ticker}</div>
                  </div>
                  <LineChart className="h-6 w-6" style={{ color: farben.navy }} />
                </div>
                <div className="mt-4 text-xl font-bold">{item.preis}</div>
                <div className={`text-sm font-semibold ${item.change.startsWith("-") ? "text-red-500" : "text-emerald-600"}`}>{item.change}</div>
              </div>
            ))}
          </div>
        </Bereich>

        <div className="grid gap-6 lg:grid-cols-2">
          <Bereich title="Investment-Tools" action="Mehr">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Calculator, "ROI-Rechner"],
                [ShieldCheck, "Risikoanalyse"],
                [PieChart, "Zinseszins"],
                [CreditCard, "Budgetplaner"],
              ].map(([Icon, label]) => (
                <button key={label} onClick={() => goTo("tools")} className="flex items-center gap-4 rounded-[22px] border border-slate-200 p-4 text-left hover:bg-slate-50">
                  <div className="rounded-2xl p-3" style={{ background: "#FFF5D9", color: farben.navy }}><Icon className="h-6 w-6" /></div>
                  <div className="font-semibold">{label}</div>
                </button>
              ))}
            </div>
          </Bereich>

          <Bereich title="Lernen & Wachsen">
            <div className="grid gap-4">
              {lernKarten.map((title, i) => (
                <button key={title} onClick={() => goTo("bildung")} className="overflow-hidden rounded-[22px] border border-slate-200 text-left shadow-sm">
                  <div className="h-28 p-4 text-white" style={{ background: `linear-gradient(135deg, ${farben.navySoft}, ${farben.navyDark})` }}>
                    <div className="text-xs uppercase tracking-[0.18em] text-white/70">Leitfaden {i + 1}</div>
                    <div className="mt-2 text-lg font-semibold">{title}</div>
                  </div>
                </button>
              ))}
            </div>
          </Bereich>
        </div>

        <section className="overflow-hidden rounded-[28px] text-white shadow-xl" style={{ background: `linear-gradient(90deg, ${farben.navyDark}, ${farben.navy}, ${farben.navySoft})` }}>
          <div className="grid gap-8 px-8 py-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="text-2xl font-bold">Premium-Mitgliedschaft</div>
              <p className="mt-3 max-w-lg text-white/80">Schalte exklusive Funktionen, tiefere Analysen und bevorzugten Support für bessere Entscheidungen frei.</p>
              <button onClick={() => goTo("mitgliedschaft")} className="mt-6 rounded-xl px-5 py-3 font-semibold shadow-lg" style={{ background: farben.gold, color: farben.navyDark }}>Mitgliedschaft ansehen</button>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <ul className="space-y-4 text-base">
                {['Erweiterte Analysen', 'Priorisierter Support', 'Exklusive Webinare'].map((item) => (
                  <li key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5" style={{ color: farben.gold }} /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function MaerkteSeite() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold">Märkte</h1>
          <p className="mt-2 text-slate-500">Beobachte Aktien, Krypto und Indizes in einer übersichtlichen Marktansicht.</p>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <Search className="h-4 w-4 text-slate-400" />
          <input className="bg-transparent outline-none" placeholder="Anlage suchen..." />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {marktDaten.concat(marktDaten).map((item, i) => (
          <div key={item.ticker + i} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-slate-500">{item.ticker}</div>
              </div>
              <TrendingUp className="h-5 w-5" style={{ color: farben.green }} />
            </div>
            <div className="mt-5 text-2xl font-bold">{item.preis}</div>
            <div className={`mt-1 text-sm font-semibold ${item.change.startsWith("-") ? "text-red-500" : "text-emerald-600"}`}>{item.change}</div>
            <div className="mt-4 h-20 rounded-2xl" style={{ background: "linear-gradient(180deg, rgba(20,60,120,0.08), rgba(20,60,120,0.02))" }} />
          </div>
        ))}
      </div>
    </main>
  );
}

function PortfolioSeite() {
  const assets = [
    ["Aktien", "25.400,00 €", "44%"],
    ["Krypto", "12.300,00 €", "22%"],
    ["Fonds", "10.850,00 €", "19%"],
    ["Guthaben", "8.200,00 €", "15%"],
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-extrabold">Portfolio</h1>
      <p className="mt-2 text-slate-500">Erhalte einen vollständigen Überblick über deine Verteilung und Performance.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <Bereich title="Portfolio-Zusammenfassung">
          <div className="grid gap-4 sm:grid-cols-2">
            {assets.map(([name, value, weight]) => (
              <div key={name} className="rounded-[22px] border border-slate-200 p-5">
                <div className="text-sm text-slate-500">{name}</div>
                <div className="mt-2 text-2xl font-bold">{value}</div>
                <div className="mt-1 text-sm font-semibold" style={{ color: farben.navy }}>{weight} Verteilung</div>
              </div>
            ))}
          </div>
        </Bereich>
        <Bereich title="Verteilungsdiagramm">
          <div className="flex h-[320px] items-center justify-center rounded-[24px]" style={{ background: "linear-gradient(180deg, rgba(20,60,120,0.06), rgba(20,60,120,0.02))" }}>
            <div className="grid h-60 w-60 place-items-center rounded-full border-[26px] border-[#143C78] border-t-[#F4C64E] border-r-[#27C26C] border-b-[#94B7E7] text-center shadow-inner">
              <div>
                <div className="text-sm text-slate-500">Gesamtwert</div>
                <div className="text-3xl font-extrabold">56.750,00 €</div>
              </div>
            </div>
          </div>
        </Bereich>
      </div>
    </main>
  );
}

function ToolsSeite() {
  const tools = [
    ["ROI-Rechner", Calculator, "Berechne deine mögliche Rendite mit flexiblen Eingaben."],
    ["Risikoanalyse", ShieldCheck, "Verstehe Chancen, Risiken und mögliche Schwankungen."],
    ["Zinseszins-Rechner", BarChart3, "Simuliere langfristiges Wachstum über mehrere Jahre."],
    ["Budgetplaner", Wallet, "Plane Einzahlungen und behalte deine Finanzen im Blick."],
    ["Steuerübersicht", Landmark, "Erstelle eine einfache Übersicht für deine Unterlagen."],
    ["Benachrichtigungen", Bell, "Behalte Preisbewegungen und Schwellenwerte im Auge."],
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-extrabold">Tools</h1>
      <p className="mt-2 text-slate-500">Nützliche Werkzeuge für Anleger im modernen Athena-Design.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tools.map(([title, Icon, desc]) => (
          <div key={title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="inline-flex rounded-2xl p-3" style={{ background: "#FFF5D9", color: farben.navy }}><Icon className="h-6 w-6" /></div>
            <div className="mt-4 text-xl font-bold">{title}</div>
            <p className="mt-2 text-sm text-slate-500">{desc}</p>
            <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: farben.navy }}>
              Tool öffnen <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

function BildungSeite() {
  const items = lernKarten.concat(["Diversifikation verstehen", "Krypto-Grundlagen", "Technische Charts lesen"]);
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-extrabold">Bildung</h1>
      <p className="mt-2 text-slate-500">Lerne Grundlagen, Strategien und den sicheren Umgang mit Finanzmärkten.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((title, i) => (
          <div key={title} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
            <div className="h-36 p-5 text-white" style={{ background: `linear-gradient(135deg, ${farben.navySoft}, ${farben.navyDark})` }}>
              <BookOpen className="h-6 w-6" />
              <div className="mt-6 text-lg font-bold leading-snug">{title}</div>
            </div>
            <div className="p-5">
              <div className="text-sm text-slate-500">Modul {i + 1}</div>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: farben.navy }}>
                Jetzt lernen <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function MitgliedschaftSeite() {
  const plans = [
    ["Starter", "4%", ["4% Gebühr vom Gesamtbetrag bei Auszahlung", "Basis-Analysen", "Portfolio-Übersicht"]],
    ["Pro", "8%", ["8% Gebühr vom Gesamtbetrag bei Auszahlung", "Priorisierter Support", "Premium-Tools"]],
    ["Elite", "12%", ["12% Gebühr vom Gesamtbetrag bei Auszahlung", "Exklusive Webinare", "Persönliche Betreuung"]],
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-extrabold">Mitgliedschaft</h1>
      <p className="mt-2 text-slate-500">Wähle das passende Modell für deine Auszahlung und deinen Serviceumfang.</p>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {plans.map(([title, price, features], i) => (
          <div key={title} className={`rounded-[28px] border bg-white p-7 shadow-sm ${i === 1 ? 'border-yellow-300 ring-2 ring-yellow-200' : 'border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{title}</div>
              {i === 1 && <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: "#FFF5D9", color: farben.navyDark }}>Beliebt</span>}
            </div>
            <div className="mt-5 text-5xl font-extrabold" style={{ color: farben.navy }}>{price}</div>
            <div className="mt-1 text-sm text-slate-500">vom Gesamtbetrag bei Auszahlung</div>
            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              {features.map((f) => <li key={f} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" /> <span>{f}</span></li>)}
            </ul>
            <button className="mt-8 w-full rounded-2xl px-4 py-3 font-semibold shadow" style={{ background: i === 1 ? farben.gold : farben.navy, color: i === 1 ? farben.navyDark : 'white' }}>Plan wählen</button>
          </div>
        ))}
      </div>
    </main>
  );
}

function KontaktSeite() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-extrabold">Kontakt</h1>
      <p className="mt-2 text-slate-500">Kontaktiere unser Team zu Portfolio, Tools und Premium-Zugang.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_.9fr]">
        <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Vorname" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Nachname" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none md:col-span-2" placeholder="E-Mail-Adresse" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none md:col-span-2" placeholder="Betreff" />
            <textarea className="min-h-[160px] rounded-2xl border border-slate-200 px-4 py-3 outline-none md:col-span-2" placeholder="Wie können wir helfen?" />
          </div>
          <button className="mt-5 rounded-2xl px-5 py-3 font-semibold text-white shadow-lg" style={{ background: farben.navy }}>Nachricht senden</button>
        </div>
        <div className="rounded-[24px] p-6 text-white shadow-xl" style={{ background: `linear-gradient(160deg, ${farben.navy}, ${farben.navyDark})` }}>
          <div className="text-2xl font-bold">Athena Support</div>
          <p className="mt-3 text-white/80">Wir unterstützen bei Kontoeinrichtung, Portfolio-Ansicht und Premium-Funktionen.</p>
          <div className="mt-6 space-y-4 text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">support@athenafinance.com</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">+49 30 12345678</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Mo–Fr • 08:00 – 18:00 Uhr</div>
          </div>
        </div>
      </div>
    </main>
  );
}

function AuthLayout({ title, subtitle, children, footerText, footerAction, onFooterAction }) {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${farben.navyDark}, ${farben.navy}, ${farben.navySoft})` }} />
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1200 800" className="h-full w-full">
          <path d="M0 520 C100 460, 180 430, 260 470 S420 580, 520 500 S690 350, 800 430 S980 610, 1200 420" fill="none" stroke="rgba(39,194,108,.9)" strokeWidth="6" />
          <path d="M0 620 C120 590, 220 600, 320 540 S520 480, 650 560 S850 700, 1200 560" fill="none" stroke="rgba(120,190,255,.85)" strokeWidth="3" />
          {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={i * 100} y1={0} x2={i * 100} y2={800} stroke="rgba(255,255,255,.08)" />)}
          {Array.from({ length: 9 }).map((_, i) => <line key={i} x1={0} y1={i * 100} x2={1200} y2={i * 100} stroke="rgba(255,255,255,.08)" />)}
        </svg>
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-160px)] max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-[1fr_.95fr]">
        <div className="hidden lg:block text-white">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4" /> Sicherer Kundenzugang
            </div>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight">{title}</h1>
            <p className="mt-4 text-lg text-white/80">{subtitle}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [TrendingUp, 'Live-Marktübersicht'],
                [Wallet, 'Sichere Kontoverwaltung'],
                [BarChart3, 'Portfolio-Analysen'],
                [GraduationCap, 'Finanzbildung'],
              ].map(([Icon, label]) => (
                <div key={label} className="rounded-[22px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <Icon className="h-5 w-5" style={{ color: farben.gold }} />
                  <div className="mt-3 font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-[32px] border border-white/10 bg-white p-8 shadow-2xl">
          <div className="mb-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg" style={{ background: `linear-gradient(135deg, ${farben.navy}, ${farben.navySoft})`, color: 'white' }}>
              <Crown className="h-6 w-6" />
            </div>
            <div className="mt-4 text-3xl font-extrabold text-slate-900">{title}</div>
            <div className="mt-2 text-sm text-slate-500">{subtitle}</div>
          </div>
          {children}
          <div className="mt-6 text-center text-sm text-slate-500">
            {footerText}{' '}
            <button onClick={onFooterAction} className="font-semibold" style={{ color: farben.navy }}>{footerAction}</button>
          </div>
        </div>
      </div>
    </main>
  );
}

function LoginSeite({ goTo }) {
  return (
    <AuthLayout
      title="Willkommen zurück"
      subtitle="Melde dich an, um auf dein Portfolio, Tools und Marktübersichten zuzugreifen."
      footerText="Noch kein Konto?"
      footerAction="Jetzt registrieren"
      onFooterAction={() => goTo('registrieren')}
    >
      <div className="grid gap-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">E-Mail-Adresse</label>
          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400" placeholder="name@beispiel.de" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">Passwort</label>
          <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400" placeholder="Passwort eingeben" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-500"><input type="checkbox" className="rounded" /> Angemeldet bleiben</label>
          <button className="font-semibold" style={{ color: farben.navy }}>Passwort vergessen?</button>
        </div>
        <button className="mt-2 rounded-2xl px-4 py-3 font-semibold text-white shadow-lg" style={{ background: farben.navy }}>Anmelden</button>
        <button className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-700">Mit Google fortfahren</button>
      </div>
    </AuthLayout>
  );
}

function RegistrierenSeite({ goTo }) {
  return (
    <AuthLayout
      title="Konto erstellen"
      subtitle="Erstelle dein Athena-Finance-Konto und starte mit einer modernen Übersicht deiner Anlagen."
      footerText="Du hast bereits ein Konto?"
      footerAction="Zum Login"
      onFooterAction={() => goTo('login')}
    >
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Vorname</label>
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400" placeholder="Max" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Nachname</label>
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400" placeholder="Mustermann" />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">E-Mail-Adresse</label>
          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400" placeholder="name@beispiel.de" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">Passwort</label>
          <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400" placeholder="Passwort erstellen" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">Passwort bestätigen</label>
          <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400" placeholder="Passwort wiederholen" />
        </div>
        <label className="flex items-start gap-3 text-sm text-slate-500">
          <input type="checkbox" className="mt-1 rounded" />
          <span>Ich stimme den AGB und der Datenschutzerklärung zu.</span>
        </label>
        <button className="rounded-2xl px-4 py-3 font-semibold shadow-lg" style={{ background: farben.gold, color: farben.navyDark }}>Konto erstellen</button>
      </div>
    </AuthLayout>
  );
}

function AdminPanelSeite() {
  const userRows = [
    { name: "Erwin Schönweiler", status: "Aktiv", role: "Kunde", saldo: "18.420,00 €" },
    { name: "Heinrich Riedle", status: "Prüfung", role: "Kunde", saldo: "7.980,00 €" },
    { name: "Sabine Keller", status: "Aktiv", role: "Support", saldo: "—" },
    { name: "Markus Hahn", status: "Gesperrt", role: "Kunde", saldo: "2.110,00 €" },
  ];

  const activities = [
    "Neue Registrierung bestätigt",
    "Portfolio-Auszahlung angefragt",
    "Dokumentenprüfung abgeschlossen",
    "Support-Ticket beantwortet",
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Admin-Panel</h1>
          <p className="mt-2 text-slate-500">Verwalte Nutzer, Auszahlungen, Inhalte und Einstellungen in einer zentralen Übersicht.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-2xl px-4 py-3 font-semibold text-white shadow-lg" style={{ background: farben.navy }}>Neuen Nutzer anlegen</button>
          <button className="rounded-2xl px-4 py-3 font-semibold shadow" style={{ background: farben.gold, color: farben.navyDark }}>Bericht exportieren</button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Gesamte Nutzer", "1.284", " +24 diese Woche"],
          ["Offene Auszahlungen", "38", "12 dringend"],
          ["Offene Tickets", "14", "5 neu"],
          ["Systemstatus", "Stabil", "99,9% online"],
        ].map(([label, value, sub]) => (
          <div key={label} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-500">{label}</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">{value}</div>
            <div className="mt-2 text-sm font-semibold" style={{ color: farben.green }}>{sub}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
        <Bereich title="Schnellzugriff">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              [ShieldCheck, "KYC prüfen"],
              [Wallet, "Auszahlungen verwalten"],
              [BarChart3, "Finanzberichte"],
              [Bell, "Benachrichtigungen"],
              [BookOpen, "Inhalte bearbeiten"],
              [Landmark, "Gebühren & Regeln"],
            ].map(([Icon, label]) => (
              <button key={label} className="flex items-center gap-4 rounded-[22px] border border-slate-200 p-4 text-left hover:bg-slate-50">
                <div className="rounded-2xl p-3" style={{ background: "#FFF5D9", color: farben.navy }}><Icon className="h-6 w-6" /></div>
                <div className="font-semibold">{label}</div>
              </button>
            ))}
          </div>
        </Bereich>

        <Bereich title="Letzte Aktivitäten">
          <div className="space-y-4">
            {activities.map((item, i) => (
              <div key={item + i} className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
                <div>
                  <div className="font-semibold text-slate-800">{item}</div>
                  <div className="text-sm text-slate-500">Vor {i + 1} Stunde{ i === 0 ? "" : "n" }</div>
                </div>
              </div>
            ))}
          </div>
        </Bereich>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <Bereich title="Nutzerverwaltung" action="Alle anzeigen">
          <div className="overflow-hidden rounded-[22px] border border-slate-200">
            <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">
              <div>Name</div>
              <div>Status</div>
              <div>Rolle</div>
              <div>Saldo</div>
            </div>
            {userRows.map((row) => (
              <div key={row.name} className="grid grid-cols-4 items-center border-t border-slate-200 px-4 py-4 text-sm">
                <div className="font-semibold text-slate-800">{row.name}</div>
                <div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${row.status === "Aktiv" ? "bg-emerald-50 text-emerald-700" : row.status === "Prüfung" ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700"}`}>
                    {row.status}
                  </span>
                </div>
                <div className="text-slate-600">{row.role}</div>
                <div className="font-semibold text-slate-800">{row.saldo}</div>
              </div>
            ))}
          </div>
        </Bereich>

        <Bereich title="Admin-Einstellungen">
          <div className="space-y-4">
            {[
              ["Benutzerrechte", "Rollen und Zugriffe bearbeiten"],
              ["Gebührenmodell", "Starter, Pro und Elite verwalten"],
              ["Website-Inhalte", "Texte, Banner und Hinweise ändern"],
              ["Sicherheit", "2FA, Passwörter und Protokolle prüfen"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-slate-200 p-4">
                <div className="font-semibold text-slate-800">{title}</div>
                <div className="mt-1 text-sm text-slate-500">{desc}</div>
              </div>
            ))}
          </div>
        </Bereich>
      </div>
    </main>
  );
}

export default function AthenaFinanceDeutsch() {
  const [aktuelleSeite, setAktuelleSeite] = useState("dashboard");

  const seiten = {
    dashboard: <DashboardSeite goTo={setAktuelleSeite} />,
    maerkte: <MaerkteSeite />,
    portfolio: <PortfolioSeite />,
    tools: <ToolsSeite />,
    bildung: <BildungSeite />,
    mitgliedschaft: <MitgliedschaftSeite />,
    kontakt: <KontaktSeite />,
    admin: <AdminPanelSeite />,
    login: <LoginSeite goTo={setAktuelleSeite} />,
    registrieren: <RegistrierenSeite goTo={setAktuelleSeite} />,
  };

  return (
    <Layout aktuelleSeite={aktuelleSeite} setAktuelleSeite={setAktuelleSeite}>
      {seiten[aktuelleSeite]}
    </Layout>
  );
}
