interface IntegrationCardProps {
  name: string;
  logo: string;
  status: 'connected' | 'disconnected';
}

export default function IntegrationCard({ name, logo, status }: IntegrationCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-900/30 rounded-xl border border-gray-800">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
          <img src={logo} alt={name} className="w-6 h-6 object-contain" />
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold" >
            {name}
          </h4>
          <p className="text-green-400 text-xs" >
            {status === 'connected' ? 'Connected' : 'Disconnected'}
          </p>
        </div>
      </div>
      <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-xs font-medium transition-colors" >
        Manage
      </button>
    </div>
  );
}
