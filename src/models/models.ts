export enum TodoDifficultyStatus {
  // TRIFLE = "trifle",
  // EASY = "easy",
  // NORMAL = "normal",
  // HARD = "hard",
  TRIFLE = 1,
  EASY,
  NORMAL,
  HARD,
}

export interface Todo {
  id: string;
  title: string;
  description?: string;
  difficulty: TodoDifficultyStatus;
  dateStart: string;
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

export interface ITodoField {
  title: string;
  description: string;
  difficulty: TodoDifficultyStatus;
}
