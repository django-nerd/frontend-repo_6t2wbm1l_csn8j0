import React from 'react'
import { PlayCircle, ArrowRight, CheckCircle2, BarChart3, Headphones, Disc, PieChart, LineChart, Download, Music } from 'lucide-react'

// Palette helpers from CSS variables
const PALETTE = {
  coral: 'var(--soft-coral)',
  sand: 'var(--muted-sand)',
  charcoal: 'var(--warm-charcoal)',
  mint: 'var(--pastel-mint)',
  sage: 'var(--pale-sage)',
  peach: 'var(--soft-peach)',
  teal: 'var(--muted-teal)',
  gold: 'var(--warm-gold)',
  terra: 'var(--soft-terracotta)'
}

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
)

const SoftButton = ({ children, href = '#', variant = 'primary', icon: Icon }) => {
  const base = 'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium hover-lift focus:outline-none focus:ring-2 focus:ring-black/5';
  if (variant === 'primary') {
    return (
      <a href={href} className={base} style={{ background: PALETTE.mint, color: PALETTE.charcoal }}>
        {Icon ? <Icon className="size-4" /> : null}
        {children}
      </a>
    )
  }
  if (variant === 'secondary') {
    return (
      <a href={href} className={base} style={{ background: '#F4F0EA', color: PALETTE.charcoal, border: '1px solid rgba(0,0,0,0.06)' }}>
        {Icon ? <Icon className="size-4" /> : null}
        {children}
      </a>
    )
  }
  return (
    <a href={href} className={base} style={{ color: PALETTE.charcoal }}>
      {Icon ? <Icon className="size-4" /> : null}
      {children}
    </a>
  )
}

const Card = ({ children, className = '' }) => (
  <div className={`soft-card bg-white/60 backdrop-blur-sm border border-black/5 ${className}`}>{children}</div>
)

const Header = () => (
  <header className="sticky top-0 z-30 bg-[rgba(231,216,201,0.7)] backdrop-blur-md border-b border-black/5">
    <Container className="py-4 flex items-center justify-between">
      <a href="#" className="flex items-center gap-3">
        <div className="size-8 rounded-xl" style={{ background: `linear-gradient(135deg, ${PALETTE.peach}, ${PALETTE.mint})` }} />
        <span className="font-semibold tracking-wide" style={{ color: PALETTE.charcoal }}>BeatAlytics</span>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: 'rgba(43,43,43,0.75)' }}>
        <a href="#features" className="hover:opacity-100 opacity-80">Features</a>
        <a href="#pricing" className="hover:opacity-100 opacity-80">Pricing</a>
        <a href="#faq" className="hover:opacity-100 opacity-80">FAQ</a>
      </nav>
      <SoftButton href="#start" variant="primary" icon={ArrowRight}>Start free</SoftButton>
    </Container>
  </header>
)

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-sunset opacity-[0.35]" />
    <div className="absolute inset-0 grain" />
    <Container className="relative py-16 md:py-24">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs" style={{ background: '#F4F0EA', color: 'rgba(43,43,43,0.8)', border: '1px solid rgba(0,0,0,0.06)' }}>
          <Headphones className="size-3.5" />
          Built by producers, for producers
        </div>
        <h1 className="mt-5 text-4xl md:text-6xl font-heading font-bold leading-[1.05] tracking-wide" style={{ color: PALETTE.charcoal }}>
          Calm, honest analytics for your beats
        </h1>
        <p className="mt-4 text-lg text-[rgba(43,43,43,0.75)] max-w-2xl">
          Keep your workflow simple. Connect sales, streams, and traffic in one friendly place. No noise. Just the numbers that matter.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <SoftButton href="#start" variant="primary" icon={ArrowRight}>Start free</SoftButton>
          <SoftButton href="#demo" variant="secondary" icon={PlayCircle}>Watch demo</SoftButton>
        </div>
      </div>

      {/* Minimal waveform */}
      <div className="mt-14">
        <Card className="p-6">
          <div className="text-sm mb-3" style={{ color: 'rgba(43,43,43,0.7)' }}>Last 30 days</div>
          <div className="h-28 w-full relative">
            <svg viewBox="0 0 600 120" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="glow" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor={getComputedStyle(document.documentElement).getPropertyValue('--soft-peach') || '#FFD9C2'} />
                  <stop offset="100%" stopColor={getComputedStyle(document.documentElement).getPropertyValue('--pastel-mint') || '#CDEFE2'} />
                </linearGradient>
              </defs>
              <path d="M0,80 C60,40 120,95 180,70 C240,45 300,95 360,65 C420,35 480,95 540,60 C560,52 580,56 600,50" fill="none" stroke="url(#glow)" strokeWidth="3" className="line-glow" />
            </svg>
          </div>
        </Card>
      </div>
    </Container>
  </section>
)

const PadsGrid = () => (
  <section id="features" className="py-16">
    <Container>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Simple sales view', desc: 'See revenue and top beats at a glance — no dashboards to learn.', icon: BarChart3 },
          { title: 'Where fans find you', desc: 'Understand which platform and country are showing love.', icon: PieChart },
          { title: 'Exports that work', desc: 'Download CSVs your team can actually use.', icon: Download },
        ].map((f, i) => (
          <Card key={i} className="p-6 hover-lift">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-xl flex items-center justify-center" style={{ background: PALETTE.mint }}>
                <f.icon className="size-5" style={{ color: PALETTE.charcoal }} />
              </div>
              <h3 className="font-heading font-semibold" style={{ color: PALETTE.charcoal }}>{f.title}</h3>
            </div>
            <p className="mt-3 text-sm" style={{ color: 'rgba(43,43,43,0.75)' }}>{f.desc}</p>
          </Card>
        ))}
      </div>
    </Container>
  </section>
)

