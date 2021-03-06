import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};
export const InputTodo = (props) => {
  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        value={props.todoText}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <button onClick={props.onClick} disabled={props.disabled}>
        追加
      </button>
    </div>
  );
};
