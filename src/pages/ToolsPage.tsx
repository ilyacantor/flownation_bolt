import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  MapPin, Home, BookOpen, Users, Calendar, UserSearch,
  Wrench, Camera, Store, GraduationCap, Shield,
  BarChart3, MessageSquare, ClipboardCheck
} from 'lucide-react';

export default function ToolsPage() {
  const athleteTools = [
    {
      icon: Home,
      name: 'The Paddock',
      desc: 'Your mission control. The first thing you see when you log in, The Paddock organizes your upcoming rides, local community buzz, and race calendar into one clear view.'
    },
    {
      icon: BarChart3,
      name: 'FlowHub',
      desc: 'Your performance dashboard. Connect your Strava, track your progress, analyze your efforts, and find your flow.'
    },
    {
      icon: BookOpen,
      name: 'The Athlete Logbook',
      desc: 'Your daily journal. Go beyond the data and log workout notes, nutrition, sleep quality, and how you felt to get a complete picture of your training.'
    },
    {
      icon: UserSearch,
      name: 'Buddy Finder',
      desc: 'Find your people. Connect with local athletes who match your riding style, goals, and availability.'
    },
    {
      icon: Calendar,
      name: 'Discover Events',
      desc: 'Your next adventure awaits. Search, filter, and register for races, gran fondos, and community events.'
    },
    {
      icon: Users,
      name: 'CoachFinder',
      desc: 'The right coach changes everything. Browse our directory of vetted cycling coaches, filter by specialty, and connect with an expert to guide your journey.'
    },
    {
      icon: Wrench,
      name: 'Equipment Wizard',
      desc: 'Dial in your gear. Track mileage on all your components, get maintenance reminders, and manage your entire stable of bikes and equipment.'
    },
    {
      icon: Camera,
      name: 'Agentic Photo Finder',
      desc: 'Find your best race shots. Our AI agent scours the web for photos of you based on your bib number and facial recognition, bringing them all to you.'
    },
    {
      icon: Store,
      name: 'Support Your LBS',
      desc: 'Strengthen your community. A dedicated feature to help you discover, support, and engage with your Local Bike Shop.'
    },
    {
      icon: GraduationCap,
      name: 'Flow University',
      desc: 'Level up your knowledge. Access a curated library of articles and videos on training principles, nutrition strategies, gear maintenance, and racing tactics from trusted experts.'
    }
  ];

  const coachTools = [
    {
      icon: Shield,
      name: 'CoachingOS',
      desc: 'A complete toolkit to manage your athletes, plan their training, and track their progress towards peak performance.'
    }
  ];

  const teamTools = [
    {
      icon: Users,
      name: 'TeamOS',
      desc: 'The ultimate platform for organizing your club or team. Manage rosters, schedule events, and build your community.'
    }
  ];

  const shopTools = [
    {
      icon: Store,
      name: 'ShopOS',
      desc: 'Integrate your Local Bike Shop directly into the community. Promote your services, list shop rides, and connect with a dedicated audience of local cyclists.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen text-white bg-[#0E1013]">
      <Header />

      <section className="relative py-32 px-8 bg-gradient-to-b from-cyan-900/20 to-[#0E1013] border-b border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The FlowNation Ecosystem: Tools for Your Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to train smarter, connect deeper, and achieve your goals.
          </p>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-cyan-400">For Athletes</h2>
            <p className="text-gray-400 text-lg mb-8">
              Your complete toolkit for training, connecting, and performing at your best.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {athleteTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all">
                    <Icon size={40} className="text-cyan-400 mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                    <p className="text-gray-400">{tool.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-orange-400">For Coaches</h2>
            <p className="text-gray-400 text-lg mb-8">
              Everything you need to elevate your athletes and grow your coaching business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coachTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all">
                    <Icon size={40} className="text-orange-400 mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                    <p className="text-gray-400">{tool.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-green-400">For Teams</h2>
            <p className="text-gray-400 text-lg mb-8">
              Build, manage, and grow your cycling club or racing team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all">
                    <Icon size={40} className="text-green-400 mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                    <p className="text-gray-400">{tool.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">For Shops</h2>
            <p className="text-gray-400 text-lg mb-8">
              Connect with your community and grow your Local Bike Shop.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shopTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
                    <Icon size={40} className="text-blue-400 mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                    <p className="text-gray-400">{tool.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience FlowNation?</h3>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of athletes, coaches, teams, and shops who are already part of the community.
          </p>
          <Link
            to="/landing"
            className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
