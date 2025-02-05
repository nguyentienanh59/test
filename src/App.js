import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo.jsx";
import EditTodo from "./components/EditTodo.jsx";
import Todo from "./components/Todo.jsx";
import TodoList from "./components/TodoList.jsx";

const TODO_APP_STORAGE_KEY = "TODO_APP";
function App() {
  const [todoList, setTodoList] = useState([]);
  // const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const storageTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    console.log(storageTodoList);
    if (storageTodoList) {
      setTodoList(JSON.parse(storageTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onAddBtnClick = useCallback(
    (textInput) => {
      setTodoList([
        {
          id: Math.random(),
          name: textInput,
          isCompleted: false,
          isEditing: false,
        },
        ...todoList,
      ]);
    },
    [todoList]
  );

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);

  const onDeleteBtnClick = useCallback((id) => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== id));
  }, []);
  const onEditBtnClick = useCallback((id) => {
    console.log(id);
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  }, []);
  const onUpdateTodo = useCallback((name, id) => {
    console.log(name);
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, name, isEditing: !todo.isEditing } : todo
      )
    );
  }, []);
  return (
    <div className="container">
      <h3>Danh sách cần làm</h3>
      <AddTodo onAddBtnClick={onAddBtnClick} />
      {todoList?.map((todo) => {
        console.log(todo);
        return todo.isEditing ? (
          <EditTodo updateTodo={onUpdateTodo} todo={todo} />
        ) : (
          <TodoList
            key={todo.id}
            todoList={todo}
            onCheckBtnClick={onCheckBtnClick}
            onDeleteBtnClick={onDeleteBtnClick}
            onEditBtnClick={onEditBtnClick}
          />
        );
      })}
    </div>
  );
}

export default App;
