import DashboardShell from '@/components/DashboardShell';

export default function MesProjetsPage() {
  const mock = [
    { id: 'P-2025-001', type: 'On-grid', client: 'Alpha SA', date: '2025-09-18' },
    { id: 'P-2025-002', type: 'Off-grid', client: 'Beta Corp', date: '2025-10-02' },
  ];
  return (
    <DashboardShell>
      <h1 className="section-title mb-6">Mes projets</h1>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-800/60">
            <tr>
              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">Client</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mock.map((p) => (
              <tr key={p.id} className="border-t border-slate-700/60">
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.type}</td>
                <td className="p-3">{p.client}</td>
                <td className="p-3">{p.date}</td>
                <td className="p-3"><a className="link" href="#">Télécharger PDF</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}