const GentleStats = () => (
  <section className="py-4">
    <Container>
      <Card className="p-6">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { k: 'Monthly Revenue', v: '$2,340' },
            { k: 'Top Beat', v: 'Sunset Pads' },
            { k: 'New Fans', v: '+612' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-xs uppercase tracking-wide" style={{ color: 'rgba(43,43,43,0.55)' }}>{s.k}</div>
              <div className="mt-1 text-2xl font-heading font-semibold" style={{ color: PALETTE.charcoal }}>{s.v}</div>
            </div>
          ))}
        </div>
      </Card>
    </Container>
  </section>
)

const Pricing = () => (
  <section id="pricing" className="py-20">
    <Container>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: PALETTE.charcoal }}>Creator-friendly pricing</h2>
        <p className="mt-3" style={{ color: 'rgba(43,43,43,0.75)' }}>Start free. Upgrade when you want more detail. No contracts, no stress.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[
          { name: 'Free', price: '$0', cta: 'Get started', features: ['Connect 1 platform', '7‑day trends', 'Basic exports'] },
          { name: 'Pro', price: '$19/mo', cta: 'Go Pro', featured: true, features: ['All platforms', '30‑day insights', 'Priority support'] },
          { name: 'Studio', price: '$39/mo', cta: 'For studios', features: ['Team seats', 'Unlimited exports', 'CSV + JSON API'] },
        ].map((p, i) => (
          <div key={i} className={`soft-card-lg overflow-hidden ${p.featured ? '' : ''}`} style={{ background: p.featured ? 'linear-gradient(135deg, var(--soft-peach), var(--pastel-mint))' : 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="p-6">
              <div className="text-sm mb-1" style={{ color: 'rgba(43,43,43,0.6)' }}>{p.name}</div>
              <div className="text-3xl font-heading font-bold" style={{ color: PALETTE.charcoal }}>{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: 'rgba(43,43,43,0.75)' }}>
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2"><CheckCircle2 className="size-4" style={{ color: PALETTE.teal }} />{f}</li>
                ))}
              </ul>
              <div className="mt-6">
                <SoftButton href="#start" variant={p.featured ? 'primary' : 'secondary'}>{p.cta}</SoftButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
)

const FinalCTA = () => (
  <section className="py-20 relative">
    <div className="absolute inset-0 bg-mint opacity-60" />
    <div className="absolute inset-0 grain" />
    <Container className="relative text-center">
      <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs" style={{ background: '#F4F0EA', color: 'rgba(43,43,43,0.8)', border: '1px solid rgba(0,0,0,0.06)' }}>
        <Music className="size-3.5" /> Let the music lead, we handle the numbers
      </div>
      <h3 className="mt-4 text-3xl md:text-4xl font-heading font-bold" style={{ color: PALETTE.charcoal }}>Plug in your catalogs and keep it moving</h3>
      <p className="mt-3 max-w-2xl mx-auto" style={{ color: 'rgba(43,43,43,0.75)' }}>Connect once and see clear insights roll in: what’s selling, where fans come from, and when to drop next.</p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <SoftButton href="#start" variant="primary" icon={ArrowRight}>Start free</SoftButton>
        <SoftButton href="#demo" variant="secondary" icon={PlayCircle}>Watch demo</SoftButton>
      </div>
    </Container>
  </section>
)

const Footer = () => (
  <footer className="py-10 border-t border-black/5">
    <Container className="grid md:grid-cols-4 gap-8">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-xl" style={{ background: `linear-gradient(135deg, ${PALETTE.peach}, ${PALETTE.mint})` }} />
          <span className="font-semibold" style={{ color: PALETTE.charcoal }}>BeatAlytics</span>
        </div>
        <p className="mt-3 text-sm" style={{ color: 'rgba(43,43,43,0.7)' }}>
          Analytics with a producer’s touch — soft, clear, and genuinely helpful.
        </p>
      </div>
      <div>
        <div className="text-sm font-semibold" style={{ color: PALETTE.charcoal }}>Product</div>
        <ul className="mt-2 text-sm" style={{ color: 'rgba(43,43,43,0.75)' }}>
          <li><a href="#features" className="hover:opacity-100 opacity-80">Features</a></li>
          <li><a href="#pricing" className="hover:opacity-100 opacity-80">Pricing</a></li>
        </ul>
      </div>
      <div>
        <div className="text-sm font-semibold" style={{ color: PALETTE.charcoal }}>Company</div>
        <ul className="mt-2 text-sm" style={{ color: 'rgba(43,43,43,0.75)' }}>
          <li><a href="#" className="hover:opacity-100 opacity-80">Contact</a></li>
          <li><a href="#" className="hover:opacity-100 opacity-80">Privacy</a></li>
        </ul>
      </div>
    </Container>
    <div className="mt-8 text-center text-xs" style={{ color: 'rgba(43,43,43,0.6)' }}>© {new Date().getFullYear()} BeatAlytics</div>
  </footer>
)

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--muted-sand)' }}>
      <Header />
      <Hero />
      <PadsGrid />
      <GentleStats />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
