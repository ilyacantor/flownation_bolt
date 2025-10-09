import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import QuickSignupModal from '../components/QuickSignupModal';
import GuestNavigation from '../components/GuestNavigation';
import Footer from '../components/Footer';
import { Bike, Mountain, Waves, Footprints, User, Users, Shield, Store } from 'lucide-react';

const GravelerIcon = ({ className, size, strokeWidth }: { className?: string; size?: number; strokeWidth?: number }) => (
  <svg
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="5.5" cy="10" r="2.5" />
    <circle cx="17.5" cy="10" r="2.5" />
    <rect x="9" y="8" width="5" height="1.5" />
    <path d="M9 8.5L5.5 7" />
    <path d="M14 8.5L17.5 7" />
    <path d="M2 15L3 13.5L4.5 15L6 13.5L7.5 15L9 13.5L10.5 15L12 13.5L13.5 15L15 13.5L16.5 15L18 13.5L19.5 15L21 13.5L22 15" />
    <path d="M2 18L3.5 16.5L5 18L6.5 16.5L8 18L9.5 16.5L11 18L12.5 16.5L14 18L15.5 16.5L17 18L18.5 16.5L20 18L21.5 16.5L22 18" />
  </svg>
);

export default function LandingPage() {
  const typeRef = useRef<HTMLDivElement>(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleScrollToTypes = () => {
    typeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col text-white bg-[#0E1013]">
      <GuestNavigation />
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/hero_master.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <div className="border border-white/10 rounded-2xl p-8 backdrop-blur-sm bg-white/5">
            <h1 className="text-6xl font-bold mb-2">Welcome Home!</h1>
            <p className="text-3xl mb-4 text-cyan-400">We think you'll like it here.</p>
            <p className="max-w-2xl text-lg leading-relaxed">
              No fees. No subscriptions. No annoying pop-ups. <br />
              Just connections — and a world built for{' '}
              <span className="text-orange-400 font-semibold">you.</span>
            </p>
          </div>
          <button
            onClick={handleScrollToTypes}
            className="mt-6 text-3xl text-cyan-400 hover:text-orange-400 transition-colors"
          >
            Let us show you what this is about ↓
          </button>
        </div>
      </div>

      {/* Who Are You Section */}
      <section className="w-full py-20 text-center bg-[#0E1013] border-t border-white/10">
        <h2 className="text-4xl font-semibold mb-10">Who Are You?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-8">
          {[
            { label: "I'm an athlete", icon: User, path: '/landing' },
            { label: "I'm a coach", icon: Shield, path: '/landing' },
            { label: 'I run a team', icon: Users, path: '/landing' },
            { label: "I'm your LBS", icon: Store, path: '/landing' }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                to={item.path}
                className="bg-white/5 hover:bg-orange-500/20 hover:border-orange-500 transition-all rounded-2xl p-6 cursor-pointer flex flex-col items-center border border-white/10"
              >
                <Icon className="text-white mb-2" size={48} strokeWidth={1.5} />
                <h3 className="text-lg font-medium">{item.label}</h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Persona Section */}
      <section
        ref={typeRef}
        className="w-full py-20 text-center bg-[#0E1013] border-t border-white/10"
      >
        <h2 className="text-4xl font-semibold mb-10">What's Your Type?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-8">
          {[
            { label: 'Roadie', icon: Bike, path: '/roadie' },
            { label: 'MTBear', icon: Mountain, path: '/mtbear' },
            { label: 'Graveller', icon: GravelerIcon, path: '/graveler' },
            { label: 'Triathlete', icon: Waves, path: '/triathlete' },
            { label: 'Runner', icon: Footprints, path: '/runner' }
          ].map((p, i) => {
            const Icon = p.icon;
            return (
              <Link
                key={i}
                to={p.path}
                className="bg-white/5 hover:bg-orange-500/20 hover:border-orange-500 transition-all rounded-2xl p-6 cursor-pointer flex flex-col items-center border border-white/10"
              >
                <Icon className="text-white mb-2" size={48} strokeWidth={1.5} />
                <h3 className="text-lg font-medium">{p.label}</h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Inline CTA Section */}
      <section className="w-full bg-[#1E1F23] py-16 border-t border-white/10 flex justify-center">
        <div className="max-w-4xl text-center px-6">
          <h4 className="text-3xl font-semibold mb-2 text-white">
            Join the FlowNation Community
          </h4>
          <p className="text-gray-400 mb-6">
            Unlock your full potential, connect with athletes, and personalize
            your journey.
          </p>
          <button
            onClick={() => setShowSignup(true)}
            className="bg-orange-500 text-white rounded-lg px-6 py-3 hover:bg-orange-600 text-lg"
          >
            Join FlowNation
          </button>
          <p className="text-sm text-gray-500 mt-3">
            *Trusted by thousands of endurance athletes worldwide*
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <QuickSignupModal open={showSignup} onClose={() => setShowSignup(false)} />
    </div>
  );
}
