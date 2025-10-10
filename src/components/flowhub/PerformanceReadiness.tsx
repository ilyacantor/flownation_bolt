import { Activity, TrendingUp, Zap } from 'lucide-react';
import { mockPerformanceData, ctlHistory, trainingLoadData } from '../../mock/flowhub_performance';

export default function PerformanceReadiness() {
  const { ftp, wpkg, ctl, atl, tsb, readinessScore, readinessAdvice } = mockPerformanceData;

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <Activity className="text-cyan-400" size={24} />
        <h2 className="text-white text-2xl font-bold">Performance & Readiness</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">FTP</div>
          <div className="text-2xl font-bold text-white">{ftp}W</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">W/kg</div>
          <div className="text-2xl font-bold text-white">{wpkg}</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">CTL</div>
          <div className="text-2xl font-bold text-cyan-400">{ctl}</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">ATL</div>
          <div className="text-2xl font-bold text-orange-400">{atl}</div>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="text-yellow-400" size={20} />
          <div className="text-sm font-semibold text-white">
            Training Load Chart
          </div>
        </div>
        <div className="relative h-64 bg-gray-900/50 rounded-lg p-4">
          <svg width="100%" height="100%" className="overflow-visible">
            {/* Y-axis grid lines */}
            {[0, 20, 40, 60, 80, 100, 120].map((y) => (
              <g key={y}>
                <line
                  x1="0"
                  y1={`${100 - (y / 120) * 100}%`}
                  x2="100%"
                  y2={`${100 - (y / 120) * 100}%`}
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
                <text
                  x="0"
                  y={`${100 - (y / 120) * 100}%`}
                  fill="rgba(255,255,255,0.3)"
                  fontSize="10"
                  dy="3"
                >
                  {y}
                </text>
              </g>
            ))}

            {/* TSB background shading */}
            <defs>
              <linearGradient id="tsbGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(251, 191, 36, 0.2)" />
                <stop offset="50%" stopColor="rgba(251, 191, 36, 0.05)" />
                <stop offset="100%" stopColor="rgba(96, 165, 250, 0.15)" />
              </linearGradient>
            </defs>

            {/* TSB area fill */}
            <path
              d={`M 0,${100 - ((trainingLoadData[0].tsb + 40) / 80) * 100}% ${trainingLoadData
                .map((d, i) => `L ${(i / trainingLoadData.length) * 100}%,${100 - ((d.tsb + 40) / 80) * 100}%`)
                .join(' ')} L 100%,100% L 0,100% Z`}
              fill="url(#tsbGradient)"
            />

            {/* ATL line (magenta/pink) */}
            <path
              d={trainingLoadData
                .map((d, i) => `${i === 0 ? 'M' : 'L'} ${(i / trainingLoadData.length) * 100}%,${100 - (d.atl / 120) * 100}%`)
                .join(' ')}
              fill="none"
              stroke="#ec4899"
              strokeWidth="2.5"
              opacity="0.9"
            />

            {/* CTL area fill (light gray) */}
            <path
              d={`M 0,100% ${trainingLoadData
                .map((d, i) => `L ${(i / trainingLoadData.length) * 100}%,${100 - (d.ctl / 120) * 100}%`)
                .join(' ')} L 100%,100% Z`}
              fill="rgba(209, 213, 219, 0.25)"
            />

            {/* CTL line (gray) */}
            <path
              d={trainingLoadData
                .map((d, i) => `${i === 0 ? 'M' : 'L'} ${(i / trainingLoadData.length) * 100}%,${100 - (d.ctl / 120) * 100}%`)
                .join(' ')}
              fill="none"
              stroke="#d1d5db"
              strokeWidth="2.5"
              opacity="0.9"
            />

            {/* TSB line (orange) */}
            <path
              d={trainingLoadData
                .map((d, i) => `${i === 0 ? 'M' : 'L'} ${(i / trainingLoadData.length) * 100}%,${100 - ((d.tsb + 40) / 80) * 100}%`)
                .join(' ')}
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2.5"
              opacity="0.9"
            />

            {/* Daily TSS dots (red) */}
            {trainingLoadData.map((d, i) => {
              if (d.tss > 0) {
                return (
                  <circle
                    key={i}
                    cx={`${(i / trainingLoadData.length) * 100}%`}
                    cy={`${100 - (d.tss / 120) * 100}%`}
                    r="2.5"
                    fill="#ef4444"
                    opacity="0.8"
                  />
                );
              }
              return null;
            })}

            {/* White trend line going up from left to right */}
            <line
              x1="0"
              y1="90%"
              x2="100%"
              y2="10%"
              stroke="white"
              strokeWidth="2"
              opacity="0.7"
            />
          </svg>

          {/* Date labels */}
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>{trainingLoadData[0].date}</span>
            <span>{trainingLoadData[Math.floor(trainingLoadData.length / 3)].date}</span>
            <span>{trainingLoadData[Math.floor((trainingLoadData.length * 2) / 3)].date}</span>
            <span>{trainingLoadData[trainingLoadData.length - 1].date}</span>
          </div>
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
