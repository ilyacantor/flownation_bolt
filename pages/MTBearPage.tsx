import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MTBearPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0c0f14' }}>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <section className="text-center mb-16">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6" >
              FlowNation | MTBear
            </h1>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8" >
              News & Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.uci.org/mountain-bike/news" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >UCI Mountain Bike World Series</h3>
                <p className="text-gray-300 text-sm" >Elite XC and DH racing at the highest level.</p>
              </a>
              <a href="https://usacycling.org/mountain-bike" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >USA Cycling MTB National Championships</h3>
                <p className="text-gray-300 text-sm" >America's best compete for the stars and stripes jersey.</p>
              </a>
              <a href="https://www.redbull.com/int-en/events/uci-mtb-world-cup-val-di-sole" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Val di Sole World Cup Round Highlights</h3>
                <p className="text-gray-300 text-sm" >Legendary Italian venue hosts world-class racing.</p>
              </a>
              <a href="https://www.bikereg.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Crusher Cup NorCal XC Series</h3>
                <p className="text-gray-300 text-sm" >Regional XC racing with competitive fields.</p>
              </a>
              <a href="https://www.bikereg.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Folsom Lake MTB Series</h3>
                <p className="text-gray-300 text-sm" >Fast and technical NorCal trail racing.</p>
              </a>
              <a href="https://www.seaotterclassic.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Sea Otter Classic</h3>
                <p className="text-gray-300 text-sm" >West Coast's premier cycling festival at Laguna Seca.</p>
              </a>
              <a href="https://www.uci.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Durango 2030 MTB World Championships</h3>
                <p className="text-gray-300 text-sm" >Colorado to host the world's best mountain bikers.</p>
              </a>
            </div>
            <p className="text-sm text-gray-500 italic mt-6 text-center" >
              (Dynamic feed will later connect to UCI / USA Cycling APIs.)
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8" >
              Gear & Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-3" >Suspension</h3>
                <div className="space-y-2 text-gray-300 text-sm" >
                  <a href="https://www.ridefox.com/family.php?m=bike&family=factory" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Fox Factory Suspension</a>
                  <a href="https://www.sram.com/en/rockshox" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• RockShox Suspension</a>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-3" >Bikes</h3>
                <div className="space-y-2 text-gray-300 text-sm" >
                  <a href="https://www.santacruzbicycles.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Santa Cruz Bicycles</a>
                  <a href="https://www.yeticycles.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Yeti Cycles</a>
                  <a href="https://www.pivotcycles.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Pivot Cycles</a>
                  <a href="https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/slash/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Trek Slash</a>
                  <a href="https://www.specialized.com/us/en/enduro" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Specialized Enduro</a>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-3" >Tire Protection</h3>
                <div className="space-y-2 text-gray-300 text-sm" >
                  <a href="https://cushcore.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• CushCore Inserts</a>
                  <a href="https://hucknorris.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Huck Norris Tire Protection</a>
                  <a href="https://www.vitalmtb.com/product/guide/Tires,2" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Tire Reviews – MTB</a>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-3" >Protection & Apparel</h3>
                <div className="space-y-2 text-gray-300 text-sm" >
                  <a href="https://www.pocsports.com/collections/mountain-biking-helmets" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• POC MTB Helmets</a>
                  <a href="https://rideconcepts.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Ride Concepts Shoes</a>
                  <a href="https://www.foxracing.com/collections/mountain-bike-protection" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Fox Racing Protective Gear</a>
                </div>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-cyan-400 text-lg font-bold mb-3" >Bike Parks</h3>
                <div className="space-y-2 text-gray-300 text-sm" >
                  <a href="https://www.northstarcalifornia.com/explore-the-resort/activities-and-events/mountain-biking.aspx" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Northstar California Bike Park</a>
                  <a href="https://www.mammothmountain.com/things-to-do-see/summer-activities/bike-park" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">• Mammoth Mountain Bike Park</a>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic mt-6 text-center" >
              (Later pulls from integrated gear DB.)
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8" >
              Skills & Technique
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.youtube.com/watch?v=nUKG8uRFqkc" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >How to Track Stand</h3>
                <p className="text-gray-300 text-sm" >Master balance and control at zero speed.</p>
              </a>
              <a href="https://www.youtube.com/watch?v=BjVGzP3T9Yc" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Cornering Basics – GMBN</h3>
                <p className="text-gray-300 text-sm" >Body position and line choice for fast turns.</p>
              </a>
              <a href="https://www.youtube.com/watch?v=hPQ-ZYRvVck" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Bunny Hop Fundamentals</h3>
                <p className="text-gray-300 text-sm" >Clear obstacles with timing and technique.</p>
              </a>
              <a href="https://www.youtube.com/watch?v=9ZpWvBGTPbw" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Manual Control Tutorial</h3>
                <p className="text-gray-300 text-sm" >Flow through sections on your rear wheel.</p>
              </a>
              <a href="https://www.youtube.com/watch?v=kVj9JdQz-SQ" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Braking & Body Position</h3>
                <p className="text-gray-300 text-sm" >Control speed and stay balanced on descents.</p>
              </a>
              <a href="https://www.youtube.com/watch?v=GkSe-rSPJ6Y" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Drops & Jumps – Skills Progression</h3>
                <p className="text-gray-300 text-sm" >Build confidence on features step by step.</p>
              </a>
              <a href="https://www.imba.com/resource/trail-solutions-trail-building-and-maintenance" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Trail Etiquette & Maintenance</h3>
                <p className="text-gray-300 text-sm" >Share the trail and give back to the community.</p>
              </a>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8" >
              Trails & Local Scene
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.trailforks.com/region/soquel-demonstration-forest/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Soquel Demo Forest</h3>
                <p className="text-gray-300 text-sm" >Santa Cruz's legendary trail network.</p>
              </a>
              <a href="https://www.trailforks.com/region/skeggs-point/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Skeggs / El Corte de Madera</h3>
                <p className="text-gray-300 text-sm" >Peninsula trails with coastal redwood views.</p>
              </a>
              <a href="https://www.trailforks.com/trails/saratoga-gap-trail/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Saratoga Gap Trail</h3>
                <p className="text-gray-300 text-sm" >Classic Santa Cruz Mountains singletrack.</p>
              </a>
              <a href="https://www.parks.ca.gov/?page_id=549" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Wilder Ranch State Park</h3>
                <p className="text-gray-300 text-sm" >Coastal trails with ocean views near Santa Cruz.</p>
              </a>
              <a href="https://www.trailforks.com/region/santa-teresa-county-park/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Santa Teresa County Park</h3>
                <p className="text-gray-300 text-sm" >South Bay favorite with rolling terrain.</p>
              </a>
              <a href="https://svmtb.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Silicon Valley Mountain Bikers</h3>
                <p className="text-gray-300 text-sm" >Local MTB community and trail advocacy.</p>
              </a>
              <a href="https://www.stevenscreektrail.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Friends of Stevens Creek Trail</h3>
                <p className="text-gray-300 text-sm" >Trail stewardship and community rides.</p>
              </a>
              <a href="https://www.romp.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >ROMP Trail Volunteers</h3>
                <p className="text-gray-300 text-sm" >Building and maintaining Santa Cruz trails.</p>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-white text-3xl font-bold mb-8" >
              Pro Riders & Profiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.nino-schurter.ch/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Nino Schurter</h3>
                <p className="text-gray-300 text-sm" >XC Legend – 10x World Champion</p>
              </a>
              <a href="https://www.teamusa.org/usa-cycling/athletes/kate-courtney" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Kate Courtney</h3>
                <p className="text-gray-300 text-sm" >Team USA XC – 2018 World Champion</p>
              </a>
              <a href="https://www.redbull.com/int-en/athlete/loic-bruni" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Loïc Bruni</h3>
                <p className="text-gray-300 text-sm" >Downhill World Champion – Speed and style</p>
              </a>
              <a href="https://www.redbull.com/int-en/athlete/myriam-nicole" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Myriam Nicole</h3>
                <p className="text-gray-300 text-sm" >DH Elite – 2019 World Champion</p>
              </a>
              <a href="https://www.canyon.com/en-us/racing/evie-richards/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Evie Richards</h3>
                <p className="text-gray-300 text-sm" >XC World Champion – Rising star</p>
              </a>
              <a href="https://www.redbull.com/int-en/athlete/jackson-goldstone" target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all group">
                <h3 className="text-white text-lg font-bold mb-2" >Jackson Goldstone</h3>
                <p className="text-gray-300 text-sm" >Freeride / DH Prodigy – Next generation</p>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
