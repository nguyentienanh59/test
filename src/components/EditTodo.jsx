import React, { useState } from "react";
import "../App.css";

const EditTodo = ({ updateTodo, todo }) => {
  const [textInput, setTextInput] = useState(todo.name);
  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <div className="container">
      <input
        className="add-todo"
        placeholder="Sửa việc cần làm..."
        value={textInput}
        onChange={onTextInputChange}
      />
      <button
        className="button-add"
        disabled={!textInput}
        onClick={() => {
          updateTodo(textInput, todo.id);
        }}
      >
        Cập nhật
      </button>
    </div>
  );
};

export default EditTodo;
