import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TriathletePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0c0f14' }}>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <section className="text-center mb-16">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              FlowNation | Triathlete Hub
            </h1>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8">
              Race & Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.ironman.com/im-world-championship" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=400" alt="Ironman World Championship" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Ironman World Championship</h3>
                  <p className="text-gray-300 text-sm">The ultimate test: 2.4mi swim, 112mi bike, 26.2mi run in Kona.</p>
                </div>
              </a>
              <a href="https://www.ironman.com/im703-world-championship" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=400" alt="Ironman 70.3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Ironman 70.3 Worlds</h3>
                  <p className="text-gray-300 text-sm">Half-distance championship for age-group athletes.</p>
                </div>
              </a>
              <a href="https://www.xtri.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=400" alt="XTERRA" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">XTERRA World Championship</h3>
                  <p className="text-gray-300 text-sm">Off-road triathlon with mountain biking and trail running.</p>
                </div>
              </a>
              <a href="https://www.usatriathlon.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=400" alt="USA Triathlon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">USA Triathlon Events</h3>
                  <p className="text-gray-300 text-sm">Sanctioned races from sprint to ultra distance.</p>
                </div>
              </a>
              <a href="https://www.escapefromalcatraztriathlon.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=400" alt="Escape from Alcatraz" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Escape from Alcatraz</h3>
                  <p className="text-gray-300 text-sm">Iconic SF race with frigid bay swim and Sand Ladder climb.</p>
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
                  <img src="https://images.pexels.com/photos/163407/cycling-bike-sports-163407.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="Tri Bikes" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">Tri Bikes</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://www.cervelo.com/en/p-series" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Cervelo P5</a>
                    <a href="https://www.feltracing.com/usa/bikes/triathlon-bikes" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Felt IA Advanced</a>
                    <a href="https://www.specialized.com/us/en/shiv" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Specialized Shiv</a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                <div className="h-32 overflow-hidden">
                  <img src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="Wetsuits" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">Wetsuits</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://www.xterra.com/wetsuits/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• XTERRA Vendetta</a>
                    <a href="https://www.roka.com/collections/wetsuits" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• ROKA Maverick Pro II</a>
                    <a href="https://www.blusevsport.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Blueseventy Helix</a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                <div className="h-32 overflow-hidden">
                  <img src="https://images.pexels.com/photos/437039/pexels-photo-437039.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="GPS Watches" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">Multisport Watches</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://www.garmin.com/en-US/p/621922" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Garmin Forerunner 955</a>
                    <a href="https://www.coros.com/apex2pro.php" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• COROS APEX 2 Pro</a>
                    <a href="https://www.polar.com/us-en/products/pro/vantage-v3" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Polar Vantage V3</a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                <div className="h-32 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="Running Shoes" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">Running Shoes</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://www.nike.com/w/running-shoes-37v7jznik1zy7ok" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Nike Vaporfly 3</a>
                    <a href="https://www.hoka.com/en/us/mens-road/carbon-x-3/1119282.html" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Hoka Carbon X 3</a>
                    <a href="https://www.asics.com/us/en-us/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• ASICS Metaspeed Sky+</a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                <div className="h-32 overflow-hidden">
                  <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="Nutrition" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">Nutrition & Hydration</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://www.maurten.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Maurten Drink Mix 320</a>
                    <a href="https://www.scienceinsport.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• SIS Beta Fuel</a>
                    <a href="https://infinitnutrition.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Infinit Custom Blend</a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
                <div className="h-32 overflow-hidden">
                  <img src="https://images.pexels.com/photos/3621163/pexels-photo-3621163.jpeg?auto=compress&cs=tinysrgb&w=800&h=300" alt="Power Meters" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-cyan-400 text-lg font-bold mb-3">Power & Aero</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <a href="https://www.quarq.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Quarq DZero Power Meter</a>
                    <a href="https://cycling.favero.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Favero Assioma Duo</a>
                    <a href="https://www.profiledesign.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Profile Design Aero Bars</a>
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
              Training Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://www.yelp.com/search?find_desc=swimming+pool&find_loc=San+Francisco%2C+CA" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" alt="Aquatic Park" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Aquatic Park Open Water</h3>
                  <p className="text-gray-300 text-sm">Protected cove for open water swim training year-round.</p>
                </div>
              </a>
              <a href="https://www.yelp.com/search?find_desc=cycling+routes&find_loc=Marin+County%2C+CA" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.pexels.com/photos/163407/cycling-bike-sports-163407.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" alt="Paradise Loop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Paradise Loop</h3>
                  <p className="text-gray-300 text-sm">Classic Marin County bike route with bay views.</p>
                </div>
              </a>
              <a href="https://www.strava.com/segments/673606" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" alt="Crissy Field" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Crissy Field Promenade</h3>
                  <p className="text-gray-300 text-sm">Flat waterfront path for brick workouts and tempo runs.</p>
                </div>
              </a>
              <a href="https://www.marincountyparks.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.pexels.com/photos/220836/pexels-photo-220836.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" alt="Phoenix Lake" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Phoenix Lake Trail</h3>
                  <p className="text-gray-300 text-sm">Trail running circuit popular with triathletes.</p>
                </div>
              </a>
              <a href="https://www.yelp.com/search?find_desc=swimming+pool&find_loc=Palo+Alto%2C+CA" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800&h=500" alt="Rinconada Pool" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Rinconada Pool</h3>
                  <p className="text-gray-300 text-sm">50m outdoor facility with masters swim program.</p>
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-500 italic mt-6 text-center">
              (Later linked to route mapping + training location database.)
            </p>
          </section>

          <section>
            <h2 className="text-white text-3xl font-bold mb-8">
              Community & Clubs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-4">Local Tri Clubs</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <a href="https://www.teamoddity.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Team Oddity</a>
                  <a href="https://www.tripacific.org/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Tri-Pacific</a>
                  <a href="https://www.southendrc.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• South End Rowing Club</a>
                  <a href="https://www.pctr.org/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• PCTR Multisport</a>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-4">Weekly Workouts</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>• Tue Masters Swim — 6 a.m. Rinconada Pool</div>
                  <div>• Thu Bike Intervals — Paradise Loop 6 p.m.</div>
                  <div>• Sat Brick Workout — Crissy Field 7 a.m.</div>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-4">Upcoming Races</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <a href="https://www.escapefromalcatraztriathlon.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Escape from Alcatraz — Jun 2026</a>
                  <a href="https://www.pacificgrove.org/triathlon" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Pacific Grove Triathlon — Sep 2026</a>
                  <a href="https://www.ironman.com/im-california" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Ironman California — Oct 2026</a>
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
