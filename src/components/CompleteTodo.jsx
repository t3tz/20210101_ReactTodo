import React from "react";

export const CompleteTodo = (props) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {props.completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => props.onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
