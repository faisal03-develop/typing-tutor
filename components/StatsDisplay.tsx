
import React from 'react';

interface StatsDisplayProps {
  wpm: number;
  accuracy: number;
  errors: number;
}

const StatItem: React.FC<{ label: string; value: number | string, unit?: string }> = ({ label, value, unit }) => (
  <div className="flex flex-col items-center p-3 rounded-lg bg-slate-700/50 min-w-[100px]">
    <span className="text-3xl font-bold text-sky-400">{value}</span>
    <span className="text-xs text-slate-400 uppercase tracking-wider">{label}{unit && ` (${unit})`}</span>
  </div>
);

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ wpm, accuracy, errors }) => {
  return (
    <div className="flex gap-3 sm:gap-4">
      <StatItem label="WPM" value={wpm} />
      <StatItem label="Accuracy" value={accuracy} unit="%" />
      <StatItem label="Errors" value={errors} />
    </div>
  );
};
