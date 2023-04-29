import React, { FC, useMemo, useState } from "react";

import { GiBurningSkull } from "react-icons/gi";

import "./Difficulty.scss";

interface DifficultyProps {
  difficulty: number;
}

const Difficulty: FC<DifficultyProps> = ({ difficulty }) => {
  const skulls: JSX.Element[] = [];

  for (let i = 0; i < difficulty; i++) {
    skulls.push(<GiBurningSkull key={i} className="todo__item-skull" />);
  }
  console.log(skulls);

  return (
    <div className="todo__item-difficulty">
      Сложность:
      <div className="todo__item-difficulty-skulls">{skulls}</div>
    </div>
  );
};

export default React.memo(Difficulty);
