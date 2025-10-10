import { Link } from 'react-router-dom';
import GuestNavigation from '../components/GuestNavigation';
import Footer from '../components/Footer';
import { Shield, Calendar, TrendingUp, Users, MessageCircle, ClipboardCheck } from 'lucide-react';

export default function CoachLandingPage() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-[#0E1013]">
      <GuestNavigation />

      <section className="relative py-32 px-8 bg-gradient-to-b from-cyan-900/20 to-[#0E1013] border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield size={80} className="text-cyan-400" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            CoachingOS: Elevate Your Athletes.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Streamline your coaching with a single, powerful platform. Manage your roster, schedule training blocks, analyze performance data, and communicate seamlessly with your athletes. Spend less time on admin and more time driving results.
          </p>
          <Link
            to="/landing"
            className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all shadow-lg"
          >
            Learn More & Sign Up
          </Link>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Coach Effectively</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Athlete Roster Management', desc: 'Organize and track all your athletes in one place with detailed profiles and training history.' },
              { icon: Calendar, title: 'Training Plan Builder', desc: 'Create, schedule, and assign training blocks with ease. Templates and automation save you hours.' },
              { icon: TrendingUp, title: 'Performance Analytics', desc: 'Access real-time performance data from connected devices and platforms like Strava.' },
              { icon: MessageCircle, title: 'Seamless Communication', desc: 'Built-in messaging and feedback tools keep you connected with your athletes.' },
              { icon: ClipboardCheck, title: 'Progress Tracking', desc: 'Monitor compliance, fatigue, and readiness to optimize training load and prevent injury.' },
              { icon: Shield, title: 'Professional Tools', desc: 'Designed by coaches, for coaches. Every feature is built to make your job easier.' }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all">
                  <Icon size={40} className="text-cyan-400 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Coaching?</h3>
          <p className="text-gray-300 text-lg mb-8">
            Join the growing community of coaches who are spending less time on admin and more time developing champions.
          </p>
          <Link
            to="/landing"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
