import React, { useState } from "react";
import TodoList from "../components/TodoList/TodoList";
import { Todo, TodoDifficultyStatus } from "../models/models";

import { v4 } from "uuid";
import Character from "../components/Character/Character";

import "./HomePage.scss";
import TodoForm from "../components/TodoForm/TodoForm";

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: v4(),
      title: "Do smth",
      description: "Yeah do it",
      dateStart: new Date(),
      difficulty: TodoDifficultyStatus.EASY,
    },
  ]);

  return (
    <main>
      <section className="home">
        <div className="container">
          <div className="home__wrapper">
            <Character />
            <div className="todos">
              <TodoForm />
              <TodoList todos={todos} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
