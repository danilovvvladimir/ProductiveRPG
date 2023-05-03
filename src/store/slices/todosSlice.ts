import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { Todo } from "../../models/models";

interface IStateTodos {
  todos: Todo[];
}
const initialStateTodos: IStateTodos = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialStateTodos,
  reducers: {
    addNewTodoAction: (state, action: PayloadAction<Todo>) => {
      const newTodo = {
        ...action.payload,
        id: v4(),
        dateStart: new Date().toLocaleString(),
      };
      state.todos.push(newTodo);
    },
    removeTodoAction: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => action.payload !== todo.id);
    },
    setTodosAction: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
  },
});

export const { addNewTodoAction, setTodosAction, removeTodoAction } =
  todosSlice.actions;
export default todosSlice.reducer;
