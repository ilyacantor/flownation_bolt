export interface PerformanceMetrics {
  ftp: number;
  weight: number;
  wpkg: number;
  ctl: number;
  atl: number;
  tsb: number;
  readinessScore: number;
  readinessAdvice: string;
}

export const mockPerformanceData: PerformanceMetrics = {
  ftp: 285,
  weight: 72,
  wpkg: 3.96,
  ctl: 82,
  atl: 76,
  tsb: 6,
  readinessScore: 78,
  readinessAdvice: 'Readiness Score: 78/100 - You are well-rested and primed for a solid training block. Your CTL is trending upward with manageable fatigue. Consider scheduling a high-intensity session or race this week.',
};

export const ctlHistory = [
  { date: 'Week 1', ctl: 65 },
  { date: 'Week 2', ctl: 68 },
  { date: 'Week 3', ctl: 72 },
  { date: 'Week 4', ctl: 75 },
  { date: 'Week 5', ctl: 78 },
  { date: 'Week 6', ctl: 80 },
  { date: 'Week 7', ctl: 82 },
];

// Generate 200 days of training load data
export const trainingLoadData = Array.from({ length: 200 }, (_, i) => {
  const date = new Date('2024-05-06');
  date.setDate(date.getDate() + i);

  // Generate CTL (Chronic Training Load) - gradually increasing trend from left to right
  const baseCtl = 45 + (i / 200) * 45;
  const ctlVariation = Math.sin(i / 10) * 5;
  const ctl = baseCtl + ctlVariation;

  // Generate ATL (Acute Training Load) - more volatile
  const baseAtl = 40 + (i / 200) * 25;
  const atlVariation = Math.sin(i / 3.5) * 15 + Math.cos(i / 2) * 8;
  const atl = baseAtl + atlVariation;

  // Generate TSB (Training Stress Balance)
  const tsb = ctl - atl;

  // Generate daily training stress score (red dots)
  const hasTss = Math.random() > 0.05; // 95% of days have some training
  const baseTss = hasTss ? 20 + Math.random() * 60 : 0;
  const tss = baseTss + (Math.random() - 0.5) * 20;

  return {
    date: date.toISOString().split('T')[0],
    ctl: Math.max(0, ctl),
    atl: Math.max(0, atl),
    tsb: tsb,
    tss: Math.max(0, tss)
  };
});
