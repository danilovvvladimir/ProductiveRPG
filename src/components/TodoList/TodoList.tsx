import React, { FC } from "react";
import { Todo, TodoDifficultyStatus } from "../../models/models";
import SingleTodo from "../SingleTodo/SingleTodo";

import "./TodoList.scss";

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: string) => void;
  completeTodo: (id: string, difficulty: TodoDifficultyStatus) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, removeTodo, completeTodo }) => {
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
          completeTodo={completeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
