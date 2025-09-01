export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30"
             style={{background: 'radial-gradient(circle, #6D28D9 0%, rgba(109,40,217,0) 60%)'}} />
        <div className="absolute -bottom-24 -right-24 w-[45rem] h-[45rem] rounded-full blur-3xl opacity-30"
             style={{background: 'radial-gradient(circle, #D4AF37 0%, rgba(212,175,55,0) 60%)'}} />
      </div>
      <div className="relative container mx-auto px-6 py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 text-gold-400 px-3 py-1 rounded-full text-xs tracking-wide">
            <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" /> Co-Sell Ready on AWS
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-display leading-tight">
            Build <span className="text-gold-400">supply chain</span> apps at <span className="text-royal-400">royal speed</span>.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            AvalCloud gives founders a production-ready stack to launch consumer distribution & logistics products—
            from order orchestration and inventory, to carrier integrations and AI forecasting—on day one.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://www.linkedin.com/company/1133academy" target="_blank" rel="noreferrer"
               className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gold-500 text-[#0B0219] font-semibold shadow-elevate hover:translate-y-[-1px] transition">
              Follow 1133 Academy on LinkedIn
            </a>
            <a href="#demo" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/10 ring-1 ring-white/10 hover:bg-white/20 transition">
              See the Demo Stack
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-white/60">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-royal-500" /> Multi-tenant SaaS</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-royal-500" /> Event-driven</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-royal-500" /> AI-native</div>
          </div>
        </div>
      </div>
    </section>
  )
}