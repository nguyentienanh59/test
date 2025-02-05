import Todo from "./Todo";
import React from "react";

const TodoList = ({
  todoList,
  onCheckBtnClick,
  onDeleteBtnClick,
  onEditBtnClick,
}) => {
  return (
    <Todo
      key={todoList.id}
      todo={todoList}
      onCheckBtnClick={onCheckBtnClick}
      onDeleteBtnClick={onDeleteBtnClick}
      onEditBtnClick={onEditBtnClick}
    />
  );
};
export default TodoList;
