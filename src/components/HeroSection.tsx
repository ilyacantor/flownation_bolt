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

      {/* Mobile layout - centered welcome box with teasers below */}
      <div className="lg:hidden relative z-20 flex flex-col min-h-screen p-4 pb-8">
        <div className="flex-1 flex items-center justify-center">
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

        <div className="flex flex-col gap-3 mt-auto">
          <TeaserCard
            icon={<UserPlus size={32} />}
            title="Find Your Ride Buddies"
            highlightText={`${matchCount} Riders`}
            description={`${matchCount} riders match your profile and are looking for a ride this weekend.`}
            linkTo="/buddymatch"
          />
          <TeaserCard
            icon={<Calendar size={32} />}
            title="Find Your Next Race"
            highlightText="25 Events"
            description="events were found around where you are by our agent"
            linkTo="/discover"
          />
          <TeaserCard
            icon={<UsersRound size={32} />}
            title="Join a Team"
            highlightText="8 Teams"
            description="in your area are actively looking for new members."
            linkTo="/teamflow"
          />
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all border border-white/10 backdrop-blur-sm">
            Connect with Strava to Unlock Your Athlete Logbook
          </button>
        </div>
      </div>

      {/* Desktop layout - centered welcome box with sidebar teasers */}
      <div className="hidden lg:block relative z-20 min-h-screen w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
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

        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-80 flex flex-col gap-4">
          <TeaserCard
            icon={<UserPlus size={32} />}
            title="Find Your Ride Buddies"
            highlightText={`${matchCount} Riders`}
            description={`${matchCount} riders match your profile and are looking for a ride this weekend.`}
            linkTo="/buddymatch"
          />
          <TeaserCard
            icon={<Calendar size={32} />}
            title="Find Your Next Race"
            highlightText="25 Events"
            description="events were found around where you are by our agent"
            linkTo="/discover"
          />
          <TeaserCard
            icon={<UsersRound size={32} />}
            title="Join a Team"
            highlightText="8 Teams"
            description="in your area are actively looking for new members."
            linkTo="/teamflow"
          />
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl px-6 py-4 font-semibold text-lg transition-all border border-white/10 backdrop-blur-sm">
            Connect with Strava to Unlock Your Athlete Logbook
          </button>
        </div>
      </div>

      <QuickSignupModal open={showSignup} onClose={() => setShowSignup(false)} />
    </section>
  );
}
