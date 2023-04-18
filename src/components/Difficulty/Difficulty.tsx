import React, { FC } from "react";

import { GiBurningSkull } from "react-icons/gi";

import "./Difficulty.scss";

interface DifficultyProps {
  skullsNumber: number;
}

const Difficulty: FC<DifficultyProps> = ({ skullsNumber }) => {
  // const numbers: number[] = new Array(skullsNumber).fill(0);

  // const skulls = numbers.map((number, index) => (
  //   <GiBurningSkull key={index} className="todo__item-skull" />
  // ));
  //console.log(numbers);
  //console.log(skulls);

  return (
    <div className="todo__item-difficulty">
      Сложность:
      <div className="todo__item-difficulty-skulls">{skullsNumber}</div>
    </div>
  );
};

export default Difficulty;
