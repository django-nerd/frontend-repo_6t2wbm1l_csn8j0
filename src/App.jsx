import React from 'react'
import { motion } from 'framer-motion'
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
  DollarSign
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

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-white/80">
    {children}
  </span>
)

function App() {
  const HeroPanel = ({ title, children }) => (
    <GlassCard className="p-5 md:p-6">
      <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
        <span className="size-2 rounded-full" style={{ background: neon.green }} />
        <span className="size-2 rounded-full bg-yellow-300" />
        <span className="size-2 rounded-full bg-red-400" />
      </div>
      <h4 className="text-white/90 font-semibold mb-3">{title}</h4>
      {children}
    </GlassCard>
  )

  return (
    <div className="min-h-screen w-full text-white bg-[#0B0B0F]">
      {/* subtle gradient backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[35rem] w-[35rem] rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(closest-side, rgba(124,58,237,0.5), transparent)' }} />
        <div className="absolute -bottom-40 -right-40 h-[35rem] w-[35rem] rounded-full blur-3xl opacity-40" style={{ background: `radial-gradient(closest-side, rgba(57,255,136,0.25), transparent)` }} />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg" style={{ background: `linear-gradient(135deg, ${neon.purple}, ${neon.green})` }} />
            <span className="font-semibold tracking-wide">BeatAlytics</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#how" className="hover:text-white">How it works</a>
          </div>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold" style={{ background: neon.green, color: '#0B0B0F' }}>
            Start Free <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <Section id="hero" className="relative">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Pill>
              <CheckCircle2 className="size-4 text-white/70" /> No credit card • 30-second setup
            </Pill>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Know What Your Beats Are Really Doing — <span style={{ color: neon.green }}>All Your Sales & Streams</span> in One Dashboard.
            </h1>
            <p className="mt-4 text-white/80 text-lg md:text-xl max-w-xl">
              Stop guessing which beats perform. BeatAlytics brings your BeatStars, YouTube and Spotify insights together — so you can earn more, optimize faster, and create with confidence.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold" style={{ background: neon.green, color: '#0B0B0F' }}>
                Start Free <ArrowRight className="size-4" />
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/20 bg-white/5 text-white/90">
                <PlayCircle className="size-5" /> Watch Demo
              </a>
            </div>
          </div>

          {/* Hero visuals */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="col-span-3 md:col-span-3">
              <HeroPanel title="Revenue dashboard">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <div className="h-28 rounded-lg bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 flex items-end p-3">
                      <div className="flex items-end gap-1 w-full">
                        {[18,32,24,40,36,48,44,56].map((h,i)=> (
                          <div key={i} className="w-6 rounded-t-md" style={{ height: h, background: i===7? neon.green: 'rgba(255,255,255,0.2)'}} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 space-y-2">
                    {[
                      { label: 'Today', value: '$1,240' },
                      { label: '7 days', value: '$6,980' },
                      { label: '30 days', value: '$21,420' }
                    ].map((m,i)=> (
                      <div key={i} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                        <div className="text-xs text-white/60">{m.label}</div>
                        <div className="text-base font-semibold">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </HeroPanel>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="col-span-3 md:col-span-3 grid md:grid-cols-3 gap-4">
              <HeroPanel title="Country map + demographic insights">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['US','FR','DE','BR','GB','NG'].map((c,i)=> (
                    <div key={i} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4 text-white/60" />
                        <span className="text-sm text-white/80">{c}</span>
                      </div>
                      <span className="text-sm font-semibold" style={{ color: neon.green }}>{Math.round(8 + Math.random()*90)}%</span>
                    </div>
                  ))}
                </div>
              </HeroPanel>
              <HeroPanel title="Top-performing beats list">
                <div className="space-y-2">
                  {['Midnight R&B','Drill Money','Lo-Fi Study','Afro Bounce','Trap Skyline'].map((b,i)=> (
                    <div key={i} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <Activity className="size-4 text-white/60" />
                        <span className="text-sm text-white/90">{b}</span>
                      </div>
                      <span className="text-sm text-white/70">{Math.round(1000 + Math.random()*9000)} plays</span>
                    </div>
                  ))}
                </div>
              </HeroPanel>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section id="social" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h3 className="text-xl text-white/80">Trusted by Producers</h3>
            <p className="text-3xl md:text-4xl font-semibold mt-2">Producers earning <span style={{ color: neon.green }}>$100k+</span> use BeatAlytics</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {["BeatAlytics shows me instantly which beats to push.","Finally see which countries buy your beats.","I doubled my monthly sales by understanding my patterns."].map((q,i)=> (
              <GlassCard key={i} className="p-6">
                <p className="text-white/80">“{q}”</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section id="problem" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Why Most Producers Lose Money</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-3 text-white/70"><BarChart3 className="size-5" /><span>Scattered Data</span></div>
              <p className="text-white/80">
                Beats on BeatStars, views on YouTube, streams on Spotify… You’re wasting hours trying to piece together your real performance.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-3 text-white/70"><LineChart className="size-5" /><span>No Clear Insights</span></div>
              <p className="text-white/80">
                You don’t know which beats convert, which countries buy most, or where your growth really happens.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-3 text-white/70"><TrendingUp className="size-5" /><span>Lost Growth</span></div>
              <p className="text-white/80">
                Without real analytics, you’re promoting the wrong tracks — and leave money on the table every month.
              </p>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Solution / Features */}
      <Section id="features" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-3xl md:text-4xl font-semibold mb-10">BeatAlytics Gives You Superpowers</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-3"><BarChart3 className="text-white/70" /><h4 className="text-xl font-semibold">Unified Dashboard</h4></div>
              <p className="text-white/80 mb-4">All your sales, plays, and interactions in one place.</p>
              <div className="h-28 rounded-lg bg-gradient-to-tr from-white/10 to-white/5 border border-white/10" />
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-3"><DollarSign className="text-white/70" /><h4 className="text-xl font-semibold">Revenue Insights</h4></div>
              <p className="text-white/80 mb-4">See where your money comes from, per beat, per day, per country.</p>
              <div className="grid grid-cols-3 gap-2">
                {[12,24,40,28,52,46].map((h,i)=> (
                  <div key={i} className="w-full rounded-md" style={{ height: h*2, background: i===4? neon.green: 'rgba(255,255,255,0.2)'}} />
                ))}
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-3"><Activity className="text-white/70" /><h4 className="text-xl font-semibold">Creator Activity Timeline</h4></div>
              <p className="text-white/80 mb-4">Track growth over time and understand exactly what caused performance spikes.</p>
              <div className="h-28 rounded-lg bg-gradient-to-tr from-white/10 to-white/5 border border-white/10" />
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-3"><Download className="text-white/70" /><h4 className="text-xl font-semibold">Exportable Reports</h4></div>
              <p className="text-white/80 mb-4">Export transactions and summaries for taxes, management, label negotiations & more.</p>
              <div className="flex gap-2">
                <Pill>CSV</Pill>
                <Pill>PDF</Pill>
                <Pill>XLSX</Pill>
              </div>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Deep-Dive Features */}
      <Section id="deep" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-3xl md:text-4xl font-semibold mb-10">Made for Producers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <h4 className="text-xl font-semibold mb-2">Beat performance tracker</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>Top beats</li>
                <li>Dead beats</li>
                <li>Rising beats</li>
              </ul>
            </GlassCard>
            <GlassCard className="p-6">
              <h4 className="text-xl font-semibold mb-2">Customer geography</h4>
              <p className="text-white/80">See which countries spend most</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h4 className="text-xl font-semibold mb-2">Automatic fee calculations</h4>
              <p className="text-white/80">BeatStars fees, PayPal fees</p>
            </GlassCard>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <h4 className="text-xl font-semibold mb-3">Smart insights</h4>
              <ul className="space-y-3 text-white/90">
                <li>“Your R&B beats perform 32% better on weekends.”</li>
                <li>“Your Drill beats convert most in France.”</li>
              </ul>
            </GlassCard>
            <GlassCard className="p-6">
              <h4 className="text-xl font-semibold mb-3">Persona fit</h4>
              <p className="text-white/80">This level of personalization feels magical.</p>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section id="use-cases" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-3xl md:text-4xl font-semibold mb-10">Who’s BeatAlytics For?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'For BeatStars Creators', text: 'See every sale, highlight your top categories & optimize your catalog.', icon: BarChart3 },
              { title: 'For YouTube Beat Makers', text: 'Find out which thumbnails, moods, and titles drive real engagement.', icon: PlayCircle },
              { title: 'For Producers Selling Licenses', text: 'Track license types, revenue per beat, and customer segments.', icon: DollarSign },
              { title: 'For Managers & Teams', text: 'Get instant reports for your artists.', icon: Users }
            ].map((c,i)=> (
              <GlassCard key={i} className="p-6">
                <div className="flex items-center gap-2 mb-2 text-white/70"><c.icon className="size-5" /><span className="font-semibold">{c.title}</span></div>
                <p className="text-white/80 text-sm">{c.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-3xl md:text-4xl font-semibold mb-10">Simple, Creator-Friendly Plans</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Free', price: '$0', features: ['Connect 1 platform', 'Basic stats'] },
              { name: 'Pro', price: '$19/mo', features: ['Full BeatStars analytics', 'Advanced insights'] },
              { name: 'Creator Plus', price: '$39/mo', features: ['Multi-platform (YouTube, Spotify)', 'Automations', 'Exports'] },
              { name: 'Enterprise', price: 'Contact', features: ['For teams', 'Priority support'] }
            ].map((p,i)=> (
              <GlassCard key={i} className="p-6 flex flex-col">
                <h4 className="text-xl font-semibold">{p.name}</h4>
                <div className="mt-2 text-3xl font-extrabold" style={{ color: neon.green }}>{p.price}</div>
                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  {p.features.map((f,idx)=> (
                    <li key={idx} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-white/60" /> {f}</li>
                  ))}
                </ul>
                <a href="#cta" className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 border border-white/15 bg-white/5 hover:bg-white/10 transition" style={{ color: '#fff' }}>
                  Choose {p.name}
                </a>
              </GlassCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold" style={{ background: neon.green, color: '#0B0B0F' }}>
              Start Free — Upgrade Anytime
            </a>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-3xl md:text-4xl font-semibold mb-10">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Connect your BeatStars / YouTube / Spotify (coming soon)', icon: Globe },
              { step: 2, title: 'BeatAlytics imports your data automatically', icon: Activity },
              { step: 3, title: 'You get instant insights on your beats', icon: BarChart3 },
              { step: 4, title: 'Use data to boost your sales & exposure', icon: TrendingUp },
            ].map((s,i)=> (
              <GlassCard key={i} className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Pill>Step {s.step}</Pill>
                  <s.icon className="size-5 text-white/70" />
                </div>
                <p className="text-white/80 text-sm">{s.title}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* FOMO */}
      <Section id="fomo" className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <GlassCard className="p-8 text-center">
            <p className="text-xl md:text-2xl text-white/90 mb-2">Producers using BeatAlytics increase their sales by an average of <span style={{ color: neon.green }}>22%</span> within 60 days.</p>
            <p className="text-white/70">Join early and lock in lifetime access to Pro pricing.</p>
          </GlassCard>
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="cta" className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold">Your Beats Deserve Better Data.</h3>
          <p className="mt-3 text-white/80">Turn your catalog into a real business — with insights that matter.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold" style={{ background: neon.green, color: '#0B0B0F' }}>
              Start Free Now <ArrowRight className="size-4" />
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
            <p className="mt-3 text-white/70 text-sm">Clean analytics for beatmakers, producers, and digital music entrepreneurs.</p>
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
