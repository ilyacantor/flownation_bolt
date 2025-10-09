import { Facebook, Twitter, Linkedin, User, UserCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Footer() {
  const { isRegistered, toggleMode } = useAuth();

  return (
    <footer className="py-8" style={{ background: 'linear-gradient(to top, #06b6d4 0%, #0c0f14 25%)', borderTop: 'none' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-gray-400 text-sm" >
            <a href="#company" className="hover:text-white transition-colors">Company</a>
            <a href="#resources" className="hover:text-white transition-colors">Resources</a>
            <a href="#legal" className="hover:text-white transition-colors">Legal</a>
          </div>

          <button
            onClick={toggleMode}
            className="p-2 bg-gray-900/70 hover:bg-gray-800 rounded-lg transition-colors border border-gray-700 flex items-center gap-2"
            title={isRegistered ? "Switch to Guest Mode" : "Switch to Registered Mode"}
          >
            {isRegistered ? (
              <UserCheck className="text-cyan-400" size={20} />
            ) : (
              <User className="text-gray-400" size={20} />
            )}
            <span className="text-xs text-gray-400" >
              {isRegistered ? 'Registered' : 'Guest'}
            </span>
          </button>

          <div className="flex gap-4">
            <a
              href="#facebook"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#twitter"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#linkedin"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
