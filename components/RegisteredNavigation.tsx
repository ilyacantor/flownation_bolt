import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

export default function RegisteredNavigation() {
  return (
    <header className="py-6 px-8 border-b border-gray-800" style={{ background: 'linear-gradient(to bottom, #06b6d4 0%, #0c0f14 25%)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/landing" className="flex items-center gap-2">
          <img src="/image.png" alt="FlowNation" className="w-12 h-12" />
          <span className="text-white text-xl font-bold tracking-tight" >
            Flow<span className="text-cyan-400">Nation</span>
          </span>
        </Link>
        <nav className="flex items-center gap-8 text-sm flex-1 justify-center" >
          <Link to="/landing" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
          <Link to="/solutions" className="text-white hover:text-cyan-400 transition-colors">Solutions</Link>
          <Link to="/flowhub" className="text-white hover:text-cyan-400 transition-colors">FlowHub</Link>
          <Link to="/discover" className="text-white hover:text-cyan-400 transition-colors">Discover</Link>
          <Link to="/buddymatch" className="text-white hover:text-cyan-400 transition-colors">BuddyMatch</Link>
          <Link to="/paddock" className="text-white hover:text-cyan-400 transition-colors">The Paddock</Link>
          <Link to="/bikeshop" className="text-white hover:text-cyan-400 transition-colors">Support your LBS!</Link>
          <Link to="/profile" className="text-white hover:text-cyan-400 transition-colors">Profile</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/profile" className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-white transition-colors">
            <User size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
