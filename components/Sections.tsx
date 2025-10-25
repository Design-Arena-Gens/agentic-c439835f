export function Services() {
  const items = [
    { title: 'Calcul On-grid', desc: 'Dimensionnement de systèmes raccordés au réseau.', href: '/dashboard/calculs/on-grid' },
    { title: 'Calcul Off-grid', desc: 'Systèmes autonomes avec batteries optimisées.', href: '/dashboard/calculs/off-grid' },
    { title: 'Calcul Pompage solaire', desc: 'Dimensionnement de pompes solaires pour l’eau.', href: '/dashboard/calculs/pompage' },
  ];
  return (
    <section id="services" className="container-section py-16 md:py-20">
      <h2 className="section-title">Nos services</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {items.map((s) => (
          <a key={s.title} href={s.href} className="card p-6 hover:translate-y-[-2px] hover:shadow-emerald-500/10 transition-all">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-slate-300 mt-2 text-sm">{s.desc}</p>
            <span className="link mt-4 inline-block">Accéder →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function WhyUs() {
  const items = [
    { title: 'Économie', desc: 'Optimisez coûts et performances.' },
    { title: 'Fiabilité', desc: 'Algorithmes robustes et vérifiés.' },
    { title: 'Durabilité', desc: 'Conçu pour de longues durées de vie.' },
  ];
  return (
    <section className="container-section py-16 md:py-20">
      <h2 className="section-title">Pourquoi nous choisir</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {items.map((i) => (
          <div key={i.title} className="card p-6">
            <h3 className="text-xl font-semibold">{i.title}</h3>
            <p className="text-slate-300 mt-2 text-sm">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="container-section py-16 md:py-20">
      <h2 className="section-title">Témoignages / partenaires</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card p-6">
          <p className="text-slate-300 text-sm">“Interface fluide, calculs fiables. Un gain de temps énorme.”</p>
          <p className="mt-3 text-xs text-slate-400">— Alex, Ingénieur</p>
        </div>
        <div className="card p-6">
          <p className="text-slate-300 text-sm">“Notre équipe dimensionne désormais en quelques minutes.”</p>
          <p className="mt-3 text-xs text-slate-400">— Sana, Bureau d’études</p>
        </div>
        <div className="card p-6">
          <p className="text-slate-300 text-sm">“Excellent pour l’off-grid et le pompage agricole.”</p>
          <p className="mt-3 text-xs text-slate-400">— Moussa, Installateur</p>
        </div>
      </div>
    </section>
  );
}
