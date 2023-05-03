import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import SingleTodo from "../SingleTodo/SingleTodo";

import "./TodoList.scss";

const TodoList: FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  if (todos.length === 0) {
    return <div className="todo__list todo__list--empty">No quests yet</div>;
  }

  return (
    <ul className="todo__list">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
