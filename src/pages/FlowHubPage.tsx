import RegisteredNavigation from '../components/RegisteredNavigation';
import CalendarWidget from '../components/flowhub/CalendarWidget';
import ActivityFeed from '../components/flowhub/ActivityFeed';
import PerformanceReadiness from '../components/flowhub/PerformanceReadiness';
import GearLocker from '../components/flowhub/GearLocker';
import TailoredNewsfeed from '../components/flowhub/TailoredNewsfeed';
import FlowUniversity from '../components/flowhub/FlowUniversity';

export default function FlowHubPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B0D10' }}>
      <RegisteredNavigation />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-white text-4xl font-bold mb-2">FlowHub</h1>
          <p className="text-gray-400 text-lg">Your personalized training and community dashboard</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <CalendarWidget />
          <PerformanceReadiness />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ActivityFeed />
          <div className="space-y-6">
            <GearLocker />
            <TailoredNewsfeed />
          </div>
        </div>

        <div className="mb-6">
          <FlowUniversity />
        </div>
      </main>

      <footer className="mt-16 py-6 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">FlowNation</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
          <div className="flex gap-4 text-cyan-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">f</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">𝕏</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">in</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
