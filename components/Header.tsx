import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuickSignupModal from './QuickSignupModal';

export default function Header() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-8" style={{ background: 'linear-gradient(to bottom, #06b6d4 0%, #0c0f14 25%)', borderBottom: 'none' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/landing" className="flex items-center gap-2">
          <img src="/image.png" alt="FlowNation" className="w-12 h-12" />
          <span className="text-white text-xl font-bold tracking-tight" >
            Flow<span className="text-cyan-400">Nation</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm" >
          <Link to="/landing" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
          <Link to="/solutions" className="text-white hover:text-cyan-400 transition-colors">Solutions</Link>
          <Link to="/persona" className="text-white hover:text-cyan-400 transition-colors">FlowHub</Link>
          <Link to="/discover" className="text-white hover:text-cyan-400 transition-colors">Discovery</Link>
          <Link to="/buddymatch" className="text-white hover:text-cyan-400 transition-colors">BuddyMatch</Link>
          <Link to="/paddock" className="text-white hover:text-cyan-400 transition-colors">The Paddock</Link>
          <Link to="/bikeshop" className="text-white hover:text-cyan-400 transition-colors">Support your LBS!</Link>
          <Link to="/profile" className="text-white hover:text-cyan-400 transition-colors">Profile</Link>
        </nav>

        <div className="flex items-center gap-4" >
          <button className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2">
            <span>→</span>
            <span>Login</span>
          </button>
          <button
            onClick={() => setShowSignup(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors flex items-center gap-2"
          >
            <span>✦</span>
            <span>Get Started</span>
          </button>
        </div>
      </div>

      <QuickSignupModal open={showSignup} onClose={() => setShowSignup(false)} />
    </header>
  );
}
