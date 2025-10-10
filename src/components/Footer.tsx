import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-8" style={{ background: 'linear-gradient(to top, #06b6d4 0%, #0c0f14 25%)', borderTop: 'none' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-gray-400 text-sm">
            <a href="#company" className="hover:text-white transition-colors">Company</a>
            <Link to="/about/tools" className="hover:text-white transition-colors">Our Tools</Link>
            <a href="#resources" className="hover:text-white transition-colors">Resources</a>
            <a href="#legal" className="hover:text-white transition-colors">Legal</a>
          </div>

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
