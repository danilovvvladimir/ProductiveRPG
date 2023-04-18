import React, { FC } from "react";
import { Todo } from "../../models/models";
import SingleTodo from "../SingleTodo/SingleTodo";

import "./TodoList.scss";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
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
