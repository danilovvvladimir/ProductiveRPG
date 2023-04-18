import React, { useState } from "react";
import TodoList from "../components/TodoList/TodoList";
import { Todo, TodoDifficultyStatus } from "../models/models";

import { v4 } from "uuid";
import Character from "../components/Character/Character";

import "./HomePage.scss";

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
      <section className="todos">
        <div className="container">
          <div className="todos__wrapper">
            <Character />

            <TodoList todos={todos} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
