import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RunnerPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0c0f14' }}>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <section className="text-center mb-16">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              FlowNation | Runner Hub
            </h1>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8">
              Race & Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.bostonmarathon.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800&h=400" alt="Boston Marathon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Boston Marathon</h3>
                  <p className="text-gray-300 text-sm">The world's oldest annual marathon and running's ultimate goal.</p>
                </div>
              </a>
              <a href="https://www.nyrr.org/tcsnycmarathon" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=800&h=400" alt="NYC Marathon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">NYC Marathon</h3>
                  <p className="text-gray-300 text-sm">Run through all five boroughs in the world's largest marathon.</p>
                </div>
              </a>
              <a href="https://www.baa.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800&h=400" alt="Bay to Breakers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Bay to Breakers</h3>
                  <p className="text-gray-300 text-sm">San Francisco's iconic 12K from the bay to the ocean.</p>
                </div>
              </a>
              <a href="https://www.usatf.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800&h=400" alt="USATF" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">USATF Events</h3>
                  <p className="text-gray-300 text-sm">Official track and field events across the nation.</p>
                </div>
              </a>
              <a href="https://www.parkrun.us/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800&h=400" alt="parkrun" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">parkrun USA</h3>
                  <p className="text-gray-300 text-sm">Free, weekly, timed 5K community runs every Saturday.</p>
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-500 italic mt-6 text-center">
              (Dynamic feed will later connect to race calendar APIs.)
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8">
              Equipment & Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                <div className="h-32 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="Running Shoes" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">Running Shoes</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://www.nike.com/w/running-shoes-37v7jznik1zy7ok" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Nike Vaporfly 3</a>
                    <a href="https://www.hoka.com/en/us/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Hoka Carbon X 3</a>
                    <a href="https://www.adidas.com/us/running-shoes" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Adidas Adizero Adios Pro 3</a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                <div className="h-32 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="GPS Watches" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">GPS Watches</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://www.garmin.com/en-US/c/sports-fitness/running/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Garmin Forerunner 965</a>
                    <a href="https://www.coros.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• COROS PACE 3</a>
                    <a href="https://www.polar.com/us-en" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Polar Vantage V3</a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                <div className="h-32 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="Running Apparel" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">Performance Apparel</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://www.tracksmith.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Tracksmith Singlets</a>
                    <a href="https://www.asics.com/us/en-us/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• ASICS MR Shorts</a>
                    <a href="https://www.saucony.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Saucony Endorphin Collection</a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                <div className="h-32 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="Nutrition" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">Nutrition & Hydration</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://www.maurten.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Maurten Gel 100</a>
                    <a href="https://guenergy.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• GU Energy Gels</a>
                    <a href="https://tailwindnutrition.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Tailwind Endurance Fuel</a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                <div className="h-32 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="Recovery" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">Recovery Tools</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://theragun.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Theragun Prime</a>
                    <a href="https://hyperice.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Hyperice Normatec</a>
                    <a href="https://www.triggerpoint.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• TriggerPoint Foam Rollers</a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                <div className="h-32 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="Training Plans" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">Training Resources</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://www.trainingpeaks.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• TrainingPeaks Plans</a>
                    <a href="https://www.runnersworldonline.com.au/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Runners World Guides</a>
                    <a href="https://www.coachjayjohnson.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Jay Johnson Strength</a>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic mt-6 text-center">
              (Later pulls from integrated gear DB.)
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8">
              Routes & Tracks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://www.strava.com/routes/3183659827949948602" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" alt="Golden Gate Park" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Golden Gate Park Loop</h3>
                  <p className="text-gray-300 text-sm">Iconic SF running route with minimal traffic.</p>
                </div>
              </a>
              <a href="https://www.strava.com/local/us/san-francisco/running/routes/11428" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" alt="The Embarcadero" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">The Embarcadero</h3>
                  <p className="text-gray-300 text-sm">Waterfront run with stunning bay views.</p>
                </div>
              </a>
              <a href="https://www.alltrails.com/trail/us/california/lands-end-trail" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" alt="Lands End Trail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Lands End Trail</h3>
                  <p className="text-gray-300 text-sm">Coastal trail running at its finest.</p>
                </div>
              </a>
              <a href="https://www.strava.com/segments/742909" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" alt="Bayshore Boulevard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Bayshore Boulevard</h3>
                  <p className="text-gray-300 text-sm">Flat, fast route ideal for tempo runs.</p>
                </div>
              </a>
              <a href="https://www.strava.com/segments/607194" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" alt="Stanford Dish" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Stanford Dish Loop</h3>
                  <p className="text-gray-300 text-sm">Popular trail with rolling hills and panoramic views.</p>
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-500 italic mt-6 text-center">
              (Later linked to route mapping + segment leaderboards.)
            </p>
          </section>

          <section>
            <h2 className="text-white text-3xl font-bold mb-8">
              Community & Clubs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-4">Local Running Clubs</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <a href="https://www.dserunners.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• DSE Runners</a>
                  <a href="https://www.sfrc.net/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• San Francisco Running Club</a>
                  <a href="https://www.novemberproject.com/san-francisco-ca/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• November Project SF</a>
                  <a href="https://www.fleetfeet.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Fleet Feet Groups</a>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-4">Weekly Group Runs</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>• Wed Track Workout — Kezar Stadium 6 p.m.</div>
                  <div>• Thu Trail Run — Presidio 6:30 a.m.</div>
                  <div>• Sat Long Run — Golden Gate Park 7 a.m.</div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-4">Upcoming Races</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <a href="https://www.sfmarathon.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• SF Marathon — Jul 2026</a>
                  <a href="https://www.baytobreakers.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Bay to Breakers — May 2026</a>
                  <a href="https://www.bigsurhalf.org/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Big Sur Marathon — Apr 2026</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
