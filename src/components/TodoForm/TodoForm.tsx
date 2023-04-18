import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Todo, TodoDifficultyStatus } from "../../models/models";

import "./TodoForm.scss";

interface TodoFormProps {
  addNewTodo: (todo: Todo) => void;
}

const initialTodo: Todo = {
  title: "",
  description: "",
  difficulty: TodoDifficultyStatus.TRIFLE,
  id: "",
  dateStart: new Date(),
};

const TodoForm: FC<TodoFormProps> = ({ addNewTodo }) => {
  const [todo, setTodo] = useState<Todo>(initialTodo);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!todo.title) {
      return;
    }
    addNewTodo(todo);
    setTodo(initialTodo);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-form__wrapper">
        <input
          type="text"
          className="todo-form__input"
          name="title"
          placeholder="Название..."
          value={todo.title}
          onChange={handleChange}
        />

        <select name="difficulty" className="todo-form__select">
          <option disabled>DIFFICULTY</option>
          <option value="trifle">TRIFLE</option>
          <option value="easy">EASY</option>
          <option value="normal">NORMAL</option>
          <option value="hard">HARD</option>
        </select>
        <button type="submit" className="todo-form__btn">
          Create quest
        </button>
      </div>
      <textarea
        value={todo.description}
        name="description"
        className="todo-form__textarea"
        placeholder="Описание..."
        onChange={handleChange}></textarea>
    </form>
  );
};

export default TodoForm;
