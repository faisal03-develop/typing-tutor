
import React, { useState, useCallback, useMemo } from 'react';
import { TypingArea } from './components/TypingArea';
import { Keyboard } from './components/Keyboard';
import { StatsDisplay } from './components/StatsDisplay';
import { LessonSelector } from './components/LessonSelector';
import { Results } from './components/Results';
import { useTypingGame } from './hooks/useTypingGame';
import { lessons } from './data/lessons';
import type { Lesson } from './types';
import { GameState } from './types';

const App: React.FC = () => {
  const [lessonIndex, setLessonIndex] = useState(0);
  const currentLesson = useMemo(() => lessons[lessonIndex], [lessonIndex]);

  const {
    state,
    typed,
    errors,
    totalTyped,
    wpm,
    accuracy,
    reset,
    nextKey,
    fingerGuide,
  } = useTypingGame(currentLesson.text);

  const handleSelectLesson = useCallback((index: number) => {
    setLessonIndex(index);
    reset();
  }, [reset]);

  const handleRestart = useCallback(() => {
    reset();
  }, [reset]);

  const handleNextLesson = useCallback(() => {
    if (lessonIndex < lessons.length - 1) {
      setLessonIndex(prev => prev + 1);
    }
  }, [lessonIndex]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-mono">
      <div className="w-full max-w-5xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-sky-400">Typing Tutor</h1>
          <p className="text-slate-400 mt-2">Practice makes perfect. Select a lesson to begin.</p>
        </header>

        <main className="bg-slate-800/50 p-6 rounded-2xl shadow-2xl shadow-sky-900/20 border border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <LessonSelector 
              lessons={lessons} 
              currentLessonIndex={lessonIndex} 
              onSelectLesson={handleSelectLesson} 
            />
            <StatsDisplay wpm={wpm} accuracy={accuracy} errors={errors} />
          </div>

          {state === GameState.Finished ? (
            <Results
              wpm={wpm}
              accuracy={accuracy}
              errors={errors}
              totalTyped={totalTyped}
              onRestart={handleRestart}
              onNextLesson={handleNextLesson}
              isLastLesson={lessonIndex === lessons.length - 1}
            />
          ) : (
            <TypingArea
              lessonText={currentLesson.text}
              typedText={typed}
              state={state}
            />
          )}

          <div className="mt-8">
            <Keyboard nextKey={nextKey} fingerGuide={fingerGuide} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
