import { TodoDifficultyStatus } from "../models/models";

export interface IOption {
  value: TodoDifficultyStatus;
  label: string;
}

export const options: IOption[] = [
  {
    value: TodoDifficultyStatus.TRIFLE,
    label: "Пустяк",
  },
  {
    value: TodoDifficultyStatus.EASY,
    label: "Легко",
  },
  {
    value: TodoDifficultyStatus.NORMAL,
    label: "Нормально",
  },
  {
    value: TodoDifficultyStatus.HARD,
    label: "Сложно",
  },
];

export const getValue = (value: TodoDifficultyStatus) => {
  return options.find((option) => option.value === value);
};
