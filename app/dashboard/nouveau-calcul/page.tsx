import DashboardShell from '@/components/DashboardShell';

export default function NouveauCalculPage() {
  const calculators = [
    { title: 'On-grid', href: '/dashboard/calculs/on-grid' },
    { title: 'Off-grid', href: '/dashboard/calculs/off-grid' },
    { title: 'Pompage solaire', href: '/dashboard/calculs/pompage' },
  ];
  return (
    <DashboardShell>
      <h1 className="section-title mb-6">Nouveau calcul</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {calculators.map((c) => (
          <a key={c.href} href={c.href} className="card p-6 hover:translate-y-[-2px] transition-all">
            <h3 className="font-semibold">{c.title}</h3>
            <span className="link mt-2 inline-block">Démarrer →</span>
          </a>
        ))}
      </div>
    </DashboardShell>
  );
}
