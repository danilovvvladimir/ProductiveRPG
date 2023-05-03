import React, { FC } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { ITodoField, Todo } from "../../models/models";
import Select from "react-select";
import "./TodoForm.scss";
import { getValue, IOption, options } from "../../services/formService";

interface TodoFormProps {
  addNewTodo?: (todo: Todo) => void;
}
const TodoForm: FC<TodoFormProps> = ({ addNewTodo }) => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ITodoField>({ mode: "onChange" });

  const onSubmit: SubmitHandler<ITodoField> = (data) => {
    const newTodo: Todo = {
      ...data,
      id: "",
      dateStart: new Date().toLocaleString(),
    };
    reset();
    if (addNewTodo) {
      addNewTodo(newTodo);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="todo-form__wrapper">
        <input
          type="text"
          className="todo-form__input"
          // value={oldTodo && oldTodo.title}
          {...register("title", { required: true })}
          placeholder="Название..."
        />
        <Controller
          control={control}
          name="difficulty"
          rules={{ required: "Поставьте сложность задания" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Select
              classNamePrefix="custom-select"
              options={options}
              value={getValue(value)}
              onChange={(newValue) => onChange((newValue as IOption).value)}
              placeholder="Сложность..."
            />
          )}
        />

        <button type="submit" className="todo-form__btn">
          Create quest
        </button>
      </div>
      <textarea
        {...register("description")}
        className="todo-form__textarea"
        placeholder="Описание..."></textarea>
    </form>
  );
};

export default React.memo(TodoForm);
