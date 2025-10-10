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
    <section className="relative h-screen overflow-hidden bg-black">
      <img
        src="/Peloton_of_road_cyclists_on_winding_mountain_road__drone_following_overhead__motion_blur__clear_blue.png"
        alt="Cyclists on mountain road"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/25 z-10" />

      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 w-fit">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
              Welcome Home!
            </h1>

            <p className="text-2xl md:text-3xl text-blue-400 mb-4 font-medium">
              We think you'll like it here.
            </p>

            <p className="text-base md:text-lg text-gray-200 mb-1">
              No fees. No subscriptions. No annoying pop-ups.
            </p>

            <p className="text-base md:text-lg text-gray-200">
              Just connections — and a world built for <span className="text-orange-400">you</span>.
            </p>
          </div>

          <div className="w-full lg:w-96 flex flex-col gap-4">
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
      </div>

      <QuickSignupModal open={showSignup} onClose={() => setShowSignup(false)} />
    </section>
  );
}
