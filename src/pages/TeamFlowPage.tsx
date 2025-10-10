import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Users, Mail, Bike, Mountain, Waves } from 'lucide-react';

interface Team {
  id: string;
  name: string;
  purpose: string;
  contact: string;
  location: string;
  size: number;
  type: string;
  description: string;
}

const mockTeams: Team[] = [
  {
    id: 'team-1',
    name: 'Bay Area Road Warriors',
    purpose: 'Competitive road racing and training',
    contact: 'captain@bayarearoadwarriors.com',
    location: 'San Francisco',
    size: 24,
    type: 'Road',
    description: 'We focus on competitive road racing with structured training plans. Weekly group rides and race support.'
  },
  {
    id: 'team-2',
    name: 'Marin Mountain Shredders',
    purpose: 'Mountain biking trails and adventures',
    contact: 'info@marinshredders.com',
    location: 'Marin',
    size: 18,
    type: 'MTB',
    description: 'Technical trail riding in Marin County. All skill levels welcome for weekend adventures.'
  },
  {
    id: 'team-3',
    name: 'Peninsula Tri Club',
    purpose: 'Triathlon training and racing',
    contact: 'coach@peninsulatri.com',
    location: 'Palo Alto',
    size: 32,
    type: 'Triathlon',
    description: 'Multi-sport training with coaching support. Swim, bike, run sessions throughout the week.'
  },
  {
    id: 'team-4',
    name: 'East Bay Gravel Grinders',
    purpose: 'Gravel riding and bikepacking',
    contact: 'rides@eastbaygravel.com',
    location: 'Oakland',
    size: 15,
    type: 'Gravel',
    description: 'Exploring backroads and gravel routes. Monthly bikepacking trips and social rides.'
  },
  {
    id: 'team-5',
    name: 'South Bay Cycling Club',
    purpose: 'Social and recreational cycling',
    contact: 'hello@southbaycycling.com',
    location: 'San Jose',
    size: 45,
    type: 'Road',
    description: 'Friendly social rides for all abilities. Coffee stops and community focused.'
  },
  {
    id: 'team-6',
    name: 'Santa Cruz MTB Collective',
    purpose: 'Mountain bike trail maintenance and riding',
    contact: 'trails@scmtbcollective.org',
    location: 'Santa Cruz',
    size: 28,
    type: 'MTB',
    description: 'Trail building, maintenance, and riding. Give back to the trails we love.'
  },
  {
    id: 'team-7',
    name: 'Berkeley Endurance Team',
    purpose: 'Long-distance cycling and ultra events',
    contact: 'endurance@berkeleyteam.com',
    location: 'Berkeley',
    size: 12,
    type: 'Road',
    description: 'Training for centuries, double centuries, and ultra-endurance events.'
  },
  {
    id: 'team-8',
    name: 'Golden Gate Triathletes',
    purpose: 'Triathlon racing and training',
    contact: 'swim@ggtri.com',
    location: 'San Francisco',
    size: 38,
    type: 'Triathlon',
    description: 'Structured triathlon training with certified coaches. Race together, train together.'
  }
];

const typeIcons = {
  Road: Bike,
  MTB: Mountain,
  Triathlon: Waves,
  Gravel: Bike
};

export default function TeamFlowPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0c0f14' }}>
      <Header />
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
