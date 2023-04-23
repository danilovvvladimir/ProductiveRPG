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
  dateStart: new Date().toLocaleString(),
};

const TodoForm: FC<TodoFormProps> = ({ addNewTodo }) => {
  const [todo, setTodo] = useState<Todo>(initialTodo);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (event.target.name === "difficulty") {
      let difficulty: TodoDifficultyStatus;

      switch (event.target.value) {
        case "easy":
          difficulty = TodoDifficultyStatus.EASY;
          break;
        case "normal":
          difficulty = TodoDifficultyStatus.NORMAL;
          break;
        case "hard":
          difficulty = TodoDifficultyStatus.HARD;
          break;

        default:
          difficulty = TodoDifficultyStatus.TRIFLE;
          break;
      }
      setTodo({ ...todo, difficulty });
      return;
    }

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

        <select
          name="difficulty"
          className="todo-form__select"
          value={todo.difficulty}
          onChange={handleChange}>
          <option disabled>DIFFICULTY</option>
          <option value="trifle">ПУСТЯК</option>
          <option value="easy">ЛЕГКО</option>
          <option value="normal">НОРМАЛЬНО</option>
          <option value="hard">СЛОЖНО</option>
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
