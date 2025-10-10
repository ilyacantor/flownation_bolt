import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

export default function Header() {

  return (
    <header className="py-4 md:py-6 px-4 md:px-8 border-b border-gray-800 relative" style={{ background: 'linear-gradient(to bottom, #06b6d4 0%, #0c0f14 25%)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-4">
        <Link to="/landing" className="flex items-center gap-2 flex-shrink-0">
          <img src="/image.png" alt="FlowNation" className="w-12 h-12 md:w-20 md:h-20" />
          <span className="text-white text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap" >
            Flow<span className="text-cyan-400">Nation</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm flex-1 justify-center" >
          <Link to="/paddock" className="text-white hover:text-cyan-400 transition-colors">The Paddock</Link>
          <Link to="/flowhub" className="text-white hover:text-cyan-400 transition-colors">FlowHub</Link>
          <Link to="/discover" className="text-white hover:text-cyan-400 transition-colors">Discover Events</Link>
          <Link to="/buddymatch" className="text-white hover:text-cyan-400 transition-colors">Buddy Finder</Link>
        </nav>
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link to="/profile" className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
