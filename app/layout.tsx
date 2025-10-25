import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Green Energy – Calculs solaires',
  description: 'Optimisez vos projets solaires facilement.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-slate-800/80 sticky top-0 z-40 bg-slate-900/70 backdrop-blur">
          <div className="container-section flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded bg-primary flex items-center justify-center font-black">GE</div>
              <span className="font-bold">Green Energy</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <Link href="/" className="hover:text-primary">Accueil</Link>
              <Link href="#apropos" className="hover:text-primary">À propos</Link>
              <Link href="#contact" className="hover:text-primary">Contact</Link>
              <Link href="/auth" className="btn-primary text-sm py-2 px-4">Connexion</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer id="contact" className="border-t border-slate-800/80">
          <div className="container-section py-10 grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded bg-primary flex items-center justify-center font-black">GE</div>
                <span className="font-bold">Green Energy</span>
              </div>
              <p className="text-slate-300 text-sm">Solutions de calcul solaire: on-grid, off-grid, pompage.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Liens</h3>
              <ul className="space-y-2 text-sm">
                <li><Link className="link" href="/">Accueil</Link></li>
                <li><Link className="link" href="/auth">Connexion</Link></li>
                <li><Link className="link" href="/dashboard">Tableau de bord</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Réseaux</h3>
              <div className="flex gap-3 text-slate-300 text-sm">
                <a className="link" href="#">Twitter</a>
                <a className="link" href="#">LinkedIn</a>
                <a className="link" href="#">YouTube</a>
              </div>
              <p className="text-xs text-slate-500 mt-4">© {new Date().getFullYear()} Green Energy. Mentions légales.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
