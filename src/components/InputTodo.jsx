import React from "react";

export const InputTodo = (props) => {
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={props.todoText}
        onChange={props.onChange}
      />
      <button onClick={props.onClick}>追加</button>
    </div>
  );
};
