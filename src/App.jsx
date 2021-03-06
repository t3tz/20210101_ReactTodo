import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setComplateTodos] = useState([]);
  const [warning, setWarning] = useState("");

  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = (e) => {
    if (todoText === "") return;
    if (
      incompleteTodos.indexOf(todoText) !== -1 ||
      completeTodos.indexOf(todoText) !== -1
    ) {
      setWarning("同名のタスクが既に存在します");
      return;
    }
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
    setWarning("");
  };
  const onClickDelete = (index) => {
    setIncompleteTodos(incompleteTodos.filter((x, i) => i !== index));
  };
  const onClickComplete = (index) => {
    setComplateTodos([...completeTodos, incompleteTodos[index]]);
    onClickDelete(index);
  };
  const onClickReturn = (index) => {
    setIncompleteTodos([...incompleteTodos, completeTodos[index]]);
    setComplateTodos(completeTodos.filter((x, i) => i !== index));
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>TODOが5以上です</p>
      )}
      <p style={{ color: "red" }}>{warning}</p>
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
