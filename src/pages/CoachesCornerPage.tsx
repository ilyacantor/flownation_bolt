import { BarChart3, Calendar, Users, TrendingUp, MessageSquare, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CoachesCornerPage() {
  const athletes = [
    {
      name: 'Sarah Johnson',
      ftp: 285,
      trend: '+5%',
      compliance: 92,
      nextSession: 'Tomorrow, 6:00 AM',
    },
    {
      name: 'Mike Chen',
      ftp: 312,
      trend: '+3%',
      compliance: 88,
      nextSession: 'Today, 5:30 PM',
    },
    {
      name: 'Emma Rodriguez',
      ftp: 268,
      trend: '+8%',
      compliance: 95,
      nextSession: 'Tomorrow, 7:00 AM',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E1013] text-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Coaches Corner</h1>
            <p className="text-xl text-gray-400">
              Manage your athletes, track progress, and optimize training programs
            </p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-6 border border-orange-500/30">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="text-orange-400" size={28} />
              <h2 className="text-2xl font-semibold">TrainingPeaks Integration</h2>
            </div>
            <p className="text-gray-300">
              Seamlessly sync workouts, analyze performance metrics, and manage training plans directly from your TrainingPeaks account.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Users className="text-blue-400 mb-3" size={32} />
              <h3 className="text-3xl font-bold mb-1">{athletes.length}</h3>
              <p className="text-gray-400">Active Athletes</p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <Calendar className="text-green-400 mb-3" size={32} />
              <h3 className="text-3xl font-bold mb-1">12</h3>
              <p className="text-gray-400">Sessions This Week</p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <TrendingUp className="text-orange-400 mb-3" size={32} />
              <h3 className="text-3xl font-bold mb-1">91%</h3>
              <p className="text-gray-400">Avg Compliance</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden mb-12">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-semibold">Your Athletes</h2>
            </div>

            <div className="divide-y divide-white/10">
              {athletes.map((athlete, idx) => (
                <div key={idx} className="p-6 hover:bg-white/5 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{athlete.name}</h3>
                      <p className="text-gray-400 text-sm">Next: {athlete.nextSession}</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">FTP</p>
                      <p className="text-lg font-semibold">{athlete.ftp}w</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Progress</p>
                      <p className="text-lg font-semibold text-green-400">{athlete.trend}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Compliance</p>
                      <p className="text-lg font-semibold">{athlete.compliance}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold">Recent Messages</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="font-medium text-sm mb-1">Sarah Johnson</p>
                  <p className="text-gray-400 text-sm">Can we adjust tomorrow's intervals?</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="font-medium text-sm mb-1">Mike Chen</p>
                  <p className="text-gray-400 text-sm">Completed today's workout. Felt strong!</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-green-400" size={24} />
                <h3 className="text-xl font-semibold">Training Plans</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg flex items-center justify-between">
                  <span className="text-sm">Base Building Phase</span>
                  <span className="text-xs text-gray-400">3 athletes</span>
                </div>
                <div className="p-3 bg-white/5 rounded-lg flex items-center justify-between">
                  <span className="text-sm">Race Prep - Criterium</span>
                  <span className="text-xs text-gray-400">2 athletes</span>
                </div>
                <div className="p-3 bg-white/5 rounded-lg flex items-center justify-between">
                  <span className="text-sm">Recovery Week</span>
                  <span className="text-xs text-gray-400">1 athlete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
