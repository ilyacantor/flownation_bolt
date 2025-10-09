import RegisteredNavigation from '../components/RegisteredNavigation';
import Footer from '../components/Footer';
import YourNextRide from '../components/paddock/YourNextRide';
import MatchesCarousel from '../components/paddock/MatchesCarousel';
import ActiveMatches from '../components/paddock/ActiveMatches';
import EventFlow from '../components/paddock/EventFlow';
import FlowBuzz from '../components/paddock/FlowBuzz';

export default function PaddockPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0B0D10' }}>
      <RegisteredNavigation />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">The Paddock</h1>
          <p className="text-gray-400 text-lg">What's happening in my community right now?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-3">
            <YourNextRide />
          </div>

          <div className="lg:col-span-3">
            <ActiveMatches />
          </div>

          <div className="lg:col-span-3">
            <MatchesCarousel />
          </div>

          <div className="lg:col-span-3">
            <EventFlow />
          </div>
        </div>

        <div className="w-full">
          <FlowBuzz />
        </div>
      </div>

      <Footer />
    </div>
  );
}
