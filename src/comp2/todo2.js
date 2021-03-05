import React from "react";
import { BsFillAlarmFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaBeer } from 'react-icons/fa';

const Todo2 = ({ todos, removeTodo, checkTodo }) => {
  // const handleCheck = (id) => {};
  return (
    <div id="iteams">
      {todos.map((todo) => {
        return (
          <div id="containerTodos" key={todo.id}>
            <h1> <RiDeleteBin5Fill className="btnDelete" onClick={() => removeTodo(todo.id)} /></h1>

            <h1 className={todo.isChecked ? "todocheck" : "todolistitemcheck"}>
              {todo.text}
            </h1>
            {/* <button
              className="btnCheck"
              onClick={() => checkTodo(todo.id, todo.isChecked)}
            >
              {todo.isChecked ? "Uncheck" : "Check"}
            </button> */}
            <input className="btnCheck" type="checkbox"  onClick={() => checkTodo(todo.id, todo.isChecked)} />
            {/* <button className="btnDelete" onClick={() => removeTodo(todo.id)}>
              Delete
            </button> */}
            
            
            
            
            
          </div>
        );
      })}
    </div>
  );
};

export default Todo2;
