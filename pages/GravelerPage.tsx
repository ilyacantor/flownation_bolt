import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GravelerPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0c0f14' }}>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <section className="text-center mb-16">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6" >
              Graveler
            </h1>
          </section>

          <section className="mb-16">
            <h2 className="text-cyan-400 text-3xl font-bold mb-8" >
              News & Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.uci.org/discipline/gravel/6mq1e1F2bWoqTx5vO7zC1m" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">UCI Gravel World Championships</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >UCI Gravel World Championships</h3>
                  <p className="text-gray-300 text-sm" >Official gravel world championships event.</p>
                </div>
              </a>
              <a href="https://ucigravelworldseries.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">UCI Gravel World Series</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >UCI Gravel World Series</h3>
                  <p className="text-gray-300 text-sm" >International gravel racing series.</p>
                </div>
              </a>
              <a href="https://www.lifetimegrandprix.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Lifetime Grand Prix Series</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Lifetime Grand Prix Series</h3>
                  <p className="text-gray-300 text-sm" >Elite gravel racing series with major prize purse.</p>
                </div>
              </a>
              <a href="https://www.unboundgravel.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://www.unboundgravel.com/wp-content/uploads/2025/06/2025_UNBOUND_Race-Day_Dan-Hughes-133-2-scaled.jpg" alt="Unbound Gravel 200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Unbound Gravel 200</h3>
                  <p className="text-gray-300 text-sm" >The world's premier gravel event in Kansas.</p>
                </div>
              </a>
              <a href="https://www.bigsugargravel.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Big Sugar Gravel</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Big Sugar Gravel</h3>
                  <p className="text-gray-300 text-sm" >Iconic Arkansas gravel race.</p>
                </div>
              </a>
              <a href="https://www.seaotterclassic.com/gravel-race" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://www.seaotterclassic.com/wp-content/uploads/2025/06/2026_SOC_WebsiteHeroImage_2048x682_2.jpg" alt="Sea Otter Classic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Sea Otter Classic Gravel Race</h3>
                  <p className="text-gray-300 text-sm" >California's premier cycling festival gravel event.</p>
                </div>
              </a>
              <a href="https://www.crusherinthetushar.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Crusher in the Tushar</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Crusher in the Tushar</h3>
                  <p className="text-gray-300 text-sm" >High-altitude Utah gravel challenge.</p>
                </div>
              </a>
              <a href="https://sbtgrvl.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <img src="https://images.squarespace-cdn.com/content/v1/6228c210eda4f06ce59598e5/1647532582186-EQ3XBACVBY6RS5J9N1SS/logo_wahoo_white-1.png" alt="SBT GRVL" className="w-2/3 h-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >SBT GRVL</h3>
                  <p className="text-gray-300 text-sm" >Colorado's toughest gravel race.</p>
                </div>
              </a>
              <a href="https://www.belgianwaffleride.bike/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Belgian Waffle Ride</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Belgian Waffle Ride</h3>
                  <p className="text-gray-300 text-sm" >Epic mixed-surface endurance event.</p>
                </div>
              </a>
              <a href="https://www.leadvilleraceseries.com/mtb" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src="https://www.leadvilleraceseries.com/wp-content/uploads/2024/12/2025_LeadvilleHomepage.jpg" alt="Leadville Trail 100" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Leadville Trail 100 MTB & Gravel</h3>
                  <p className="text-gray-300 text-sm" >Legendary high-altitude endurance race.</p>
                </div>
              </a>
              <a href="https://www.ruleofthree.bike/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Rule of Three</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Rule of Three – Bentonville</h3>
                  <p className="text-gray-300 text-sm" >Arkansas gravel stage race.</p>
                </div>
              </a>
            </div>
          </section>

          <section className="mb-16 border-t border-gray-800 pt-16">
            <h2 className="text-cyan-400 text-3xl font-bold mb-8" >
              Gear & Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.cervelo.com/en/aspero" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <img src="https://images.prismic.io/cervelo/aFxeH3fc4bHWiuqL_0L0ASBXV2C-PROFILE-Web.png?auto=format,compress" alt="Cervélo Áspero" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Cervélo Áspero</h3>
                  <p className="text-gray-300 text-sm" >Race-oriented gravel bike.</p>
                </div>
              </a>
              <a href="https://www.specialized.com/us/en/diverge/p/199589" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Specialized Diverge STR</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Specialized Diverge STR</h3>
                  <p className="text-gray-300 text-sm" >Suspension-equipped gravel racer.</p>
                </div>
              </a>
              <a href="https://www.canyon.com/en-us/gravel-bikes/all-road-bikes/grail/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Canyon Grail CFR</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Canyon Grail CFR</h3>
                  <p className="text-gray-300 text-sm" >Signature double-decker handlebar design.</p>
                </div>
              </a>
              <a href="https://www.trekbikes.com/us/en_US/checkpoint/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Trek Checkpoint SLR</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Trek Checkpoint SLR</h3>
                  <p className="text-gray-300 text-sm" >Premium carbon gravel platform.</p>
                </div>
              </a>
              <a href="https://www.argon18.com/en-us/bikes/road/dark-matter" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Argon 18 Dark Matter</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Argon 18 Dark Matter</h3>
                  <p className="text-gray-300 text-sm" >Aerodynamic gravel speed machine.</p>
                </div>
              </a>
              <a href="https://www.enve.com/product/g23/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">ENVE G23 Wheels</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >ENVE G23 Wheels</h3>
                  <p className="text-gray-300 text-sm" >Purpose-built gravel carbon wheels.</p>
                </div>
              </a>
              <a href="https://silca.cc/products/silca-super-secret-chain-lube" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Silca Super Secret</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Silca Super Secret Chain Lube</h3>
                  <p className="text-gray-300 text-sm" >Ultra-low friction chain coating.</p>
                </div>
              </a>
              <a href="https://www.rapha.cc/us/en_US/shop/explore-shoes/product/ESP01XX" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Rapha Explore Shoes</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Rapha Explore Shoes</h3>
                  <p className="text-gray-300 text-sm" >Premium gravel cycling footwear.</p>
                </div>
              </a>
              <a href="https://www.pocsports.com/products/ventral-air-mips" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">POC Ventral Air Helmet</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >POC Ventral Air Helmet</h3>
                  <p className="text-gray-300 text-sm" >Lightweight ventilated helmet.</p>
                </div>
              </a>
              <a href="https://tailfin.cc/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Tailfin Aeropack</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Tailfin Aeropack System</h3>
                  <p className="text-gray-300 text-sm" >Aerodynamic bikepacking luggage.</p>
                </div>
              </a>
              <a href="https://www.uswe.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">USWE Hydration Packs</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >USWE Hydration Packs</h3>
                  <p className="text-gray-300 text-sm" >No Dancing Monkey™ hydration systems.</p>
                </div>
              </a>
              <a href="https://www.garmin.com/en-US/p/862365" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Garmin Edge 840 Solar</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Garmin Edge 840 Solar</h3>
                  <p className="text-gray-300 text-sm" >Solar-powered GPS cycling computer.</p>
                </div>
              </a>
              <a href="https://www.hammerhead.io/pages/karoo-3" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Hammerhead Karoo 3</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Hammerhead Karoo 3</h3>
                  <p className="text-gray-300 text-sm" >Advanced GPS bike computer.</p>
                </div>
              </a>
            </div>
          </section>

          <section className="mb-16 border-t border-gray-800 pt-16">
            <h2 className="text-cyan-400 text-3xl font-bold mb-8" >
              Training & Routes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://dirtyfreehub.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <img src="https://dirtyfreehub.org/wp-content/themes/dfh/images/Dirty-Freehub-Logo.png" alt="Dirty Freehub" className="w-2/3 h-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Dirty Freehub Routes</h3>
                  <p className="text-gray-300 text-sm" >Gravel routes in Oregon & NorCal.</p>
                </div>
              </a>
              <a href="https://ridewithgps.com/ambassadors/gravel" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <img src="https://sanity.ridewithgps.com/images/yqxb50ii/production/48a1f7090ea5ba995876283e31e3931fa1d52f0a-188x49.svg" alt="Ride with GPS" className="w-2/3 h-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Ride with GPS Gravel Segments</h3>
                  <p className="text-gray-300 text-sm" >Route planning and navigation platform.</p>
                </div>
              </a>
              <a href="https://www.norcalgravelseries.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">NorCal Gravel Series</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >NorCal Gravel Series</h3>
                  <p className="text-gray-300 text-sm" >Northern California gravel racing series.</p>
                </div>
              </a>
              <a href="https://www.strava.com/routes/new" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Strava Gravel Routes</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Strava Gravel Route Collections</h3>
                  <p className="text-gray-300 text-sm" >Community-built gravel routes.</p>
                </div>
              </a>
              <a href="https://www.skratchlabs.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Skratch Labs</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Skratch Labs Nutrition</h3>
                  <p className="text-gray-300 text-sm" >Sports nutrition for endurance athletes.</p>
                </div>
              </a>
              <a href="https://bikepacking.com/gear/best-hydration-packs-for-cycling/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Hydration System Reviews</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Hydration System Reviews</h3>
                  <p className="text-gray-300 text-sm" >Best hydration packs for cycling.</p>
                </div>
              </a>
              <a href="https://silca.cc/pages/silca-tire-pressure-calculator" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Silca Calculator</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Tire Pressure Calculator – Silca</h3>
                  <p className="text-gray-300 text-sm" >Science-based pressure optimization.</p>
                </div>
              </a>
            </div>
          </section>

          <section className="mb-16 border-t border-gray-800 pt-16">
            <h2 className="text-cyan-400 text-3xl font-bold mb-8" >
              Community & Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.gravellocos.bike/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Gravel Locos</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Gravel Locos – Hico, TX</h3>
                  <p className="text-gray-300 text-sm" >Texas gravel racing festival.</p>
                </div>
              </a>
              <a href="https://www.themidsouthgravel.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Mid South Gravel</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Mid South Gravel</h3>
                  <p className="text-gray-300 text-sm" >Oklahoma's premier gravel event.</p>
                </div>
              </a>
              <a href="https://www.rockcobbler.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Rock Cobbler</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Rock Cobbler – Bakersfield</h3>
                  <p className="text-gray-300 text-sm" >California gravel classic.</p>
                </div>
              </a>
              <a href="https://www.grasshopperadventureseries.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Grasshopper Series</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Grasshopper Adventure Series</h3>
                  <p className="text-gray-300 text-sm" >Colorado adventure gravel series.</p>
                </div>
              </a>
              <a href="https://www.rebeccasprivateidaho.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Rebecca's Private Idaho</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Rebecca's Private Idaho</h3>
                  <p className="text-gray-300 text-sm" >Idaho gravel festival.</p>
                </div>
              </a>
              <a href="https://www.belgianwaffleride.bike/pages/bwr-lawrence" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">BWR Kansas</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >BWR Kansas – Lawrence</h3>
                  <p className="text-gray-300 text-sm" >Kansas edition of BWR series.</p>
                </div>
              </a>
              <a href="https://www.rasputitsagravel.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Rasputitsa</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Rasputitsa Spring Classic – Vermont</h3>
                  <p className="text-gray-300 text-sm" >Vermont mud season gravel race.</p>
                </div>
              </a>
              <a href="https://thepointtopoint.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Point to Point</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Point to Point – Park City</h3>
                  <p className="text-gray-300 text-sm" >Utah mountain gravel race.</p>
                </div>
              </a>
            </div>
          </section>

          <section className="border-t border-gray-800 pt-16">
            <h2 className="text-cyan-400 text-3xl font-bold mb-8" >
              Pro Riders & Profiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.instagram.com/keegels99/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Keegan Swenson</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Keegan Swenson</h3>
                  <p className="text-gray-300 text-sm" >Lifetime GP Champion.</p>
                </div>
              </a>
              <a href="https://www.instagram.com/sophiagomezzz/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Sophia Gomez Villafañe</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Sophia Gomez Villafañe</h3>
                  <p className="text-gray-300 text-sm" >Team Specialized Off-Road.</p>
                </div>
              </a>
              <a href="https://www.instagram.com/alexeyvermeulen/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Alexey Vermeulen</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Alexey Vermeulen</h3>
                  <p className="text-gray-300 text-sm" >Jukebox Off-Road.</p>
                </div>
              </a>
              <a href="https://www.instagram.com/laurendecrescenzo/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Lauren De Crescenzo</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Lauren De Crescenzo</h3>
                  <p className="text-gray-300 text-sm" >Cinch Racing.</p>
                </div>
              </a>
              <a href="https://www.instagram.com/hayleyhunter.smith/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Haley Smith</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Haley Smith</h3>
                  <p className="text-gray-300 text-sm" >Maxxis Factory Gravel.</p>
                </div>
              </a>
              <a href="https://www.instagram.com/rfinsterwald/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Russell Finsterwald</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Russell Finsterwald</h3>
                  <p className="text-gray-300 text-sm" >Specialized Off-Road.</p>
                </div>
              </a>
              <a href="https://www.instagram.com/sarah_sturmy/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Sarah Sturm</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Sarah Sturm</h3>
                  <p className="text-gray-300 text-sm" >Specialized / Rapha.</p>
                </div>
              </a>
              <a href="https://www.instagram.com/ruthwinder/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Ruth Winder</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Ruth Winder</h3>
                  <p className="text-gray-300 text-sm" >Trek Factory Racing.</p>
                </div>
              </a>
              <a href="https://www.instagram.com/iamtedking/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Ted King</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Ted King</h3>
                  <p className="text-gray-300 text-sm" >Untapped / Ride With GPS.</p>
                </div>
              </a>
              <a href="https://www.instagram.com/rosegrantdreams/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Rose Grant</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Rose Grant</h3>
                  <p className="text-gray-300 text-sm" >Juliana Bicycles.</p>
                </div>
              </a>
              <a href="https://www.instagram.com/carolineschiff_/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <div className="h-40 overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Caroline Schiff</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-lg font-bold mb-2" >Caroline Schiff</h3>
                  <p className="text-gray-300 text-sm" >UCI Gravel Worlds Podium 2024.</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
