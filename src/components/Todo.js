import React, { useState } from "react";
import firebase from "../util/firebase";
// import "../App.css";

export default function Todo({ todo }) {
  const [newTitle, setNewTitle] = useState("");
  const [newShow, setNewShow] = useState("");

  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  const editTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      title: newTitle
    });
  };
  const handleChange = (e) => {
    //e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  // for show-----------------------------------------
  const editTodo2 = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      show: newShow
    });
  };
  
  
  const handleChange2 = (e) => {
    //e.preventDefault();
    if (todo.complete === true) {
      setNewShow(todo.show);
    } else {
      todo.show = "";
      setNewShow(e.target.value);
    }
  };
  return (
    <li className={todo.complete ? "complete" : "list-item"}>
      <input
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />

<input
        type="text"
        value={todo.show === "" ? newShow : todo.show}
        className="list"
        onChange={handleChange2}
      />

      {/* <h1 className={todo.complete ? "complete" : ""}>{todo.title}</h1> */}
      <div>
        {/* <button onClick={deleteTodo}>Delete</button>
        <button onClick={completeTodo}>Complete</button> */}

        <button className="button-complete task-button" onClick={completeTodo}>
          <i className="fa fa-check-circle"></i>
        </button>
        <button className="button-edit task-button" onClick={editTodo}>
          <i className="fa fa-edit"></i>
        </button>
        <button className="button-edit task-button" onClick={editTodo2}>
          <i className="fa fa-edit"></i>
        </button>
        <button className="button-delete task-button" onClick={deleteTodo}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
