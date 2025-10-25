import DashboardShell from '@/components/DashboardShell';
import OnGridForm from '@/components/calculators/OnGridForm';

export default function OnGridPage() {
  return (
    <DashboardShell>
      <h1 className="section-title mb-6">Calcul On-grid</h1>
      <OnGridForm />
    </DashboardShell>
  );
}
