import { useState } from "react";
import QuickSignupModal from "./QuickSignupModal";

export default function HeroSection() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <img
        src="/Peloton_of_road_cyclists_on_winding_mountain_road__drone_following_overhead__motion_blur__clear_blue.png"
        alt="Cyclists on mountain road"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/25 z-10" />

      <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 pt-32 max-w-7xl mx-auto">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl px-10 py-6 border border-white/10">
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
      </div>

      <QuickSignupModal open={showSignup} onClose={() => setShowSignup(false)} />
    </section>
  );
}
