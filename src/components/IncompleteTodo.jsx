import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};
export const IncompleteTodo = (props) => {
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {props.incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => props.onClickComplete(index)}>完了</button>
              <button onClick={() => props.onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
