
import React from 'react';
import type { GameState } from '../types';

interface TypingAreaProps {
  lessonText: string;
  typedText: string;
  state: GameState;
}

const Character: React.FC<{
  char: string;
  state: 'correct' | 'incorrect' | 'current' | 'pending';
}> = React.memo(({ char, state }) => {
  const stateClasses = {
    correct: 'text-green-400',
    incorrect: 'text-red-400',
    current: 'bg-sky-500/50 rounded-sm',
    pending: 'text-slate-400',
  };

  return <span className={`px-0.5 ${stateClasses[state]}`}>{char}</span>;
});

export const TypingArea: React.FC<TypingAreaProps> = ({ lessonText, typedText }) => {
  const characters = lessonText.split('').map((char, index) => {
    let charState: 'correct' | 'incorrect' | 'current' | 'pending' = 'pending';
    const typedLength = typedText.length;

    if (index < typedLength) {
      charState = typedText[index] === char ? 'correct' : 'incorrect';
    } else if (index === typedLength) {
      charState = 'current';
    }

    return <Character key={`${char}-${index}`} char={char} state={charState} />;
  });

  return (
    <div className="bg-slate-900/70 p-4 rounded-lg text-2xl tracking-widest leading-loose select-none">
      {characters}
    </div>
  );
};
