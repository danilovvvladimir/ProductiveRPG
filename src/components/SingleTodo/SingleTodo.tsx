import React, { FC, useState } from "react";
import { Todo } from "../../models/models";

import { FaCheck } from "react-icons/fa";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import "./SingleTodo.scss";
import Difficulty from "../Difficulty/Difficulty";

interface SingleTodoProps {
  todo: Todo;
}

const SingleTodo: FC<SingleTodoProps> = ({ todo }) => {
  const [isDetailsShowed, setIsDetailsShowed] = useState<boolean>(false);

  const toggleDetails = (): void => {
    setIsDetailsShowed((isDetailsShowed) => !isDetailsShowed);
  };

  return (
    <li className="todo__item">
      <div className="todo__item-top">
        <div className="todo__item-main">
          <h3 className="todo__item-title">{todo.title}</h3>
          <Difficulty />
        </div>

        <div className="todo__item-btns">
          <button className="todo__item-btn todo__item-btn--complete">
            {<FaCheck />}
          </button>
          <button className="todo__item-btn todo__item-btn--edit">
            {<AiFillEdit />}
          </button>
          <button className="todo__item-btn todo__item-btn--delete">
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
          <div className="todo__item-description">
            Описание: {todo.description}
          </div>

          <div className="todo__item-date">
            Создано: {todo.dateStart.toLocaleString()}
          </div>
        </div>
      )}
    </li>
  );
};

export default SingleTodo;
