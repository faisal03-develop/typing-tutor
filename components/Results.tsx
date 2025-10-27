
import React from 'react';

interface ResultsProps {
  wpm: number;
  accuracy: number;
  errors: number;
  totalTyped: number;
  onRestart: () => void;
  onNextLesson: () => void;
  isLastLesson: boolean;
}

const ResultCard: React.FC<{ label: string; value: string; className?: string }> = ({ label, value, className = '' }) => (
    <div className="flex flex-col items-center justify-center bg-slate-700/50 p-6 rounded-lg">
        <span className={`text-5xl font-bold ${className}`}>{value}</span>
        <span className="text-slate-400 mt-1">{label}</span>
    </div>
);


export const Results: React.FC<ResultsProps> = ({ wpm, accuracy, errors, onRestart, onNextLesson, isLastLesson }) => {
  return (
    <div className="text-center p-8 bg-slate-900/70 rounded-lg animate-fade-in">
      <h2 className="text-3xl font-bold text-sky-400 mb-2">Lesson Complete!</h2>
      <p className="text-slate-400 mb-8">Here are your results.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <ResultCard label="WPM" value={String(wpm)} className="text-sky-400" />
        <ResultCard label="Accuracy" value={`${accuracy}%`} className="text-green-400" />
        <ResultCard label="Errors" value={String(errors)} className="text-red-400" />
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-500 transition-colors"
        >
          Try Again
        </button>
        {!isLastLesson && (
          <button
            onClick={onNextLesson}
            className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-500 transition-colors"
          >
            Next Lesson
          </button>
        )}
      </div>
    </div>
  );
};
