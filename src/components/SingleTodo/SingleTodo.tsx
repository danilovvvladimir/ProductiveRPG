import { FC, useState } from "react";
import { CharacterInfo, Todo, TodoDifficultyStatus } from "../../models/models";
import { FaCheck, FaGem } from "react-icons/fa";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Modal from "../UI/Modal/Modal";

import Difficulty from "../Difficulty/Difficulty";
import { removeTodoAction } from "../../store/slices/todosSlice";

import "./SingleTodo.scss";
import TodoForm from "../TodoForm/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setCharacterInfoAction } from "../../store/slices/characterSlice";
import { generateRandomRewards } from "../../services/rewardService";
import { toast } from "react-toastify";
import { RiCopperCoinFill } from "react-icons/ri";

interface SingleTodoProps {
  todo: Todo;
}

const notifyReward = (
  message: string,
  rewardAmount: number,
  iconComponent?: JSX.Element
) => {
  toast(
    <div className="notification">
      <div className="notification__message">{message}</div>
      <div className="notification__reward">
        {rewardAmount}
        {iconComponent}
      </div>
    </div>
  );
};

const SingleTodo: FC<SingleTodoProps> = ({ todo }) => {
  const characterInfo = useSelector(
    (state: RootState) => state.characterInfo.characterInfo
  );
  const [isDetailsShowed, setIsDetailsShowed] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useDispatch();

  const toggleDetails = (): void => {
    setIsDetailsShowed((isDetailsShowed) => !isDetailsShowed);
  };

  const setCharacterInfo = (characterInfo: CharacterInfo) => {
    dispatch(setCharacterInfoAction(characterInfo));
  };

  const removeTodo = (id: string): void => {
    dispatch(removeTodoAction(id));
  };

  const completeTodo = (id: string, difficulty: TodoDifficultyStatus): void => {
    const { gold, gems } = generateRandomRewards(difficulty);
    setCharacterInfo({
      questsDone: characterInfo.questsDone + 1,
      gold: characterInfo.gold + gold,
      gems: characterInfo.gems + gems,
    });
    removeTodo(id);
    notifyReward(
      "Вы получили золото:",
      gold,
      <RiCopperCoinFill style={{ color: "#ffab10" }} />
    );
    if (gems !== 0) {
      notifyReward(
        "Вы получили кристаллы:",
        gems,
        <FaGem style={{ color: "deepskyblue" }} />
      );
    }
  };

  return (
    <li className="todo__item">
      <div className="todo__item-top">
        <div className="todo__item-main">
          <h3 className="todo__item-title">{todo.title}</h3>
        </div>

        <div className="todo__item-btns">
          <button
            className="todo__item-btn todo__item-btn--complete"
            onClick={() => completeTodo(todo.id, todo.difficulty)}>
            {<FaCheck />}
          </button>
          <button
            className="todo__item-btn todo__item-btn--edit"
            onClick={() => setActive(true)}>
            {<AiFillEdit />}
          </button>
          <button
            className="todo__item-btn todo__item-btn--delete"
            onClick={() => removeTodo(todo.id)}>
            {<AiFillDelete />}
          </button>
          <button
            className="todo__item-btn todo__item-btn--info"
            onClick={toggleDetails}>
            {isDetailsShowed ? "Hide Details" : "Show Details"}
          </button>
        </div>
      </div>
      {isDetailsShowed && (
        <div className="todo__item-info">
          <Difficulty difficulty={todo.difficulty} />
          <div className="todo__item-description">
            Описание: {todo.description ? todo.description : "*отсутствует*"}
          </div>

          <div className="todo__item-date">
            Создано: {todo.dateStart.toLocaleString()}
          </div>
        </div>
      )}
      <Modal active={active} setActive={setActive}>
        {
          <>
            <div>Режим редактирования:</div>
            <TodoForm />
          </>
        }
      </Modal>
    </li>
  );
};

export default SingleTodo;
