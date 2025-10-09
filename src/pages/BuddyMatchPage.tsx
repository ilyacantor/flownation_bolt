import { useAuth } from '../context/AuthContext';
import GuestNavigation from '../components/GuestNavigation';
import RegisteredNavigation from '../components/RegisteredNavigation';
import BuddyMatch from '../components/BuddyMatch';
import Footer from '../components/Footer';

export default function BuddyMatchPage() {
  const { isRegistered } = useAuth();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0c0f14' }}>
      {isRegistered ? <RegisteredNavigation /> : <GuestNavigation />}

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Find your match</h1>
            <p className="text-xl text-gray-400">Smart Matching. Real Connection.</p>
          </div>
          <BuddyMatch userId="demo-user" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
