import RegisteredNavigation from '../components/RegisteredNavigation';
import CalendarWidget from '../components/flowhub/CalendarWidget';
import ActivityFeed from '../components/flowhub/ActivityFeed';
import PerformanceReadiness from '../components/flowhub/PerformanceReadiness';
import GearLocker from '../components/flowhub/GearLocker';
import TailoredNewsfeed from '../components/flowhub/TailoredNewsfeed';
import FlowUniversity from '../components/flowhub/FlowUniversity';
import Footer from '../components/Footer';

export default function FlowHubPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B0D10' }}>
      <RegisteredNavigation />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">FlowHub</h1>
          <p className="text-gray-400 text-base md:text-lg">Your personalized training and community dashboard</p>
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

      <Footer />
    </div>
  );
}
