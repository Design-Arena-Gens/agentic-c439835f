"use client";
import { useMemo, useState } from 'react';

export default function OnGridForm() {
  const [puissanceCreteKw, setPuissanceCreteKw] = useState(5);
  const [irradiationKwhM2Jour, setIrradiationKwhM2Jour] = useState(5.5);
  const [rendementSysteme, setRendementSysteme] = useState(0.8);

  const productionJournaliereKwh = useMemo(() => {
    return puissanceCreteKw * irradiationKwhM2Jour * rendementSysteme;
  }, [puissanceCreteKw, irradiationKwhM2Jour, rendementSysteme]);

  return (
    <div className="card p-6 space-y-4">
      <h3 className="text-lg font-semibold">Calcul On-grid</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm text-slate-300">Puissance crête (kWc)</label>
          <input type="number" step="0.1" value={puissanceCreteKw} onChange={(e)=>setPuissanceCreteKw(parseFloat(e.target.value)||0)} className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
        <div>
          <label className="text-sm text-slate-300">Irradiation (kWh/m²/j)</label>
          <input type="number" step="0.1" value={irradiationKwhM2Jour} onChange={(e)=>setIrradiationKwhM2Jour(parseFloat(e.target.value)||0)} className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
        <div>
          <label className="text-sm text-slate-300">Rendement système</label>
          <input type="number" step="0.01" value={rendementSysteme} onChange={(e)=>setRendementSysteme(parseFloat(e.target.value)||0)} className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
      </div>
      <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
        <div className="text-sm text-slate-300">Production journalière estimée</div>
        <div className="text-3xl font-bold">{productionJournaliereKwh.toFixed(2)} kWh/j</div>
      </div>
    </div>
  );
}
