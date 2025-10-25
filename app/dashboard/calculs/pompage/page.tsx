import DashboardShell from '@/components/DashboardShell';
import PumpForm from '@/components/calculators/PumpForm';

export default function PumpPage() {
  return (
    <DashboardShell>
      <h1 className="section-title mb-6">Calcul Pompage solaire</h1>
      <PumpForm />
    </DashboardShell>
  );
}
