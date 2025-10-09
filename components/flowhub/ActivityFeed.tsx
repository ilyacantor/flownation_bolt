import { ThumbsUp, MessageCircle, Bike } from 'lucide-react';

export default function ActivityFeed() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
      <h2 className="text-white text-2xl font-bold mb-6">My Activity Feed</h2>
      <div>
        <div className="bg-white rounded border border-gray-300 overflow-hidden shadow-sm mb-5">
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                IC
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-900 font-semibold">Ilya C.</div>
                <div className="text-xs text-gray-600">
                  Today at 3:27 PM
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-2">
              <Bike className="text-gray-700 mt-0.5 flex-shrink-0" size={20} />
              <div className="flex-1">
                <h3 className="text-gray-900 font-bold text-lg leading-tight mb-0.5">US Gravel Nationals</h3>
                <p className="text-gray-700 text-sm">Awesome race, great job organizers!</p>
              </div>
            </div>

            <div className="flex gap-6 text-sm mt-3">
              <div>
                <span className="text-gray-600">Distance</span>
                <div className="font-semibold text-gray-900">73.27 mi</div>
              </div>
              <div>
                <span className="text-gray-600">Elev Gain</span>
                <div className="font-semibold text-gray-900">5,784 ft</div>
              </div>
              <div>
                <span className="text-gray-600">Time</span>
                <div className="font-semibold text-gray-900">4h 1m</div>
              </div>
            </div>
          </div>


          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex items-center -space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-purple-400 border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-700">27 kudos</span>
            </div>
          </div>

          <div className="px-4 pb-4 flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ThumbsUp size={18} />
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <MessageCircle size={18} />
            </button>
          </div>
        </div>

        <div className="bg-white rounded border border-gray-300 overflow-hidden shadow-sm mb-5">
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                IC
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-900 font-semibold">Ilya C.</div>
                <div className="text-xs text-gray-600">
                  Yesterday at 6:15 PM
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-2">
              <Bike className="text-gray-700 mt-0.5 flex-shrink-0" size={20} />
              <div className="flex-1">
                <h3 className="text-gray-900 font-bold text-lg leading-tight mb-0.5">Wednesday Night Worlds</h3>
                <p className="text-gray-700 text-sm">Fast group ride with the team</p>
              </div>
            </div>

            <div className="flex gap-6 text-sm mt-3">
              <div>
                <span className="text-gray-600">Distance</span>
                <div className="font-semibold text-gray-900">73.27 mi</div>
              </div>
              <div>
                <span className="text-gray-600">Elev Gain</span>
                <div className="font-semibold text-gray-900">5,784 ft</div>
              </div>
              <div>
                <span className="text-gray-600">Time</span>
                <div className="font-semibold text-gray-900">4h 1m</div>
              </div>
            </div>
          </div>


          <div className="px-4 py-3 bg-blue-50 border-t border-blue-100">
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-800 font-medium">Local Legend</span>
            </div>
          </div>

          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex items-center -space-x-2">
                <div className="w-6 h-6 rounded-full bg-red-400 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-700">27 kudos</span>
            </div>
          </div>

          <div className="px-4 pb-4 flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ThumbsUp size={18} />
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <MessageCircle size={18} />
            </button>
          </div>
        </div>

        <div className="bg-white rounded border border-gray-300 overflow-hidden shadow-sm mb-5">
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                IC
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-900 font-semibold">Ilya C.</div>
                <div className="text-xs text-gray-600">
                  2 days ago at 7:30 AM
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-2">
              <Bike className="text-gray-700 mt-0.5 flex-shrink-0" size={20} />
              <div className="flex-1">
                <h3 className="text-gray-900 font-bold text-lg leading-tight mb-0.5">Morning Commute</h3>
              </div>
            </div>

            <div className="flex gap-6 text-sm mt-3">
              <div>
                <span className="text-gray-600">Distance</span>
                <div className="font-semibold text-gray-900">12.4 mi</div>
              </div>
              <div>
                <span className="text-gray-600">Elev Gain</span>
                <div className="font-semibold text-gray-900">456 ft</div>
              </div>
              <div>
                <span className="text-gray-600">Time</span>
                <div className="font-semibold text-gray-900">48m</div>
              </div>
            </div>
          </div>


          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex items-center -space-x-2">
                <div className="w-6 h-6 rounded-full bg-pink-400 border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-700">5 kudos</span>
            </div>
          </div>

          <div className="px-4 pb-4 flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ThumbsUp size={18} />
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
