import { Reward, TodoDifficultyStatus } from "../models/models";

export const generateRandomRewards = (
  difficulty: TodoDifficultyStatus
): Reward => {
  const generateRandomNumberByNumbers = (
    top: number,
    bottom: number = 0
  ): number => {
    const randomNumber = Math.floor(Math.random() * top);
    return randomNumber < bottom ? randomNumber + bottom : randomNumber;
  };

  let procentEpic: number;
  let procentMedium: number;

  switch (difficulty) {
    case 1:
      procentEpic = 80;
      procentMedium = 70;
      break;
    case 4:
      procentEpic = 70;
      procentMedium = 50;
      break;
    default:
      procentEpic = 97;
      procentMedium = 80;
      break;
  }

  const chanceProcent: number = generateRandomNumberByNumbers(100);
  let gold: number = 0;
  let gems: number = 0;

  //console.log(chanceProcent);

  if (chanceProcent >= procentEpic) {
    gold = generateRandomNumberByNumbers(600, 200);
  } else if (chanceProcent >= procentMedium && chanceProcent < procentEpic) {
    gold = generateRandomNumberByNumbers(50, 30);
  } else {
    gold = generateRandomNumberByNumbers(30, 15);
  }

  if (chanceProcent >= 90) {
    gems = 1;
  }

  return { gold, gems };
};
