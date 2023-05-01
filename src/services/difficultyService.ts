import { TodoDifficultyStatus } from "../models/models";

export const transformDifficultyToString = (
  difficulty: TodoDifficultyStatus
): string => {
  switch (difficulty) {
    case TodoDifficultyStatus.TRIFLE:
      return "Пустяк";
    case TodoDifficultyStatus.EASY:
      return "Легко";
    case TodoDifficultyStatus.NORMAL:
      return "Нормально";
    case TodoDifficultyStatus.HARD:
      return "Сложно";
    default:
      return "UNDEFINED";
  }
};
