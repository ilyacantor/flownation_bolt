import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuickSignupModal from '../components/QuickSignupModal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import TeaserCard from '../components/TeaserCard';
import { User, Users, Shield, Store, TrendingUp } from 'lucide-react';
import { mockRiders } from '../data/mockRiders.js';

export default function LandingPage() {
  const [showSignup, setShowSignup] = useState(false);
  const [matchCount, setMatchCount] = useState(0);

  useEffect(() => {
    const count = mockRiders.filter((rider: any) => rider.city === 'San Francisco').length;
    setMatchCount(count);
  }, []);

  return (
    <div className="flex flex-col text-white bg-[#0E1013]">
      <Header />
      <HeroSection />

      {/* Who Are You Section */}
      <section className="w-full py-12 md:py-20 text-center bg-[#0E1013] border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-10 px-4">Who Are You?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto px-4 md:px-8">
          {[
            { label: "I'm an athlete", icon: User, path: '/flowhub' },
            { label: "I'm a coach", icon: Shield, path: '/coach-landing' },
            { label: 'I run a team', icon: Users, path: '/team-landing' },
            { label: "I'm your LBS", icon: Store, path: '/lbs-landing' },
            { label: "I'm an investor", icon: TrendingUp, path: '/about/tools' }
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
      <section className="w-full bg-[#1E1F23] py-12 md:py-16 border-t border-white/10 flex justify-center">
        <div className="max-w-4xl text-center px-4 md:px-6">
          <h4 className="text-2xl md:text-3xl font-semibold mb-2 text-white">
            Join the FlowNation Community
          </h4>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Unlock your full potential, connect with athletes, and personalize
            your journey.
          </p>
          <button
            onClick={() => setShowSignup(true)}
            className="bg-orange-500 text-white rounded-lg px-6 py-3 hover:bg-orange-600 text-base md:text-lg"
          >
            Join FlowNation
          </button>
          <p className="text-xs md:text-sm text-gray-500 mt-3">
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
