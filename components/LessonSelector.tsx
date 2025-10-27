
import React from 'react';
import type { Lesson } from '../types';

interface LessonSelectorProps {
  lessons: Lesson[];
  currentLessonIndex: number;
  onSelectLesson: (index: number) => void;
}

export const LessonSelector: React.FC<LessonSelectorProps> = ({ lessons, currentLessonIndex, onSelectLesson }) => {
  return (
    <div className="relative">
      <select
        value={currentLessonIndex}
        onChange={(e) => onSelectLesson(Number(e.target.value))}
        className="appearance-none bg-slate-700 border border-slate-600 text-slate-200 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full pl-4 pr-10 py-2.5 transition-colors"
      >
        {lessons.map((lesson, index) => (
          <option key={index} value={index}>
            Lesson {index + 1}: {lesson.title}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>
  );
};
