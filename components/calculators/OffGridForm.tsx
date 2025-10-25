"use client";
import { useMemo, useState } from 'react';

export default function OffGridForm() {
  const [consoQuotKwh, setConsoQuotKwh] = useState(10);
  const [joursAutonomie, setJoursAutonomie] = useState(2);
  const [profondeurDecharge, setProfondeurDecharge] = useState(0.5);
  const [tensionSysteme, setTensionSysteme] = useState(48);

  const capaciteBatterieKwh = useMemo(() => {
    return (consoQuotKwh * joursAutonomie) / profondeurDecharge;
  }, [consoQuotKwh, joursAutonomie, profondeurDecharge]);

  const capaciteBatterieAh = useMemo(() => {
    if (!tensionSysteme) return 0;
    return (capaciteBatterieKwh * 1000) / tensionSysteme;
  }, [capaciteBatterieKwh, tensionSysteme]);

  return (
    <div className="card p-6 space-y-4">
      <h3 className="text-lg font-semibold">Calcul Off-grid</h3>
      <div className="grid md:grid-cols-4 gap-4">
        <div>
          <label className="text-sm text-slate-300">Conso quotidienne (kWh)</label>
          <input type="number" step="0.1" value={consoQuotKwh} onChange={(e)=>setConsoQuotKwh(parseFloat(e.target.value)||0)} className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
        <div>
          <label className="text-sm text-slate-300">Jours d’autonomie</label>
          <input type="number" step="1" value={joursAutonomie} onChange={(e)=>setJoursAutonomie(parseInt(e.target.value)||0)} className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
        <div>
          <label className="text-sm text-slate-300">Profondeur de décharge</label>
          <input type="number" step="0.05" value={profondeurDecharge} onChange={(e)=>setProfondeurDecharge(parseFloat(e.target.value)||0)} className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
        <div>
          <label className="text-sm text-slate-300">Tension système (V)</label>
          <input type="number" step="12" value={tensionSysteme} onChange={(e)=>setTensionSysteme(parseInt(e.target.value)||0)} className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
          <div className="text-sm text-slate-300">Capacité batterie requise</div>
          <div className="text-3xl font-bold">{capaciteBatterieKwh.toFixed(2)} kWh</div>
        </div>
        <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
          <div className="text-sm text-slate-300">Capacité approximative</div>
          <div className="text-3xl font-bold">{capaciteBatterieAh.toFixed(0)} Ah @ {tensionSysteme}V</div>
        </div>
      </div>
    </div>
  );
}
