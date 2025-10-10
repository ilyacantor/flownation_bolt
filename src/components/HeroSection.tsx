import { useState, useEffect } from "react";
import QuickSignupModal from "./QuickSignupModal";
import TeaserCard from "./TeaserCard";
import { UserPlus, Calendar, UsersRound } from 'lucide-react';
import { mockRiders } from '../data/mockRiders.js';

export default function HeroSection() {
  const [showSignup, setShowSignup] = useState(false);
  const [matchCount, setMatchCount] = useState(0);

  useEffect(() => {
    const count = mockRiders.filter((rider: any) => rider.city === 'San Francisco').length;
    setMatchCount(count);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <img
        src="/landing1c.png"
        alt="Cyclists on mountain road"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/25 z-10" />

      {/* Mobile layout - centered welcome box */}
      <div className="lg:hidden relative z-20 flex items-center justify-center min-h-screen w-full p-4">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Welcome Home!
          </h1>

          <p className="text-lg sm:text-xl text-blue-400 mb-3 font-medium">
            We think you'll like it here.
          </p>

          <p className="text-sm text-gray-200 mb-1">
            No fees. No subscriptions. No annoying pop-ups.
          </p>

          <p className="text-sm text-gray-200">
            Just connections — and a world built for <span className="text-orange-400">you</span>.
          </p>
        </div>
      </div>

      {/* Desktop layout - centered welcome box */}
      <div className="hidden lg:flex relative z-20 items-center justify-center min-h-screen w-full">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center mx-auto">
          <h1 className="text-5xl xl:text-6xl font-bold text-white mb-2">
            Welcome Home!
          </h1>

          <p className="text-2xl xl:text-3xl text-blue-400 mb-4 font-medium">
            We think you'll like it here.
          </p>

          <p className="text-base xl:text-lg text-gray-200 mb-1">
            No fees. No subscriptions. No annoying pop-ups.
          </p>

          <p className="text-base xl:text-lg text-gray-200">
            Just connections — and a world built for <span className="text-orange-400">you</span>.
          </p>
        </div>
      </div>

      <QuickSignupModal open={showSignup} onClose={() => setShowSignup(false)} />
    </section>
  );
}
