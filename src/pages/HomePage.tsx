import React, { useState } from "react";
import TodoList from "../components/TodoList/TodoList";
import { CharacterInfo, Todo, TodoDifficultyStatus } from "../models/models";

import { v4 } from "uuid";
import Character from "../components/Character/Character";

import "./HomePage.scss";
import TodoForm from "../components/TodoForm/TodoForm";

const initialCharacterInfo: CharacterInfo = {
  gems: 1,
  gold: 10,
  questsDone: 0,
};

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: v4(),
      title: "Do smth",
      description: "Yeah do it",
      dateStart: new Date(),
      difficulty: TodoDifficultyStatus.HARD,
    },
  ]);

  const [characterInfo, setCharacterInfo] = useState(initialCharacterInfo);

  const addNewTodo = (todo: Todo): void => {
    const newTodo = { ...todo, id: v4(), dateStart: new Date() };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const generateRandomRewards = (): void => {
    const generateRandomNumberByNumbers = (
      top: number,
      bottom: number = 0
    ): number => {
      const randomNumber = Math.floor(Math.random() * top);
      return randomNumber < bottom ? randomNumber + bottom : randomNumber;
    };

    const chanceProcent: number = generateRandomNumberByNumbers(100);
    let gold: number = characterInfo.gold;
    let gems: number = characterInfo.gems;
    console.log(chanceProcent);

    if (chanceProcent >= 90) {
      console.log(">=90");
      gold += generateRandomNumberByNumbers(1000, 500);
      gems += 1;
    } else if (chanceProcent >= 70 && chanceProcent < 90) {
      console.log(">=70 && < 90");
      gold += generateRandomNumberByNumbers(50, 30);
    } else {
      console.log("<70");
      gold += generateRandomNumberByNumbers(30);
    }
    console.log(gold);

    setCharacterInfo({ ...characterInfo, gold: gold, gems: gems });
  };

  return (
    <main>
      <section className="home">
        <div className="container">
          <div className="home__wrapper">
            <Character characterInfo={characterInfo} />
            <div className="todos">
              <TodoForm addNewTodo={addNewTodo} />
              <TodoList
                todos={todos}
                removeTodo={removeTodo}
                generateRandomRewards={generateRandomRewards}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
