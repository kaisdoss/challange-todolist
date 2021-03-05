import React, { useState } from 'react'
import TodoForm from './TodoForm2'
import Todo2 from './todo2'

const Todolist2 = () => {

    const [todos, setTodos] = useState([])
 

    const addTodo=(todonew)=>{
       
            setTodos([...todos,todonew])
        
    
    }

const removeTodo=(id)=>{
    const Arr=todos.filter(todo => todo.id !==id);
    setTodos(Arr)
}

const checkTodo=(id, isChecked)=>{


    console.log('!!', id, isChecked)
    // find index of element
    const element = todos.findIndex(elem => elem.id ==id);
    // copy array into new variable
    const newTaskList = [...todos];
    // edit our element
    newTaskList[element]={
        ...newTaskList[element],
        isChecked: !isChecked
    };

    setTodos(newTaskList)

}

// console.log(todos)
    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <Todo2 todos={todos} removeTodo={removeTodo} setTodos={setTodos} checkTodo={checkTodo} />
        </div>
    )
}

export default Todolist2
