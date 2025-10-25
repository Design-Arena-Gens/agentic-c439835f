"use client";
import { useMemo, useState } from 'react';

export default function PumpForm() {
  const [debitM3h, setDebitM3h] = useState(10);
  const [hauteurManometrique, setHauteurManometrique] = useState(30);
  const [rendementPompe, setRendementPompe] = useState(0.5);

  const puissanceHydrauliqueKw = useMemo(() => {
    // P = rho * g * Q * H (W), rho ~ 1000 kg/m3, g ~ 9.81, Q m3/s
    const qMs = debitM3h / 3600; // m3/s
    const pW = 1000 * 9.81 * qMs * hauteurManometrique;
    return pW / 1000; // kW
  }, [debitM3h, hauteurManometrique]);

  const puissancePvKw = useMemo(() => {
    if (!rendementPompe) return 0;
    return puissanceHydrauliqueKw / rendementPompe;
  }, [puissanceHydrauliqueKw, rendementPompe]);

  return (
    <div className="card p-6 space-y-4">
      <h3 className="text-lg font-semibold">Calcul Pompage solaire</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm text-slate-300">Débit (m³/h)</label>
          <input type="number" step="0.1" value={debitM3h} onChange={(e)=>setDebitM3h(parseFloat(e.target.value)||0)} className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
        <div>
          <label className="text-sm text-slate-300">HMT (m)</label>
          <input type="number" step="1" value={hauteurManometrique} onChange={(e)=>setHauteurManometrique(parseFloat(e.target.value)||0)} className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
        <div>
          <label className="text-sm text-slate-300">Rendement pompe</label>
          <input type="number" step="0.05" value={rendementPompe} onChange={(e)=>setRendementPompe(parseFloat(e.target.value)||0)} className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
          <div className="text-sm text-slate-300">Puissance hydraulique</div>
          <div className="text-3xl font-bold">{puissanceHydrauliqueKw.toFixed(2)} kW</div>
        </div>
        <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
          <div className="text-sm text-slate-300">Puissance PV recommandée</div>
          <div className="text-3xl font-bold">{puissancePvKw.toFixed(2)} kWc</div>
        </div>
      </div>
    </div>
  );
}
