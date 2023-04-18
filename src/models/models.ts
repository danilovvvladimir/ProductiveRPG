export enum TodoDifficultyStatus {
  TRIFLE = 1,
  EASY,
  NORMAL,
  HARD,
}

export interface Todo {
  id: number | string;
  title: string;
  description?: string;
  difficulty: TodoDifficultyStatus;
  dateStart: Date;
}
