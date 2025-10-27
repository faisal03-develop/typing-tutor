
import type { FingerGuide } from '../types';

export const KEYBOARD_LAYOUT: string[][] = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
  ['Space']
];

export const FINGER_MAP: Record<string, FingerGuide> = {
  // Left Hand
  '`': { hand: 'left', finger: 'pinky' },
  '~': { hand: 'left', finger: 'pinky' },
  '1': { hand: 'left', finger: 'pinky' },
  '!': { hand: 'left', finger: 'pinky' },
  'tab': { hand: 'left', finger: 'pinky' },
  'q': { hand: 'left', finger: 'pinky' },
  'capslock': { hand: 'left', finger: 'pinky' },
  'a': { hand: 'left', finger: 'pinky' },
  'shift': { hand: 'left', finger: 'pinky' },
  'z': { hand: 'left', finger: 'pinky' },

  '2': { hand: 'left', finger: 'ring' },
  '@': { hand: 'left', finger: 'ring' },
  'w': { hand: 'left', finger: 'ring' },
  's': { hand: 'left', finger: 'ring' },
  'x': { hand: 'left', finger: 'ring' },

  '3': { hand: 'left', finger: 'middle' },
  '#': { hand: 'left', finger: 'middle' },
  'e': { hand: 'left', finger: 'middle' },
  'd': { hand: 'left', finger: 'middle' },
  'c': { hand: 'left', finger: 'middle' },

  '4': { hand: 'left', finger: 'index' },
  '$': { hand: 'left', finger: 'index' },
  'r': { hand: 'left', finger: 'index' },
  'f': { hand: 'left', finger: 'index' },
  'v': { hand: 'left', finger: 'index' },
  '5': { hand: 'left', finger: 'index' },
  '%': { hand: 'left', finger: 'index' },
  't': { hand: 'left', finger: 'index' },
  'g': { hand: 'left', finger: 'index' },
  'b': { hand: 'left', finger: 'index' },

  // Right Hand
  '6': { hand: 'right', finger: 'index' },
  '^': { hand: 'right', finger: 'index' },
  'y': { hand: 'right', finger: 'index' },
  'h': { hand: 'right', finger: 'index' },
  'n': { hand: 'right', finger: 'index' },
  '7': { hand: 'right', finger: 'index' },
  '&': { hand: 'right', finger: 'index' },
  'u': { hand: 'right', finger: 'index' },
  'j': { hand: 'right', finger: 'index' },
  'm': { hand: 'right', finger: 'index' },

  '8': { hand: 'right', finger: 'middle' },
  '*': { hand: 'right', finger: 'middle' },
  'i': { hand: 'right', finger: 'middle' },
  'k': { hand: 'right', finger: 'middle' },
  ',': { hand: 'right', finger: 'middle' },
  '<': { hand: 'right', finger: 'middle' },

  '9': { hand: 'right', finger: 'ring' },
  '(': { hand: 'right', finger: 'ring' },
  'o': { hand: 'right', finger: 'ring' },
  'l': { hand: 'right', finger: 'ring' },
  '.': { hand: 'right', finger: 'ring' },
  '>': { hand: 'right', finger: 'ring' },

  '0': { hand: 'right', finger: 'pinky' },
  ')': { hand: 'right', finger: 'pinky' },
  'p': { hand: 'right', finger: 'pinky' },
  ';': { hand: 'right', finger: 'pinky' },
  ':': { hand: 'right', finger: 'pinky' },
  '/': { hand: 'right', finger: 'pinky' },
  '?': { hand: 'right', finger: 'pinky' },
  '-': { hand: 'right', finger: 'pinky' },
  '_': { hand: 'right', finger: 'pinky' },
  '[': { hand: 'right', finger: 'pinky' },
  '{': { hand: 'right', finger: 'pinky' },
  '=': { hand: 'right', finger: 'pinky' },
  '+': { hand: 'right', finger: 'pinky' },
  ']': { hand: 'right', finger: 'pinky' },
  '}': { hand: 'right', finger: 'pinky' },
  'backspace': { hand: 'right', finger: 'pinky' },
  'enter': { hand: 'right', finger: 'pinky' },
  '\'': { hand: 'right', finger: 'pinky' },
  '"': { hand: 'right', finger: 'pinky' },
  '\\': { hand: 'right', finger: 'pinky' },
  '|': { hand: 'right', finger: 'pinky' },

  // Thumbs
  'space': { hand: 'both', finger: 'thumb' },
};
