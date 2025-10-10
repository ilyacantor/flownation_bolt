import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Users,
  Target,
  UserCheck,
  Camera,
  BookOpen,
  UsersRound,
  GraduationCap,
  Store,
  Search,
  Wrench,
  Activity,
  Calendar
} from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'The Paddock',
      subtitle: 'Community Hub',
      description: 'Welcome to The Paddock — the digital clubhouse for endurance athletes. Discover rides, join events, and connect with local experts who keep you moving. It\'s where your flow meets your community.',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
      link: '/paddock'
    },
    {
      title: 'My Hub',
      subtitle: 'Personal Dashboard',
      description: 'An inward-looking space for your personal training calendar, Strava feed, and performance stats. Your command center for athletic excellence.',
      icon: Activity,
      color: 'from-orange-500 to-red-600',
      link: '/flowhub'
    },
    {
      title: 'BuddyMatch',
      subtitle: 'Intelligent Matchmaking',
      description: 'Our killer app. An agentic system that connects athletes with compatible riding partners based on pace, location, goals, and personality.',
      icon: UserCheck,
      color: 'from-pink-500 to-rose-600',
      link: '/buddymatch'
    },
    {
      title: 'Agentic Photo Finder',
      subtitle: 'Automated Race Photos',
      description: 'Automatically finds and aggregates your race photos from across the web. Never lose track of those epic moments again.',
      icon: Camera,
      color: 'from-violet-500 to-purple-600',
      link: '#'
    },
    {
      title: 'The Athlete Logbook',
      subtitle: 'Your Permanent Record',
      description: 'The central, permanent record of your race history, results, and photos. Your athletic legacy preserved forever.',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-600',
      link: '#'
    },
    {
      title: 'TeamFlow',
      subtitle: 'Team Management Suite',
      description: 'Comprehensive tools for amateur teams including a public Team Directory, performance tracking, custom kit ordering, team chat, billing management, and intra-team rankings.',
      icon: UsersRound,
      color: 'from-blue-500 to-indigo-600',
      link: '#'
    },
    {
      title: 'Coaching Directory',
      subtitle: 'Find Your Perfect Coach',
      description: 'A comprehensive, searchable marketplace to help athletes find coaching including vetted human coaches, digital training plans, and AI-enabled platforms.',
      icon: GraduationCap,
      color: 'from-amber-500 to-orange-600',
      link: '#'
    },
    {
      title: 'FlowNation Discover',
      subtitle: 'Event Aggregation Engine',
      description: 'Our backend scraper engine that aggregates the world\'s most comprehensive catalog of endurance events. Never miss a race again.',
      icon: Search,
      color: 'from-cyan-500 to-teal-600',
      link: '/discover'
    },
    {
      title: 'Support Your LBS',
      subtitle: 'Local Bike Shop Hub',
      description: 'A free tool for users to find and support their local bike shops. Keep the heart of cycling alive in your community.',
      icon: Store,
      color: 'from-green-500 to-emerald-600',
      link: '/bikeshop'
    },
    {
      title: 'FlowUniversity',
      subtitle: 'Beginner-Friendly Education',
      description: 'Agentic tools providing guidance and non-shaming education for beginners. Learn at your own pace without judgment.',
      icon: Target,
      color: 'from-rose-500 to-pink-600',
      link: '#'
    },
    {
      title: 'Equipment Wizard',
      subtitle: 'Smart Gear Guidance',
      description: 'AI-powered tool to help you navigate equipment choices with confidence. Get personalized recommendations without the overwhelm.',
      icon: Wrench,
      color: 'from-slate-500 to-gray-600',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E1013] text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Solutions Built for <span className="text-cyan-400">Athletes</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            A comprehensive ecosystem designed to support every aspect of your endurance sports journey.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From finding riding partners to managing teams, from discovering events to tracking your legacy.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={index}
                  to={solution.link}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wide">
                      {solution.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-6 flex items-center text-cyan-400 group-hover:text-orange-400 transition-colors">
                      <span className="text-sm font-semibold mr-2">Learn More</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience FlowNation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of athletes who have found their community, improved their performance, and discovered their potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/landing"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              to="/paddock"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all"
            >
              Explore The Paddock
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            No fees. No subscriptions. No annoying pop-ups. Just connections.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
