import React, { FC } from "react";
import { Todo } from "../../models/models";
import SingleTodo from "../SingleTodo/SingleTodo";

import "./TodoList.scss";

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: string) => void;
  generateRandomRewards: () => void;
}

const TodoList: FC<TodoListProps> = ({
  todos,
  removeTodo,
  generateRandomRewards,
}) => {
  if (todos.length === 0) {
    return <div className="todo__list todo__list--empty">No quests yet</div>;
  }

  return (
    <ul className="todo__list">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          generateRandomRewards={generateRandomRewards}
        />
      ))}
    </ul>
  );
};

export default TodoList;
