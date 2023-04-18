export enum TodoDifficultyStatus {
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
  dateStart: Date;
}

export interface CharacterInfo {
  gold: number;
  gems: number;
  questsDone: number;
}
