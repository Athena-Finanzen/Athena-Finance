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

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    "Dashboard",
    "Märkte",
    "Portfolio",
    "Tools",
    "Bildung",
    "Mitgliedschaft",
    "Kontakt",
  ];

  return (
    <div className="min-h-screen" style={{ background: farben.light, color: farben.text }}>
      <header
        className="sticky top-0 z-50 border-b border-white/10 shadow-lg"
        style={{ background: `linear-gradient(90deg, ${farben.navyDark}, ${farben.navy})` }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <button className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-lg">
              <Crown className="h-5 w-5" />
            </div>
            <div className="text-left text-white">
              <div className="text-lg font-extrabold tracking-wide">ATHENA FINANCE</div>
              <div className="text-xs text-white/65">Intelligenter investieren</div>
            </div>
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((label) => (
              <button key={label} className="text-sm font-medium text-white/80 hover:text-white">
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-xl px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10">
              Login
            </button>
            <button
              className="rounded-xl px-4 py-2 text-sm font-semibold shadow-lg"
              style={{ background: farben.gold, color: farben.navyDark }}
            >
              Registrieren
            </button>
          </div>

          <button
            className="rounded-xl p-2 text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#12386f] px-4 py-3 md:hidden">
            <div className="grid gap-2">
              {navigation.map((label) => (
                <button
                  key={label}
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
    <section
      className="relative overflow-hidden"
      style={{ background: `linear-gradient(90deg, ${farben.navyDark}, ${farben.navy}, ${farben.navySoft})` }}
    >
      <div className="absolute inset-0 opacity-25">
        <svg viewBox="0 0 1200 420" className="h-full w-full">
          <path
            d="M0 280 C120 260, 160 180, 240 205 S360 305, 430 220 S560 90, 640 130 S730 245, 820 160 S960 40, 1040 95 S1140 190, 1200 55"
            fill="none"
            stroke="rgba(39,194,108,.95)"
            strokeWidth="6"
          />
          <path
            d="M0 330 C120 300, 220 305, 320 250 S520 205, 620 260 S820 345, 920 255 S1080 220, 1200 285"
            fill="none"
            stroke="rgba(120,190,255,.9)"
            strokeWidth="3"
          />
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1={i * 100} y1={0} x2={i * 100} y2={420} stroke="rgba(255,255,255,.08)" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1={0} y1={i * 70} x2={1200} y2={i * 70} stroke="rgba(255,255,255,.08)" />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold leading-tight md:text-5xl"
          >
            Clever investieren,
            <br />
            Vermögen aufbauen
          </motion.h1>

          <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
            Behalte deine Anlagen im Blick und erreiche deine finanziellen Ziele mit klaren Analysen,
            starken Tools und einem modernen Dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="rounded-xl px-6 py-3 text-base font-semibold text-white shadow-xl"
              style={{ background: farben.green }}
            >
              Jetzt starten
            </button>
            <button className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm">
              Märkte ansehen
            </button>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
          <div className="rounded-[24px] border border-white/10 bg-slate-950/20 p-4">
            <div className="mb-3 text-sm font-medium text-white/80">Live-Performance</div>
            <div className="h-64 rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-2">
              <svg viewBox="0 0 500 220" className="h-full w-full">
                {[40, 90, 140, 190].map((y, i) => (
                  <line key={i} x1={0} y1={y} x2={500} y2={y} stroke="rgba(255,255,255,.08)" />
                ))}
                {[50, 120, 190, 260, 330, 400, 470].map((x, i) => (
                  <line key={i} x1={x} y1={0} x2={x} y2={220} stroke="rgba(255,255,255,.06)" />
                ))}
                <path
                  d="M20 170 L70 150 L110 160 L145 130 L190 145 L230 95 L275 115 L315 90 L360 105 L405 50 L450 65 L485 20"
                  fill="none"
                  stroke="#27C26C"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0 190 C70 175, 140 200, 220 170 S350 160, 500 180"
                  fill="none"
                  stroke="rgba(120,190,255,.9)"
                  strokeWidth="3"
                />
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
          <motion.div
            key={label}
            whileHover={{ y: -4 }}
            className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="text-sm text-slate-500">{label}</div>
            <div className="mt-2 flex items-end gap-2">
              <div className="text-3xl font-bold text-slate-900">{value}</div>
              <div className="pb-1 text-sm font-semibold" style={{ color: farben.green }}>
                {change}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Marktuebersicht() {
  return (
    <section className="mx-auto mt-6 max-w-7xl px-6 pb-12">
      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Marktübersicht</h2>
          <button className="text-sm font-medium text-slate-500">Mehr</button>
        </div>

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
              <div className={`text-sm font-semibold ${item.change.startsWith("-") ? "text-red-500" : "text-emerald-600"}`}>
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Layout>
      <Hero />
      <StatistikKarten />
      <Marktuebersicht />
    </Layout>
  );
}
