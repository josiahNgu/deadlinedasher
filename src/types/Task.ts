import { WeekDaysAbbreviations } from './WeekDayAbbrv';

export interface Task {
  id: string;
  isoString: string;
  name: string;
  sessionTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  sessionsPerRound: number;
  color: string;
  repeat: WeekDaysAbbreviations;
  endRepeat: string;
  completed: boolean;
  // in sec
  remainingTime: number;
}
