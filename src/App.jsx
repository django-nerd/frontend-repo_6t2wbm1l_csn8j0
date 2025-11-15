import React, { useMemo } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
  PlayCircle,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Globe,
  BarChart3,
  Download,
  LineChart,
  Activity,
  Users,
  MapPin,
  DollarSign,
  Disc,
  Music2,
  Zap
} from 'lucide-react'

const neon = {
  green: '#39FF88',
  purple: '#7C3AED'
}

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`relative w-full ${className}`}>{children}</section>
)

const GlassCard = ({ children, className = '' }) => (
  <div className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl shadow-black/30 ${className}`}>
    {children}
  </div>
)

const Pill = ({ children, className = '' }) => (
  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-white/80 ${className}`}>
    {children}
  </span>
)

// Tiny visualizers used throughout
const EqBars = ({ bars = 12, accentEvery = 4, height = 28 }) => (
  <div className="flex items-end gap-1">
    {Array.from({ length: bars }).map((_, i) => (
      <span
        key={i}
        className={`w-1.5 md:w-2 rounded-sm animate-eq origin-bottom ${i % accentEvery === 0 ? 'bg-[rgba(57,255,136,0.9)]' : 'bg-white/40'}`}
        style={{ height }}
      />
    ))}
  </div>
)

const Vinyl = () => (
  <div className="relative">
    <div className="size-40 md:size-60 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),rgba(255,255,255,0)_40%),conic-gradient(from_0deg,rgba(255,255,255,0.06)_0deg,rgba(0,0,0,0)_20deg,rgba(255,255,255,0.06)_40deg,rgba(0,0,0,0)_60deg,rgba(255,255,255,0.06)_80deg,rgba(0,0,0,0)_100deg)] border border-white/10 shadow-2xl shadow-black/40 animate-spin-slow flex items-center justify-center">
      <div className="size-10 md:size-14 rounded-full" style={{ background: `linear-gradient(135deg, ${neon.purple}, ${neon.green})` }} />
    </div>
    <div className="absolute inset-0 -z-10 blur-2xl opacity-40" style={{ background: `radial-gradient(closest-side, ${neon.purple}33, transparent)` }} />
  </div>
)

const RadialGrid = () => (
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute -top-52 -left-40 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-50" style={{ background: 'radial-gradient(closest-side, rgba(124,58,237,0.45), transparent)' }} />
    <div className="absolute -bottom-64 -right-40 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-40" style={{ background: `radial-gradient(closest-side, rgba(57,255,136,0.25), transparent)` }} />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
  </div>
)

const Waveform = () => (
  <svg className="w-full h-24 md:h-32" viewBox="0 0 1200 200" preserveAspectRatio="none">
    <defs>
      <linearGradient id="wf" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor={neon.purple} />
        <stop offset="100%" stopColor={neon.green} />
      </linearGradient>
    </defs>
    <path
      d="M0,100 C150,30 300,170 450,100 C600,30 750,170 900,100 C1050,30 1200,170 1200,100"
      stroke="url(#wf)"
      strokeWidth="3"
      fill="transparent"
      className="animate-draw path-glow"
    />
  </svg>
)

