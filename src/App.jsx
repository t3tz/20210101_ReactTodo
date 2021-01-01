import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncomplateTodos] = useState(["aaaaaa", "bbbbbb"]);
  const [completeTodos, setComplateTodos] = useState(["cccc"]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = (e) => {
    if (todoText === "") return;
    setIncomplateTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    setIncomplateTodos(incompleteTodos.filter((x, i) => i !== index));
  };
  const onClickComplete = (index) => {
    setComplateTodos([...completeTodos, incompleteTodos[index]]);
    onClickDelete(index);
  };
  const onClickReturn = (index) => {
    setIncomplateTodos([...incompleteTodos, completeTodos[index]]);
    setComplateTodos(completeTodos.filter((x, i) => i !== index));
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
