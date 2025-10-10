import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              to="/paddock"
              className="text-white hover:text-cyan-400 transition-colors py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              The Paddock
            </Link>
            <Link
              to="/flowhub"
              className="text-white hover:text-cyan-400 transition-colors py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              FlowHub
            </Link>
            <Link
              to="/discover"
              className="text-white hover:text-cyan-400 transition-colors py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              Discover Events
            </Link>
            <Link
              to="/buddymatch"
              className="text-white hover:text-cyan-400 transition-colors py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              Buddy Finder
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
