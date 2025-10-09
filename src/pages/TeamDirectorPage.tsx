import { Trophy, Users, Calendar, DollarSign, ShoppingBag, TrendingUp, Award, UserCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TeamDirectorPage() {
  const features = [
    {
      icon: Trophy,
      title: 'Agentic Results Aggregator',
      description: 'Automatically scrapes race results and highlights team member performances on the team\'s page.',
      color: 'text-yellow-400',
    },
    {
      icon: DollarSign,
      title: 'Rolling Membership & Billing',
      description: 'An automated, subscription-based system where athletes can join anytime and dues are handled seamlessly.',
      color: 'text-green-400',
    },
    {
      icon: UserCheck,
      title: 'Instant Onboarding',
      description: 'New members are automatically granted access to the team calendar, chat channels, and sponsor discounts.',
      color: 'text-blue-400',
    },
    {
      icon: Calendar,
      title: 'Integrated Team Calendar',
      description: 'A dynamic, shared calendar that syncs with each athlete\'s "My Hub," allowing one-click additions of events and trainings.',
      color: 'text-purple-400',
    },
    {
      icon: Award,
      title: 'Automated Sponsor Hub',
      description: 'A central, easily accessible repository for all team sponsor codes and benefits.',
      color: 'text-orange-400',
    },
    {
      icon: Users,
      title: 'Integrated Coaching Directory',
      description: 'Team members can browse, vet, and connect with approved team coaches directly through the platform.',
      color: 'text-cyan-400',
    },
    {
      icon: ShoppingBag,
      title: 'Integrated Team Store & Kit Ordering',
      description: 'An agent-managed system for designing, ordering, and distributing custom team kits and sponsored gear.',
      color: 'text-pink-400',
    },
    {
      icon: TrendingUp,
      title: 'Dynamic Sponsor Showcase',
      description: 'A dedicated section that tracks engagement, providing real ROI data to sponsors.',
      color: 'text-emerald-400',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E1013] text-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Team Director</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The complete team management platform that automates operations, streamlines member engagement, and maximizes sponsor value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/30">
              <Users className="text-blue-400 mb-3" size={40} />
              <h3 className="text-3xl font-bold mb-1">45</h3>
              <p className="text-gray-400">Active Members</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/30">
              <Calendar className="text-green-400 mb-3" size={40} />
              <h3 className="text-3xl font-bold mb-1">23</h3>
              <p className="text-gray-400">Upcoming Events</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl p-6 border border-orange-500/30">
              <Award className="text-orange-400 mb-3" size={40} />
              <h3 className="text-3xl font-bold mb-1">8</h3>
              <p className="text-gray-400">Active Sponsors</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Team Management Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Icon className={feature.color} size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-semibold">Team Directory & Syndication</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-400 mb-4">
                The public-facing Team Directory makes your team discoverable to potential members.
                Our agentic syndication system automatically pushes recruitment notices to athletes in
                your area whose profiles are a good match for your team's culture and requirements.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Smart Recruiting</h4>
                  <p className="text-sm text-gray-400">AI-powered matching finds athletes who fit your team profile</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Public Presence</h4>
                  <p className="text-sm text-gray-400">Showcase your team's achievements and culture to attract talent</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-8 border border-orange-500/30">
              <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Team?</h3>
              <p className="text-gray-300 mb-6">
                Join teams already using FlowNation to streamline operations and grow their communities.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
