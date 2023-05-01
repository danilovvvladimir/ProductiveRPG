import React, { FC } from "react";
import { TodoDifficultyStatus } from "../../models/models";
import { transformDifficultyToString } from "../../services/difficultyService";

import "./Difficulty.scss";

interface DifficultyProps {
  difficulty: TodoDifficultyStatus;
}

const Difficulty: FC<DifficultyProps> = ({ difficulty }) => {
  return (
    <div className="todo__item-difficulty">
      Сложность: {transformDifficultyToString(difficulty)}
    </div>
  );
};

export default React.memo(Difficulty);
