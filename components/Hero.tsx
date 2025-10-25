export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>
      <div className="container-section py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-[fadeIn_0.6s_ease-out]">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Optimisez vos projets solaires facilement.</h1>
            <p className="mt-5 text-lg text-slate-300 max-w-2xl">Des calculateurs précis pour vos systèmes On-grid, Off-grid et pompage solaire, avec une interface simple et moderne.</p>
            <div className="mt-8 flex gap-4">
              <a href="/dashboard/nouveau-calcul" className="btn-primary">Créer une note de calcul</a>
              <a href="#services" className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">Explorer</a>
            </div>
          </div>
          <div className="relative animate-[slideIn_0.7s_ease-out]">
            <div className="card p-5">
              <div className="aspect-video rounded-md bg-[url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
