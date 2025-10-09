interface IntegrationToggleProps {
  name: string;
  status: 'connected' | 'disconnected';
}

export default function IntegrationToggle({ name, status }: IntegrationToggleProps) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 p-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
          <span className="text-white text-lg" >
            {name === 'Strava' ? '🏃' : name === 'Garmin Connect' ? '⌚' : '🚴'}
          </span>
        </div>
        <span className="text-white font-semibold" >
          {name}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={`text-sm font-medium ${
            status === 'connected' ? 'text-green-400' : 'text-red-400'
          }`}
          
        >
          {status === 'connected' ? 'Connected' : 'Disconnected'}
        </span>
        <button
          className={`w-12 h-6 rounded-full transition-all ${
            status === 'connected' ? 'bg-cyan-500' : 'bg-gray-700'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white transition-transform ${
              status === 'connected' ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
