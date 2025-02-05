import React, { useState } from "react";
import "../App.css";

const AddTodo = ({ onAddBtnClick }) => {
  const [textInput, setTextInput] = useState("");
  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <div className="container">
      <input
        className="add-todo"
        placeholder="Thêm việc cần làm..."
        value={textInput}
        onChange={onTextInputChange}
      />
      <button
        className="button-add"
        disabled={!textInput}
        onClick={() => {
          onAddBtnClick(textInput);
          setTextInput("");
        }}
      >
        Thêm
      </button>
    </div>
  );
};

export default AddTodo;
