"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function AuthPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="card w-full max-w-md p-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 h-40 w-40 bg-primary/20 blur-2xl rounded-full" />
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center font-black">GE</div>
          <span className="font-semibold">Green Energy</span>
        </div>

        <div className="flex gap-2 text-sm mb-6">
          <button className={`px-4 py-2 rounded-lg border ${mode==='signin' ? 'bg-primary text-white border-primary' : 'border-slate-700'}`} onClick={() => setMode('signin')}>Se connecter</button>
          <button className={`px-4 py-2 rounded-lg border ${mode==='signup' ? 'bg-primary text-white border-primary' : 'border-slate-700'}`} onClick={() => setMode('signup')}>Créer un compte</button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="vous@domaine.com" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Mot de passe</label>
            <input type="password" className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="********" />
          </div>
          {mode === 'signup' && (
            <div>
              <label className="text-sm text-slate-300">Confirmation</label>
              <input type="password" className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="********" />
            </div>
          )}
          <div className="flex items-center justify-between text-sm">
            <Link href="#" className="link">Mot de passe oublié ?</Link>
            <button type="button" onClick={() => (window.location.href = '/dashboard')} className="btn-primary">{mode==='signin' ? 'Se connecter' : 'Créer un compte'}</button>
          </div>
        </form>

        <div className="mt-6">
          <button className="w-full inline-flex items-center justify-center gap-2 border border-slate-700 rounded-lg px-4 py-2 hover:border-slate-600 transition-colors">
            <svg className="h-5 w-5" viewBox="0 0 533.5 544.3" aria-hidden="true"><path fill="#4285F4" d="M533.5 278.4c0-18.5-1.7-36.3-4.9-53.6H272.1v101.5h146.9c-6.3 34-25 62.7-53.4 82v68.2h86.1c50.4-46.4 81.8-114.7 81.8-198.1z"/><path fill="#34A853" d="M272.1 544.3c72.6 0 133.6-24 178.1-65.2l-86.1-68.2c-23.9 16.1-54.6 25.6-92 25.6-70.7 0-130.7-47.7-152.2-111.8H32.3v70.3c44.3 87.8 134.7 149.3 239.8 149.3z"/><path fill="#FBBC05" d="M119.9 324.7c-10.3-30.9-10.3-64.3 0-95.2V159.2H32.3c-41.8 83.6-41.8 182.3 0 266.1l87.6-70.6z"/><path fill="#EA4335" d="M272.1 107.7c39.5-.6 77.2 13.7 106.2 40.4l78.9-78.9C403.8 24.8 340.5-.8 272.1 0 167 0 76.6 61.5 32.3 149.2l87.6 70.3c21.4-64 81.5-111.8 152.2-111.8z"/></svg>
            <span>Continuer avec Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
