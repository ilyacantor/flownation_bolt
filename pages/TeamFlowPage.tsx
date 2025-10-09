import GuestNavigation from '../components/GuestNavigation';
import Footer from '../components/Footer';
import { mockTeams } from '../data/mockTeams';
import { MapPin, Users, Mail, Bike, Mountain, Waves } from 'lucide-react';

const typeIcons = {
  Road: Bike,
  MTB: Mountain,
  Triathlon: Waves,
  Gravel: Bike
};

export default function TeamFlowPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0c0f14' }}>
      <GuestNavigation />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <section className="text-center mb-12">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              TeamFlow
            </h1>
            <p className="text-gray-300 text-lg">
              Find and join teams in your area looking for new members
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockTeams.map((team) => {
              const Icon = typeIcons[team.type as keyof typeof typeIcons] || Bike;
              return (
                <div
                  key={team.id}
                  className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-cyan-400 flex-shrink-0">
                      <Icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-white text-2xl font-bold mb-1">
                        {team.name}
                      </h2>
                      <p className="text-gray-400 text-sm mb-2">{team.purpose}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{team.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin size={16} className="text-cyan-400" />
                      <span>{team.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Users size={16} className="text-cyan-400" />
                      <span>{team.size} members</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Mail size={16} className="text-cyan-400" />
                      <a
                        href={`mailto:${team.contact}`}
                        className="hover:text-cyan-400 transition-colors"
                      >
                        {team.contact}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                      Request to Join
                    </button>
                    <button className="flex-1 bg-gray-800/70 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors border border-gray-700">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
