import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Music2, BarChart3, HeartHandshake, Sparkles } from 'lucide-react'

// Pastel Creative palette
const palette = {
  coral: '#F7AFA7', // Soft Coral
  sand: '#E7D8C9',  // Muted Sand
  charcoal: '#2B2B2B', // Warm Charcoal
  white: '#FFFFFF'
}

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
)

const Section = ({ children, className = '', id }) => (
  <section id={id} className={`w-full ${className}`}>{children}</section>
)

const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl bg-white/70 backdrop-blur-sm border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${className}`}>
    {children}
  </div>
)

const Pill = ({ children, className = '' }) => (
  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-black/5 text-[${palette.charcoal}] border border-black/10 ${className}`}>
    {children}
  </span>
)

function App() {
  return (
    <div className="min-h-screen w-full" style={{ background: palette.sand, color: palette.charcoal }}>
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[rgba(231,216,201,0.6)] border-b border-black/10">
        <Container className="py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="size-8 rounded-md" style={{ background: palette.coral }} />
            <span className="font-heading font-semibold tracking-wide">BeatAlytics</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-80">
            <a href="#how" className="hover:opacity-100">How it works</a>
            <a href="#features" className="hover:opacity-100">Features</a>
            <a href="#pricing" className="hover:opacity-100">Pricing</a>
          </nav>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold" style={{ background: palette.coral, color: palette.charcoal }}>
            Get started <ArrowRight className="size-4" />
          </a>
        </Container>
      </header>

      {/* Hero */}
      <Section id="hero" className="pt-12 md:pt-20">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Pill className="bg-white/60">A calm home for your music data</Pill>
            <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold leading-[1.1]">
              Analytics for producers, designed like a sketchbook
            </h1>
            <p className="mt-3 text-base md:text-lg opacity-80 max-w-xl">
              Keep tabs on sales, listeners, and growth—without the noise. BeatAlytics pairs studio‑friendly design with clear insights you can act on.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold" style={{ background: palette.coral, color: palette.charcoal }}>
                Start free <ArrowRight className="size-4" />
              </a>
              <a href="#how" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-black/10 bg-white/50">
                See how it works
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3 text-sm opacity-80">
              <CheckCircle2 className="size-4" /> No credit card
              <CheckCircle2 className="size-4" /> Cancel anytime
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg" style={{ background: palette.coral }} />
                <div>
                  <div className="font-semibold">Weekly snapshot</div>
                  <div className="text-sm opacity-70">A gentle overview of what moved</div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {[
                  { label: 'Sales', value: '$1,240' },
                  { label: 'Listeners', value: '8.2k' },
                  { label: 'Top country', value: 'US' }
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-black/10 bg-white/60 p-4">
                    <div className="text-xs opacity-70">{m.label}</div>
                    <div className="text-lg font-semibold mt-1">{m.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-black/10 bg-white/60 p-4">
                <div className="text-sm font-medium mb-2">Recent beats</div>
                <div className="space-y-2">
                  {['Dusty Pads', 'Sunset Lo‑Fi', 'Corner Booth'].map((n, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-white/70 border border-black/10 px-3 py-2">
                      <span className="flex items-center gap-2"><Music2 className="size-4 opacity-70" /> {n}</span>
                      <span className="text-xs opacity-70">steady</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* How it works */}
      <Section id="how" className="py-14 md:py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold">Simple flow, clear picture</h2>
            <p className="mt-2 opacity-80 max-w-2xl mx-auto">Connect the platforms you already use, and we quietly organize your data. You get calm, helpful summaries—no dashboards to wrestle with.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { icon: HeartHandshake, title: 'Connect', copy: 'BeatStars, YouTube, SoundCloud, more.' },
              { icon: BarChart3, title: 'See patterns', copy: 'Sales, audience, and timing at a glance.' },
              { icon: Sparkles, title: 'Act', copy: 'Release with confidence, price smart, promote where it matters.' }
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Card className="p-6 h-full">
                  <div className="size-10 rounded-md flex items-center justify-center mb-3" style={{ background: palette.coral }}>
                    <s.icon className="size-5" />
                  </div>
                  <div className="font-semibold">{s.title}</div>
                  <p className="text-sm opacity-80 mt-1">{s.copy}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section id="features" className="py-8 md:py-10">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="font-semibold">Creator‑friendly by design</div>
              <p className="opacity-80 mt-1">Soft colors, clean layout, and humane copy. Nothing shouts. Everything helps.</p>
              <ul className="mt-4 space-y-2 text-sm">
                {['Readable typography', 'Mobile‑first experience', 'Privacy‑respecting defaults'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 className="size-4" /> {f}</li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <div className="font-semibold">What you’ll track</div>
              <p className="opacity-80 mt-1">Core stats that matter to producers—easy to scan, easy to use.</p>
              <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                {[
                  { k: 'Revenue', v: '$4.3k' },
                  { k: 'Top city', v: 'LA' },
                  { k: 'New fans', v: '621' },
                  { k: 'Conversions', v: '3.2%' },
                  { k: 'Repeat buyers', v: '41%' },
                  { k: 'Best day', v: 'Fri' }
                ].map((m, i) => (
                  <div key={i} className="rounded-lg border border-black/10 bg-white/60 p-3">
                    <div className="text-[11px] uppercase tracking-wide opacity-70">{m.k}</div>
                    <div className="font-semibold mt-0.5">{m.v}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-12 md:py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold">Fair pricing for independents</h2>
            <p className="mt-2 opacity-80">Start free and upgrade when it feels right.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Free', price: '$0', notes: ['1 platform', 'Basic stats'] },
              { name: 'Pro', price: '$19/mo', notes: ['Multi‑platform', 'Deeper insights'] },
              { name: 'Studio', price: '$39/mo', notes: ['Exports & alerts', 'Priority support'] }
            ].map((p, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="text-3xl font-bold mt-1" style={{ color: palette.charcoal }}>{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm opacity-80">
                  {p.notes.map((n, j) => (
                    <li key={j} className="flex items-center gap-2 justify-center"><CheckCircle2 className="size-4" /> {n}</li>
                  ))}
                </ul>
                <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 font-semibold" style={{ background: palette.coral, color: palette.charcoal }}>
                  Choose {p.name}
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="cta" className="py-16">
        <Container className="text-center">
          <div className="inline-flex items-center justify-center rounded-full px-3 py-1 bg-white/60 border border-black/10 text-xs">
            Made by producers, for producers
          </div>
          <h3 className="mt-3 text-3xl md:text-4xl font-heading font-bold">Grow your catalog with calm, useful insights</h3>
          <p className="mt-2 opacity-80 max-w-2xl mx-auto">Connect once. We quietly keep score so you can focus on the craft.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold" style={{ background: palette.coral, color: palette.charcoal }}>
              Start free <ArrowRight className="size-4" />
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-black/10 bg-white/60">
              Compare plans
            </a>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-10">
        <Container className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-md" style={{ background: palette.coral }} />
              <span className="font-semibold">BeatAlytics</span>
            </div>
            <p className="mt-3 text-sm opacity-80">A warm, simple home for producer analytics.</p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 text-sm opacity-80 space-y-1">
              <li><a href="#" className="hover:opacity-100">Contact</a></li>
              <li><a href="#" className="hover:opacity-100">Privacy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Resources</div>
            <ul className="mt-2 text-sm opacity-80 space-y-1">
              <li><a href="#" className="hover:opacity-100">Docs</a></li>
              <li><a href="#" className="hover:opacity-100">Status</a></li>
            </ul>
          </div>
        </Container>
        <Container className="mt-8 text-center text-xs opacity-70">© {new Date().getFullYear()} BeatAlytics</Container>
      </footer>
    </div>
  )
}

export default App
