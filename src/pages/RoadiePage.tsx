import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RoadiePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0c0f14' }}>
      <Header />
      <main className="pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <section className="text-center mb-10 md:mb-16">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              FlowNation | Roadie
            </h1>
          </section>

          <section className="mb-10 md:mb-16">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              News & Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <a href="https://www.uci.org/road/news" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2">UCI Road World Championships</h3>
                <p className="text-gray-300 text-sm">Elite road racing at the highest level.</p>
              </a>
              <a href="https://www.letour.fr/en/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2">Tour de France</h3>
                <p className="text-gray-300 text-sm">The world's most prestigious cycling race.</p>
              </a>
              <a href="https://usacycling.org/road" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2">USA Cycling Road National Championships</h3>
                <p className="text-gray-300 text-sm">America's best compete for the stars and stripes jersey.</p>
              </a>
              <a href="https://www.giroditalia.it/en/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2">Giro d'Italia</h3>
                <p className="text-gray-300 text-sm">Italy's legendary grand tour.</p>
              </a>
              <a href="https://www.lavuelta.es/en/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2">Vuelta a España</h3>
                <p className="text-gray-300 text-sm">Spain's grueling three-week race.</p>
              </a>
              <a href="https://www.paris-roubaix.fr/en/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2">Paris-Roubaix</h3>
                <p className="text-gray-300 text-sm">The Hell of the North - cobblestone classic.</p>
              </a>
            </div>
            <p className="text-sm text-gray-500 italic mt-6 text-center">
              (Dynamic feed will later connect to UCI / USA Cycling APIs.)
            </p>
          </section>

          <section className="mb-10 md:mb-16">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              Gear & Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-3">Bikes</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <a href="https://www.specialized.com/us/en/tarmac" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Specialized Tarmac</a>
                  <a href="https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/madone/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Trek Madone</a>
                  <a href="https://www.cervelo.com/en" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Cervélo Road Bikes</a>
                  <a href="https://www.giant-bicycles.com/us/bikes-road" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Giant Road Bikes</a>
                  <a href="https://www.cannondale.com/en-us/bikes/road" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Cannondale SuperSix EVO</a>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-3">Wheels & Tires</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <a href="https://www.zipp.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Zipp Wheels</a>
                  <a href="https://www.enve.com/en/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• ENVE Composites</a>
                  <a href="https://www.continental-tires.com/bicycle" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Continental Tires</a>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-3">Components</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <a href="https://www.shimano.com/en/bicycle/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Shimano Dura-Ace</a>
                  <a href="https://www.sram.com/en/sram/road" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• SRAM Red eTap AXS</a>
                  <a href="https://www.campagnolo.com/US/en" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Campagnolo Super Record</a>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-3">Apparel & Accessories</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <a href="https://www.rapha.cc/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Rapha Cycling</a>
                  <a href="https://www.castelli-cycling.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Castelli Clothing</a>
                  <a href="https://www.giro.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Giro Helmets & Shoes</a>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic mt-6 text-center">
              (Will later include user reviews & ratings.)
            </p>
          </section>

          <section className="mb-10 md:mb-16">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              Training & Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-3">Power Meters</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <a href="https://www.stages.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Stages Cycling Power Meters</a>
                  <a href="https://www.quarq.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Quarq Power Meters</a>
                  <a href="https://www.power2max.com/en/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Power2Max</a>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-3">Training Platforms</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <a href="https://www.trainingpeaks.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• TrainingPeaks</a>
                  <a href="https://www.trainerroad.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• TrainerRoad</a>
                  <a href="https://www.zwift.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Zwift</a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10 md:mb-16">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              Community & Events
            </h2>
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <p className="text-gray-300 text-sm mb-4">
                Connect with local road cycling clubs, find group rides, and discover upcoming events in your area.
              </p>
              <div className="space-y-2 text-gray-300 text-sm">
                <a href="https://www.bikereg.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• BikeReg - Find Local Races</a>
                <a href="https://www.active.com/cycling" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Active.com - Cycling Events</a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
