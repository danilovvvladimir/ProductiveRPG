export enum TodoDifficultyStatus {
  TRIFLE = "trifle",
  EASY = "easy",
  NORMAL = "normal",
  HARD = "hard",
}

export interface Todo {
  id: string;
  title: string;
  description?: string;
  difficulty: TodoDifficultyStatus;
  dateStart: Date;
}

export interface CharacterInfo {
  gold: number;
  gems: number;
  questsDone: number;
}

export interface Reward {
  gold: number;
  gems: number;
}
