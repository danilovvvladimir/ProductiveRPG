import React, { ChangeEvent, useState } from "react";
import { Todo } from "../../models/models";

import "./TodoForm.scss";

const TodoForm = () => {
  const [todo, setTodo] = useState<Todo>({
    title: "",
    description: "",
    difficulty: 0,
    id: "",
    dateStart: new Date(),
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  return (
    <form className="todo-form">
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
