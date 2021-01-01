import React from "react";

export const IncompleteTodo = (props) => {
  return (
    <div className="incomplete-area">
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
