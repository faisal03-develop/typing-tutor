
import { useState, useEffect, useCallback, useMemo } from 'react';
import { GameState } from '../types';
import type { FingerGuide } from '../types';
import { FINGER_MAP } from '../data/keyboardLayout';

const isTypingKey = (key: string) => {
  return key.length === 1 || key === 'Backspace';
};

export const useTypingGame = (lessonText: string) => {
  const [state, setState] = useState<GameState>(GameState.Idle);
  const [typed, setTyped] = useState<string>('');
  const [errors, setErrors] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const currentIndex = useMemo(() => typed.length, [typed]);
  const nextKey = useMemo(() => {
    if (currentIndex < lessonText.length) {
      return lessonText[currentIndex];
    }
    return null;
  }, [currentIndex, lessonText]);

  const fingerGuide: FingerGuide | null = useMemo(() => {
    if (!nextKey) return null;
    const key = nextKey.toLowerCase();
    return FINGER_MAP[key] || null;
  }, [nextKey]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (state === GameState.Finished || !isTypingKey(e.key)) {
      e.preventDefault();
      return;
    }

    if (state === GameState.Idle) {
      setState(GameState.Running);
      setStartTime(Date.now());
    }

    const currentCharacter = lessonText[currentIndex];

    if (e.key === 'Backspace') {
      e.preventDefault();
      // Simple backspace logic (doesn't allow correcting previous errors)
      // setTyped(prev => prev.slice(0, -1)); 
      return; // For this version, we disallow backspace to keep stats simple.
    }
    
    if (e.key === currentCharacter) {
      setTyped(prev => prev + e.key);
    } else {
      setErrors(prev => prev + 1);
    }

    if (currentIndex + 1 === lessonText.length) {
      setState(GameState.Finished);
      setEndTime(Date.now());
    }
  }, [state, lessonText, currentIndex]);

  const reset = useCallback(() => {
    setState(GameState.Idle);
    setTyped('');
    setErrors(0);
    setStartTime(null);
    setEndTime(null);
  }, []);
  
  // Reset when lesson text changes
  useEffect(() => {
    reset();
  }, [lessonText, reset]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  const totalTyped = typed.length;
  
  const elapsedTime = useMemo(() => {
    if (!startTime) return 0;
    const finalTime = endTime || Date.now();
    return (finalTime - startTime) / 1000;
  }, [startTime, endTime]);

  const wpm = useMemo(() => {
    if (!totalTyped || elapsedTime < 1) return 0;
    const minutes = elapsedTime / 60;
    const words = totalTyped / 5;
    return Math.round(words / minutes);
  }, [totalTyped, elapsedTime]);

  const accuracy = useMemo(() => {
    if (totalTyped === 0 && errors === 0) return 100;
    const totalCharsAttempted = totalTyped + errors;
    if (totalCharsAttempted === 0) return 100;
    const correctChars = totalTyped;
    return Math.round((correctChars / totalCharsAttempted) * 100);
  }, [totalTyped, errors]);

  return {
    state,
    typed,
    errors,
    totalTyped,
    wpm,
    accuracy,
    reset,
    nextKey,
    fingerGuide,
  };
};
