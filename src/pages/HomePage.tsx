import { FC, useEffect, useState } from "react";
import { v4 } from "uuid";
import { RiCopperCoinFill } from "react-icons/ri";
import { FaGem } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";

import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import Character from "../components/Character/Character";
import { generateRandomRewards } from "../services/rewardService";

import { CharacterInfo, Todo, TodoDifficultyStatus } from "../models/models";

import "react-toastify/dist/ReactToastify.css";
import "./HomePage.scss";

const initialCharacterInfo: CharacterInfo = {
  gems: 0,
  gold: 0,
  questsDone: 0,
};

const closeButton = () => {
  return <IoMdClose className="notification__close-btn" />;
};

const notifyReward = (
  message: string,
  rewardAmount: number,
  iconComponent?: JSX.Element
) => {
  toast(
    <div className="notification">
      <div className="notification__message">{message}</div>
      <div className="notification__reward">
        {rewardAmount}
        {iconComponent}
      </div>
    </div>
  );
};

const Home: FC = () => {
  // Main Todos list
  const [todos, setTodos] = useState<Todo[]>([]);
  // Main CharacterInfo
  const [characterInfo, setCharacterInfo] = useState(initialCharacterInfo);

  // Todos Handlers
  const addNewTodo = (todo: Todo): void => {
    const newTodo = {
      ...todo,
      id: v4(),
      dateStart: new Date().toLocaleString(),
    };
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
    removeTodo(id);
    notifyReward(
      "Вы получили золото:",
      gold,
      <RiCopperCoinFill style={{ color: "#ffab10" }} />
    );
    if (gems !== 0) {
      notifyReward(
        "Вы получили кристаллы:",
        gems,
        <FaGem style={{ color: "deepskyblue" }} />
      );
    }
  };

  // Character Handlers
  const clearCharacterInfo = () => {
    setCharacterInfo(initialCharacterInfo);
  };

  // Local Storage Handlers
  useEffect(() => {
    if (localStorage.getItem("todos") !== null) {
      setTodos(JSON.parse(localStorage.getItem("todos") as string));
    }

    if (localStorage.getItem("info") !== null) {
      setCharacterInfo(JSON.parse(localStorage.getItem("info") as string));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(characterInfo));
  }, [characterInfo]);

  return (
    <main>
      <section className="home">
        <ToastContainer
          autoClose={3000}
          hideProgressBar={true}
          pauseOnHover={false}
          closeButton={closeButton}
        />
        <div className="container">
          <div className="home__wrapper">
            <Character
              characterInfo={characterInfo}
              clearCharacterInfo={clearCharacterInfo}
            />
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

export default Home;
