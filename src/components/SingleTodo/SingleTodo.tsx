import React, { FC, useState } from "react";
import { Todo } from "../../models/models";

import { GrFormCheckmark } from "react-icons/gr";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import "./SingleTodo.scss";

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
      <h3 className="todo__item-title">{todo.title}</h3>
      <div className="todo__item-difficulty">{todo.difficulty}</div>
      {isDetailsShowed && (
        <div className="todo__item-description">{todo.description}</div>
      )}

      {isDetailsShowed && (
        <div className="todo__item-date">{todo.dateStart.toDateString()}</div>
      )}

      <button className="todo__item-btn-complete">{<GrFormCheckmark />}</button>
      <button className="todo__item-btn-edit">{<AiFillEdit />}</button>
      <button className="todo__item-btn-delete">{<AiFillDelete />}</button>
      <button className="todo__item-btn-info" onClick={toggleDetails}>
        {isDetailsShowed ? "Hide Details" : "Show Details"}
      </button>
    </li>
  );
};

export default SingleTodo;
