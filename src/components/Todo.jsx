import React from "react";
import "./Todo.css";

const Todo = ({ todo, onCheckBtnClick, onDeleteBtnClick, onEditBtnClick }) => {
  return (
    <ul className="list-ul">
      <li className={`${todo.isCompleted ? "completed" : ""}`}>{todo.name}</li>
      <div className="button-item">
        <button
          className="check-icon"
          onClick={() => onDeleteBtnClick(todo.id)}
        >
          Xóa
        </button>

        {!todo.isCompleted && (
          <>
            <button
              className="check-icon"
              onClick={() => onEditBtnClick(todo.id)}
            >
              Sửa
            </button>
            <button
              className="check-icon"
              onClick={() => onCheckBtnClick(todo.id)}
            >
              Hoàn thành
            </button>
          </>
        )}
      </div>
    </ul>
  );
};
export default Todo;
