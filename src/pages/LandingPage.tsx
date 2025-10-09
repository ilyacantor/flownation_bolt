import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuickSignupModal from '../components/QuickSignupModal';
import GuestNavigation from '../components/GuestNavigation';
import Footer from '../components/Footer';
import { User, Users, Shield, Store } from 'lucide-react';

export default function LandingPage() {
  const [showSignup, setShowSignup] = useState(false);

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
