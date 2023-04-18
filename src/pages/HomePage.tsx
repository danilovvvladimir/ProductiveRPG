import React, { FC, useState } from "react";
import TodoList from "../components/TodoList/TodoList";
import {
  CharacterInfo,
  Reward,
  Todo,
  TodoDifficultyStatus,
} from "../models/models";

import { RiCopperCoinFill } from "react-icons/ri";
import { FaGem } from "react-icons/fa";

import { v4 } from "uuid";
import Character from "../components/Character/Character";

import "./HomePage.scss";
import TodoForm from "../components/TodoForm/TodoForm";
import Notification from "../components/Notification/Notification";

const initialCharacterInfo: CharacterInfo = {
  gems: 0,
  gold: 0,
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

  const [isNotificationVisiable, setIsNotificationVisiable] =
    useState<boolean>(false);

  const [characterInfo, setCharacterInfo] = useState(initialCharacterInfo);

  const [reward, setReward] = useState<Reward>({ gems: 0, gold: 0 });

  const addNewTodo = (todo: Todo): void => {
    const newTodo = { ...todo, id: v4(), dateStart: new Date() };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id: string, difficulty: TodoDifficultyStatus): void => {
    const { gold, gems } = generateRandomRewards(difficulty);
    setCharacterInfo({
      questsDone: characterInfo.questsDone + 1,
      gold: characterInfo.gold + gold,
      gems: characterInfo.gems + gems,
    });
    //removeTodo(id);
    setReward({ gold, gems });
    handleNotificationReward();
  };

  const handleNotificationReward = () => {
    setIsNotificationVisiable(true);
    setTimeout(() => setIsNotificationVisiable(false), 3000);
  };

  const generateRandomRewards = (difficulty: TodoDifficultyStatus): Reward => {
    const generateRandomNumberByNumbers = (
      top: number,
      bottom: number = 0
    ): number => {
      const randomNumber = Math.floor(Math.random() * top);
      return randomNumber < bottom ? randomNumber + bottom : randomNumber;
    };

    let procentEpic: number;
    let procentMedium: number;

    switch (difficulty) {
      case "normal":
      case "hard":
        procentEpic = 80;
        procentMedium = 70;
        break;
      default:
        procentEpic = 97;
        procentMedium = 80;
        break;
    }

    const chanceProcent: number = generateRandomNumberByNumbers(100);
    let gold: number = 0;
    let gems: number = 0;

    console.log(chanceProcent);

    if (chanceProcent >= procentEpic) {
      gold = generateRandomNumberByNumbers(1000, 500);
      gems = 1;
    } else if (chanceProcent >= procentMedium && chanceProcent < procentEpic) {
      gold = generateRandomNumberByNumbers(50, 30);
    } else {
      gold = generateRandomNumberByNumbers(30, 15);
    }

    return { gold, gems };
  };

  return (
    <main>
      <section className="home">
        <div className="container">
          <div className="home__wrapper">
            <Character characterInfo={characterInfo} />
            {isNotificationVisiable && (
              <NotificationReward gold={reward.gold} gems={reward.gems} />
            )}
            <div className="todos">
              <TodoForm addNewTodo={addNewTodo} />
              <TodoList
                todos={todos}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const NotificationReward = ({ gold, gems }: Reward) => {
  return (
    <Notification>
      {
        <>
          <div className="notification__items notification__items--gold">
            {
              <RiCopperCoinFill
                className="character__info-icon"
                style={{ color: "gold" }}
              />
            }
            Gold: {gold}
          </div>
          {!!gems && (
            <div className="notification__items notification__items--gems">
              {
                <FaGem
                  className="character__info-icon"
                  style={{ color: "deepskyblue" }}
                />
              }
              Gems: {gems}
            </div>
          )}
        </>
      }
    </Notification>
  );
};

export default Home;
