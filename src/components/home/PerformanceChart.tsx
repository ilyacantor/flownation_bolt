interface ChartData {
  label: string;
  value: number;
  color: string;
}

interface PerformanceChartProps {
  title: string;
  data: ChartData[];
  type: 'bar' | 'line';
}

export default function PerformanceChart({ title, data }: PerformanceChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
      <h3 className="text-white text-lg font-bold mb-6" >
        {title}
      </h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400 text-sm" >
                {item.label}
              </span>
              <span className="text-white text-sm font-semibold" >
                {item.value}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
