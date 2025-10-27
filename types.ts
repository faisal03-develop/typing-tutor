
export interface Lesson {
  title: string;
  text: string;
}

export enum GameState {
  Idle = 'idle',
  Running = 'running',
  Finished = 'finished',
}

export interface FingerGuide {
  hand: 'left' | 'right' | 'both';
  finger: string;
}
