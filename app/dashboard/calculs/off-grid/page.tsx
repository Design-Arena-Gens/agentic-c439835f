import DashboardShell from '@/components/DashboardShell';
import OffGridForm from '@/components/calculators/OffGridForm';

export default function OffGridPage() {
  return (
    <DashboardShell>
      <h1 className="section-title mb-6">Calcul Off-grid</h1>
      <OffGridForm />
    </DashboardShell>
  );
}
