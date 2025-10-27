
import React from 'react';
import { KEYBOARD_LAYOUT, FINGER_MAP } from '../data/keyboardLayout';
import type { FingerGuide } from '../types';

interface KeyboardProps {
  nextKey: string | null;
  fingerGuide: FingerGuide | null;
}

const FingerDisplay: React.FC<{ fingerGuide: FingerGuide | null }> = ({ fingerGuide }) => {
    if (!fingerGuide) {
        return <div className="h-6 text-slate-400 text-center">Start typing...</div>;
    }

    const { hand, finger } = fingerGuide;
    const handText = hand.charAt(0).toUpperCase() + hand.slice(1);
    const fingerText = finger.charAt(0).toUpperCase() + finger.slice(1);
    
    return (
        <div className="h-6 text-sky-400 text-center font-semibold">
            Use {handText} Hand, {fingerText} Finger
        </div>
    );
};

export const Keyboard: React.FC<KeyboardProps> = ({ nextKey, fingerGuide }) => {
  const getKeyClass = (key: string) => {
    const isNext = key.toLowerCase() === (nextKey === ' ' ? 'space' : nextKey?.toLowerCase());
    const fingerInfo = FINGER_MAP[key.toLowerCase()];
    
    let baseClass = 'h-12 flex items-center justify-center rounded-md font-sans transition-all duration-100 ease-in-out shadow-sm';
    let sizeClass = 'flex-1';
    
    // Sizing for special keys
    if (key.length > 1) {
      if (key === 'Backspace' || key === 'Tab' || key === '\\' || key === 'Enter') sizeClass = 'flex-[1.5]';
      else if (key === 'CapsLock' || key === 'Shift') sizeClass = 'flex-[2]';
      else if (key === 'Space') sizeClass = 'flex-[8]';
    }
    
    let stateClass = 'bg-slate-700/50 border border-slate-600/50 text-slate-300';
    if (isNext) {
      stateClass = 'bg-sky-500 border-sky-400 text-white scale-110 shadow-lg shadow-sky-500/30 ring-2 ring-sky-300';
    } else if (fingerInfo) {
      if (fingerInfo.hand === 'left') stateClass = 'bg-slate-700 border-slate-600 text-slate-300';
      if (fingerInfo.hand === 'right') stateClass = 'bg-slate-600/80 border-slate-500/80 text-slate-300';
    }
    
    return `${baseClass} ${sizeClass} ${stateClass}`;
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
        <FingerDisplay fingerGuide={fingerGuide} />
        <div className="p-2 bg-slate-900/50 rounded-lg shadow-inner w-full">
            {KEYBOARD_LAYOUT.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1.5 mb-1.5">
                    {row.map((key) => (
                        <div key={key} className={getKeyClass(key)}>
                            <span className="text-sm sm:text-base">{key === 'Space' ? '' : key}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
  );
};