function App() {
  // Parallax tilt values for hero gallery
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-50, 50], [8, -8])
  const rotateY = useTransform(mx, [-50, 50], [-8, 8])

  const heroStats = useMemo(() => ([
    { label: 'Today', value: '$1,240' },
    { label: '7 days', value: '$6,980' },
    { label: '30 days', value: '$21,420' }
  ]), [])

  return (
    <div className="min-h-screen w-full text-white bg-[#0B0B0F]">
      <RadialGrid />

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="size-8 rounded-lg ring-2 ring-white/10 group-hover:ring-white/30 transition" style={{ background: `linear-gradient(135deg, ${neon.purple}, ${neon.green})` }} />
            <span className="font-semibold tracking-wide">BeatAlytics</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {[
              { href: '#fusion', label: 'Music × Data' },
              { href: '#gallery', label: 'Visuals' },
              { href: '#pricing', label: 'Pricing' },
            ].map(l => (
              <a key={l.href} href={l.href} className="relative hover:text-white group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white/70 group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-[0_0_25px_rgba(57,255,136,0.35)]" style={{ background: neon.green, color: '#0B0B0F' }}>
            Start Free <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <Section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-x-0 -top-6 opacity-80">
          <Waveform />
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-16 md:pt-24 pb-8 md:pb-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Pill className="bg-black/40 border-white/20">
              <Zap className="size-4" style={{ color: neon.green }} /> Data‑driven for beatmakers
            </Pill>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] font-heading">
              Make hits. We’ll show you <span style={{ color: neon.green }}>where the money moves</span>.
            </h1>
            <p className="mt-4 text-white/80 text-lg md:text-xl max-w-xl">
              A visual command‑center that blends music vibes with real analytics. See what sells, where it travels, and when to double‑down.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold glow" style={{ background: neon.green, color: '#0B0B0F' }}>
                Start Free <ArrowRight className="size-4" />
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/20 bg-white/5 text-white/90">
                <PlayCircle className="size-5" /> Watch Demo
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-white/70 text-sm">
              <EqBars bars={10} />
              <span>No credit card • 30s setup</span>
            </div>
          </div>

          {/* Hero visual stack */}
          <motion.div
            className="relative grid grid-cols-3 gap-4"
            onMouseMove={(e) => {
              const r = (e.currentTarget.getBoundingClientRect())
              mx.set(e.clientX - (r.left + r.width / 2))
              my.set(e.clientY - (r.top + r.height / 2))
            }}
            style={{ perspective: 1000 }}
          >
            <motion.div style={{ rotateX, rotateY }} className="col-span-3">
              <GlassCard className="p-5 md:p-6">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                  <span className="size-2 rounded-full" style={{ background: neon.green }} />
                  <span className="size-2 rounded-full bg-yellow-300" />
                  <span className="size-2 rounded-full bg-red-400" />
                </div>
                <h4 className="text-white/90 font-semibold mb-3">Revenue dashboard</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <div className="h-28 rounded-lg bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 flex items-end p-3 overflow-hidden">
                      <div className="flex items-end gap-1 w-full">
                        {[18,32,24,40,36,48,44,56].map((h,i)=> (
                          <div key={i} className="w-6 rounded-t-md bg-white/20 animate-rise" style={{ height: h }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 space-y-2">
                    {heroStats.map((m,i)=> (
                      <div key={i} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                        <div className="text-xs text-white/60">{m.label}</div>
                        <div className="text-base font-semibold">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="col-span-2">
              <GlassCard className="p-5 md:p-6">
                <h4 className="text-white/90 font-semibold mb-3">Top beats</h4>
                <div className="space-y-2">
                  {['Midnight R&B','Drill Money','Lo‑Fi Study','Afro Bounce'].map((b,i)=> (
                    <div key={i} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <Activity className="size-4 text-white/60" />
                        <span className="text-sm text-white/90">{b}</span>
                      </div>
                      <EqBars bars={8} height={18} />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="col-span-1">
              <GlassCard className="p-5 md:p-6 items-center justify-center flex">
                <Vinyl />
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>

        {/* marquee */}
        <div className="overflow-hidden border-y border-white/10 bg-black/30">
          <div className="marquee flex items-center gap-10 py-4 text-white/60">
            {["BeatStars", "YouTube", "Spotify", "SoundCloud", "Instagram", "TikTok"].map((n, i) => (
              <div key={i} className="flex items-center gap-2">
                <Disc className="size-4 text-white/40" />
                <span className="tracking-wide">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Fusion: Music x Data */}
      <Section id="fusion" className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8 items-stretch">
          <GlassCard className="p-8 relative overflow-hidden">
            <Pill className="mb-3">Music side</Pill>
            <h3 className="text-2xl md:text-3xl font-semibold font-heading">Your sound, visualized</h3>
            <p className="text-white/75 mt-2 max-w-md">Feel your catalog with motion. Equalizers, vinyl, and neon grids celebrate the art while you analyze the craft.</p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="col-span-2 h-44 rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4">
                <EqBars bars={24} accentEvery={6} height={48} />
                <div className="mt-6">
                  <Waveform />
                </div>
              </div>
              <div className="col-span-1 h-44 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                <Vinyl />
              </div>
            </div>
            <div className="absolute -right-24 -bottom-24 size-64 rounded-full blur-3xl opacity-25" style={{ background: `radial-gradient(closest-side, ${neon.green}, transparent)` }} />
          </GlassCard>

          <GlassCard className="p-8 relative overflow-hidden">
            <Pill className="mb-3">Data side</Pill>
            <h3 className="text-2xl md:text-3xl font-semibold font-heading">Clarity at a glance</h3>
            <p className="text-white/75 mt-2 max-w-md">Region heat, growth trends, and revenue streams. Decisions become obvious when the picture is this clear.</p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="col-span-2 h-44 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="h-full w-full relative">
                  <svg viewBox="0 0 400 140" className="absolute inset-0">
                    <defs>
                      <linearGradient id="lg" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor={neon.purple} />
                        <stop offset="100%" stopColor={neon.green} />
                      </linearGradient>
                    </defs>
                    <polyline fill="none" stroke="url(#lg)" strokeWidth="3" points="0,120 40,110 80,100 120,70 160,80 200,60 240,65 280,40 320,55 360,30 400,45" className="drop-shadow-[0_0_12px_rgba(57,255,136,0.35)]" />
                  </svg>
                </div>
              </div>
              <div className="col-span-1 h-44 rounded-xl border border-white/10 bg-white/5 p-3 space-y-2">
                {['US','FR','DE','BR','GB','NG'].map((c,i)=> (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-white/70 flex items-center gap-1"><MapPin className="size-3" /> {c}</span>
                    <span className="font-semibold" style={{ color: neon.green }}>{Math.round(8 + Math.random()*90)}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -left-24 -top-24 size-64 rounded-full blur-3xl opacity-25" style={{ background: `radial-gradient(closest-side, ${neon.purple}, transparent)` }} />
          </GlassCard>
        </div>
      </Section>

      {/* Visual Gallery with motion and variety */}
      <Section id="gallery" className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl md:text-3xl font-semibold font-heading">See the vibe</h3>
            <Pill><Music2 className="size-4" /> Producer‑first visuals</Pill>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Creator timeline', icon: Activity },
              { title: 'Revenue streams', icon: DollarSign },
              { title: 'Global traction', icon: Globe }
            ].map((g, i) => (
              <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ rotateX: -2, rotateY: 4, y: -4 }} style={{ perspective: 600 }}>
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center gap-2 text-white/70 mb-3"><g.icon className="size-5" /> <span className="font-semibold">{g.title}</span></div>
                  <div className="h-40 rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                    {g.title === 'Revenue streams' ? (
                      <div className="flex gap-2">
                        {[12,24,40,28,52,46].map((h, j) => (
                          <div key={j} className="w-5 rounded-md bg-white/20 hover:bg-[rgba(57,255,136,0.8)] transition" style={{ height: h }} />
                        ))}
                      </div>
                    ) : g.title === 'Global traction' ? (
                      <div className="grid grid-cols-3 gap-2 w-full p-3">
                        {['US','FR','DE','BR','GB','NG','CA','MX','JP'].map((c,k)=> (
                          <div key={k} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 flex items-center justify-between text-xs">
                            <span className="text-white/70 flex items-center gap-1"><MapPin className="size-3" /> {c}</span>
                            <span className="font-semibold" style={{ color: neon.green }}>{Math.round(8 + Math.random()*90)}%</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="w-full h-full relative p-3">
                        <div className="absolute inset-x-3 bottom-3 top-3 border-l border-dashed border-white/15" />
                        <div className="absolute left-3 right-3 bottom-3 top-3 border-b border-dashed border-white/15" />
                        <EqBars bars={18} accentEvery={5} height={36} />
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing (kept compact but more visual) */}
      <Section id="pricing" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl md:text-4xl font-semibold font-heading">Creator‑friendly pricing</h3>
            <Pill><CheckCircle2 className="size-4" /> Cancel anytime</Pill>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {[
              { name: 'Free', price: '$0', features: ['Connect 1 platform', 'Basic stats'] },
              { name: 'Pro', price: '$19/mo', features: ['Full BeatStars analytics', 'Advanced insights'] },
              { name: 'Creator Plus', price: '$39/mo', features: ['Multi‑platform', 'Automations', 'Exports'] },
              { name: 'Enterprise', price: 'Contact', features: ['For teams', 'Priority support'] }
            ].map((p,i)=> (
              <div key={i} className="relative rounded-2xl p-0.5 bg-gradient-to-br from-white/10 to-transparent">
                <GlassCard className="p-6 h-full hover:translate-y-[-2px] transition">
                  <h4 className="text-xl font-semibold">{p.name}</h4>
                  <div className="mt-2 text-3xl font-extrabold" style={{ color: neon.green }}>{p.price}</div>
                  <ul className="mt-4 space-y-2 text-white/80 text-sm">
                    {p.features.map((f,idx)=> (
                      <li key={idx} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-white/60" /> {f}</li>
                    ))}
                  </ul>
                  <a href="#cta" className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 border border-white/15 bg-white/5 hover:bg-white/10 transition">
                    Choose {p.name}
                  </a>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center justify-center rounded-full px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-xs">
            Built for beatmakers, producers, and music entrepreneurs
          </div>
          <h3 className="mt-4 text-3xl md:text-5xl font-bold font-heading">Turn your catalog into a data‑powered business</h3>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">Connect once. Watch insights flow. Make smarter drops, targeted promos, and bigger moves.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold glow" style={{ background: neon.green, color: '#0B0B0F' }}>
              Get Started Free <ArrowRight className="size-4" />
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/20 bg-white/5 text-white/90">
              <PlayCircle className="size-5" /> See Live Demo
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg" style={{ background: `linear-gradient(135deg, ${neon.purple}, ${neon.green})` }} />
              <span className="font-semibold tracking-wide">BeatAlytics</span>
            </div>
            <p className="mt-3 text-white/70 text-sm">Analytics that feel like music. Built for creators who want clarity without losing the vibe.</p>
          </div>
          <div className="space-y-2">
            <h5 className="text-white/80 font-semibold">Company</h5>
            <ul className="text-white/60 text-sm space-y-1">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy & Terms</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h5 className="text-white/80 font-semibold">Resources</h5>
            <ul className="text-white/60 text-sm space-y-1">
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">API (future)</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h5 className="text-white/80 font-semibold">Social</h5>
            <ul className="text-white/60 text-sm space-y-1">
              <li><a href="#" className="hover:text-white">Twitter/X</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-white/50 text-xs">© {new Date().getFullYear()} BeatAlytics. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
