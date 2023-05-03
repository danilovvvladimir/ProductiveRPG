import { FC, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { ToastContainer } from "react-toastify";

import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import Character from "../components/Character/Character";
import { addNewTodoAction, setTodosAction } from "../store/slices/todosSlice";

import { Todo } from "../models/models";

import "react-toastify/dist/ReactToastify.css";
import "./HomePage.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";

const closeButton = () => {
  return <IoMdClose className="notification__close-btn" />;
};

const Home: FC = () => {
  console.log("Home Rerendered");

  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const addNewTodo = (todo: Todo) => {
    dispatch(addNewTodoAction(todo));
  };
  const setTodos = (localStorageTodos: Todo[]) => {
    dispatch(setTodosAction(localStorageTodos));
  };
  useEffect(() => {
    if (localStorage.getItem("todos") !== null) {
      setTodos(JSON.parse(localStorage.getItem("todos") as string));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
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
            <Character />
            <div className="todos">
              <TodoForm addNewTodo={addNewTodo} />
              <TodoList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
