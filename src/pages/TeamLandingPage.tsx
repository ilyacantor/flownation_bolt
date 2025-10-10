import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Calendar, MapPin, MessageSquare, Trophy, Heart } from 'lucide-react';

export default function TeamLandingPage() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-[#0E1013]">
      <Header />

      <section className="relative py-32 px-8 bg-gradient-to-b from-orange-900/20 to-[#0E1013] border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Users size={80} className="text-orange-400" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            TeamOS: The Heart of Your Squad.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Unite your team like never before. Organize group rides, manage your event calendar, coordinate race logistics, and foster a vibrant team community. TeamOS is your central hub for communication, scheduling, and team spirit.
          </p>
          <Link
            to="/landing"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all shadow-lg"
          >
            Explore Team Features
          </Link>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Built for Team Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: 'Event Calendar', desc: 'Keep everyone on the same page with a shared calendar for group rides, races, and social events.' },
              { icon: MapPin, title: 'Ride Planning', desc: 'Create and share routes, set meeting points, and coordinate group rides effortlessly.' },
              { icon: MessageSquare, title: 'Team Communication', desc: 'Built-in chat, announcements, and forums keep your squad connected and engaged.' },
              { icon: Trophy, title: 'Race Coordination', desc: 'Manage race logistics, travel plans, and team strategies all in one place.' },
              { icon: Users, title: 'Roster Management', desc: 'Track member profiles, roles, and participation. Easily onboard new riders.' },
              { icon: Heart, title: 'Community Building', desc: 'Foster team spirit with activity feeds, photo sharing, and celebration features.' }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all">
                  <Icon size={40} className="text-orange-400 mb-4" strokeWidth={1.5} />
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
          <h3 className="text-3xl font-bold mb-4">Bring Your Team Together</h3>
          <p className="text-gray-300 text-lg mb-8">
            Whether you're a racing team, a local club, or a group of friends who ride together, TeamOS makes it easy to organize, communicate, and grow.
          </p>
          <Link
            to="/landing"
            className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all shadow-lg"
          >
            Start Building Your Team
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
