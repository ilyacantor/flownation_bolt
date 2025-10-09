import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UserCircle2 } from 'lucide-react';
import QuickSignupModal from './QuickSignupModal';

export default function GuestNavigation() {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <header className="py-6 px-8 border-b border-gray-800" style={{ background: 'linear-gradient(to bottom, #06b6d4 0%, #0c0f14 25%)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link to="/landing" className="flex items-center gap-1 flex-shrink-0 mr-8">
          <img src="/image.png" alt="FlowNation" className="w-16 h-16" />
          <span className="text-white text-xl font-bold tracking-tight whitespace-nowrap" >
            Flow<span className="text-cyan-400">Nation</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm flex-1 justify-center flex-wrap" >
          <Link to="/landing" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
          <Link to="/solutions" className="text-white hover:text-cyan-400 transition-colors">Solutions</Link>
          <Link to="/flowhub" className="text-white hover:text-cyan-400 transition-colors">FlowHub</Link>
          <Link to="/discover" className="text-white hover:text-cyan-400 transition-colors">Discover</Link>
          <Link to="/buddymatch" className="text-white hover:text-cyan-400 transition-colors">BuddyMatch</Link>
          <Link to="/paddock" className="text-white hover:text-cyan-400 transition-colors">The Paddock</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-lg font-semibold transition-colors" >
            Login
          </button>
          <button onClick={() => setShowSignup(true)} className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors" >
            Get Started
          </button>
          <Link to="/profile" className="text-white hover:text-cyan-400 transition-colors">
            <UserCircle2 size={32} />
          </Link>
        </div>
      </div>
      <QuickSignupModal open={showSignup} onClose={() => setShowSignup(false)} />
    </header>
  );
}
