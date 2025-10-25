import DashboardShell from '@/components/DashboardShell';

export default function ProfilPage() {
  return (
    <DashboardShell>
      <h1 className="section-title mb-6">Profil</h1>
      <div className="card p-6 max-w-xl">
        <form className="space-y-4">
          <div>
            <label className="text-sm text-slate-300">Nom</label>
            <input className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2" defaultValue="Utilisateur" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2" defaultValue="vous@domaine.com" />
          </div>
          <button type="button" className="btn-primary">Enregistrer</button>
        </form>
      </div>
    </DashboardShell>
  );
}
