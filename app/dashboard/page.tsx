import DashboardShell from '@/components/DashboardShell';

export default function DashboardHome() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <h1 className="section-title">Bienvenue 👋</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/dashboard/nouveau-calcul" className="card p-6">
            <h3 className="font-semibold">Créer une note de calcul</h3>
            <p className="text-slate-300 text-sm mt-2">On-grid, Off-grid ou Pompage.</p>
          </a>
          <a href="/dashboard/mes-projets" className="card p-6">
            <h3 className="font-semibold">Mes projets</h3>
            <p className="text-slate-300 text-sm mt-2">Consulter et gérer vos projets.</p>
          </a>
          <a href="/dashboard/profil" className="card p-6">
            <h3 className="font-semibold">Profil</h3>
            <p className="text-slate-300 text-sm mt-2">Informations du compte.</p>
          </a>
        </div>
      </div>
    </DashboardShell>
  );
}
