import { Activity, TrendingUp, Zap } from 'lucide-react';
import { mockPerformanceData, ctlHistory, trainingLoadData } from '../../mock/flowhub_performance';

export default function PerformanceReadiness() {
  const { ftp, wpkg, ctl, atl, tsb, readinessScore, readinessAdvice } = mockPerformanceData;

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <Activity className="text-cyan-400" size={20} />
        <h2 className="text-white text-xl md:text-2xl font-bold">Performance & Readiness</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="bg-gray-800/50 rounded-lg p-3 md:p-4">
          <div className="text-xs text-gray-400 mb-1">FTP</div>
          <div className="text-xl md:text-2xl font-bold text-white">{ftp}W</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-3 md:p-4">
          <div className="text-xs text-gray-400 mb-1">W/kg</div>
          <div className="text-xl md:text-2xl font-bold text-white">{wpkg}</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-3 md:p-4">
          <div className="text-xs text-gray-400 mb-1">CTL</div>
          <div className="text-xl md:text-2xl font-bold text-cyan-400">{ctl}</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-3 md:p-4">
          <div className="text-xs text-gray-400 mb-1">ATL</div>
          <div className="text-xl md:text-2xl font-bold text-orange-400">{atl}</div>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="text-yellow-400" size={20} />
          <div className="text-sm font-semibold text-white">
            Training Load Chart
          </div>
        </div>
        <div className="relative h-64 bg-white rounded-lg overflow-hidden">
          <img
            src="/assets/image copy.png"
            alt="Training Load Chart"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <TrendingUp className="text-cyan-400 mt-0.5" size={20} />
          <div>
            <p className="text-white text-sm leading-relaxed">{readinessAdvice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
