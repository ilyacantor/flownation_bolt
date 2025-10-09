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

      <div className="relative z-20 flex items-center justify-center h-full px-6 pt-32">
        <div className="bg-black/20 backdrop-blur-sm rounded-3xl px-12 py-8 border border-white/10 w-fit">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 text-center">
            Welcome Home
          </h1>

          <p className="text-3xl md:text-4xl text-blue-400 mb-6 font-semibold text-center">
            We Think You Will Like it Here
          </p>

          <div className="flex justify-center mb-5">
            <button
              onClick={() => setShowSignup(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Let's Go!
            </button>
          </div>

          <p className="text-lg md:text-xl text-gray-200 text-center">
            No fees. No subscriptions. No annoying pop-up ads. Just connections.
          </p>
        </div>
      </div>

      <QuickSignupModal open={showSignup} onClose={() => setShowSignup(false)} />
    </section>
  );
}
