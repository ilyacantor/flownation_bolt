import { User, Settings, Link as LinkIcon, Palette } from 'lucide-react';
import { useState } from 'react';
import RegisteredNavigation from '../components/RegisteredNavigation';
import Footer from '../components/Footer';

export default function ProfileSettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [publicProfile, setPublicProfile] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#0c0f14' }}>
      <aside className="w-48 bg-gray-950 border-r border-gray-800 flex flex-col">
        <div className="flex-1 py-6">
          <nav className="space-y-1 px-3">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-white bg-gray-900 rounded-lg text-sm" >
              <User size={18} />
              <span>Profile</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg text-sm transition-colors" >
              <Settings size={18} />
              <span>Preferences</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg text-sm transition-colors" >
              <LinkIcon size={18} />
              <span>Connections</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg text-sm transition-colors" >
              <Palette size={18} />
              <span>Theme</span>
            </button>
          </nav>
        </div>
        <div className="p-3 space-y-2">
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors" >
            Save Changes
          </button>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors" >
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <RegisteredNavigation />

        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-white text-4xl font-bold mb-8" >
            Profile Settings
          </h1>

          <div className="space-y-6">
            <section className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-cyan-400 text-2xl font-bold mb-6" >
                Profile Information
              </h2>

              <div className="mb-6">
                <div className="flex items-end gap-4 mb-6">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400/30"
                    />
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2" >
                      Profile Photo
                    </p>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors" >
                      Upload New Photo
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block" >
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Jane Doe"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm mb-2 block" >
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="jane.doe@flow-nation.com"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm mb-2 block" >
                      About Me
                    </label>
                    <textarea
                      rows={4}
                      defaultValue="Passionate endurance athlete, always looking for the next challenge. Love cycling, running, and exploring new trails. Member of the FlowNation community since 2022."
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm mb-2 block" >
                      Favorite Events/Sports
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Cycling', 'Triathlon', 'Marathon', 'Trail Running', 'Gravel'].map((sport) => (
                        <span
                          key={sport}
                          className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm"
                          
                        >
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-2 transition-colors" >
                <LinkIcon size={16} />
                Edit Full Profile
              </button>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-cyan-400 text-2xl font-bold mb-4" >
                External Connections
              </h2>
              <p className="text-gray-400 mb-6" >
                Connect your favorite fitness platforms to sync your activities and data.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <span className="text-white font-medium" >
                      Strava
                    </span>
                  </div>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors" >
                    Connect
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <span className="text-white font-medium" >
                      Garmin Connect
                    </span>
                  </div>
                  <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors" >
                    Connected
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                      Z
                    </div>
                    <span className="text-white font-medium" >
                      Zwift
                    </span>
                  </div>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors" >
                    Connect
                  </button>
                </div>
              </div>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-cyan-400 text-2xl font-bold mb-6" >
                Preferences
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3">
                  <span className="text-white text-base" >
                    Dark Mode
                  </span>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`relative w-14 h-7 rounded-full transition-colors ${
                      darkMode ? 'bg-cyan-400' : 'bg-gray-700'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        darkMode ? 'translate-x-8' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-3">
                  <span className="text-white text-base" >
                    Make Profile Public
                  </span>
                  <button
                    onClick={() => setPublicProfile(!publicProfile)}
                    className={`relative w-14 h-7 rounded-full transition-colors ${
                      publicProfile ? 'bg-cyan-400' : 'bg-gray-700'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        publicProfile ? 'translate-x-8' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-3">
                  <span className="text-white text-base" >
                    Email Notifications
                  </span>
                  <button
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className={`relative w-14 h-7 rounded-full transition-colors ${
                      emailNotifications ? 'bg-cyan-400' : 'bg-gray-700'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        emailNotifications ? 'translate-x-8' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
