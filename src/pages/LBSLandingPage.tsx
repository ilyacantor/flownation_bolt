import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Store, MapPin, Users, Calendar, Tag, TrendingUp } from 'lucide-react';

export default function LBSLandingPage() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-[#0E1013]">
      <Header />

      <section className="relative py-32 px-8 bg-gradient-to-b from-blue-900/20 to-[#0E1013] border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Store size={80} className="text-blue-400" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            ShopOS: Connect with Your Local Cycling Scene.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Place your Local Bike Shop at the center of the community. Promote shop rides, feature new inventory, offer exclusive deals to FlowNation members, and become the go-to resource for local athletes. Drive foot traffic and build lasting customer loyalty.
          </p>
          <Link
            to="/landing"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all shadow-lg"
          >
            Get My Shop Listed
          </Link>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Grow Your Shop, Build Your Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Local Visibility', desc: 'Get discovered by athletes searching for bike shops in your area. Show up where it matters.' },
              { icon: Calendar, title: 'Promote Shop Rides', desc: 'List and manage your weekly shop rides. Make it easy for the community to join you.' },
              { icon: Tag, title: 'Exclusive Offers', desc: 'Share special deals and discounts with FlowNation members to drive more sales.' },
              { icon: Store, title: 'Showcase Inventory', desc: 'Feature new products, bikes, and gear directly to an engaged audience of cyclists.' },
              { icon: Users, title: 'Community Hub', desc: 'Position your shop as the go-to meeting point and resource for local riders.' },
              { icon: TrendingUp, title: 'Drive Foot Traffic', desc: 'Convert online engagement into in-store visits and build long-term customer relationships.' }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
                  <Icon size={40} className="text-blue-400 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Join the FlowNation Marketplace</h3>
          <p className="text-gray-300 text-lg mb-8">
            Thousands of athletes are already using FlowNation to discover rides, events, and gear. Make sure your shop is part of their journey.
          </p>
          <Link
            to="/landing"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all shadow-lg"
          >
            Claim Your Listing Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
