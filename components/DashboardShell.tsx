import Link from 'next/link';

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const menu = [
    { href: '/dashboard', label: 'Accueil' },
    { href: '/dashboard/mes-projets', label: 'Mes projets' },
    { href: '/dashboard/nouveau-calcul', label: 'Nouveau calcul' },
    { href: '/dashboard/profil', label: 'Profil' },
  ];
  return (
    <div className="container-section py-8 grid md:grid-cols-[260px,1fr] gap-6">
      <aside className="card p-4 h-fit sticky top-24">
        <div className="text-sm font-semibold mb-3">Tableau de bord</div>
        <nav className="space-y-1">
          {menu.map((m) => (
            <Link key={m.href} href={m.href} className="block px-3 py-2 rounded hover:bg-slate-700/40">
              {m.label}
            </Link>
          ))}
          <a href="/" className="block px-3 py-2 rounded hover:bg-slate-700/40 text-red-300">Déconnexion</a>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
