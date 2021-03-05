import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({addTodo}) => {
const [disable,setDisable]=useState(true)
    const [input, setInput]= useState('')

    const handleSubmit=(e)=>{
        if (e.target.value!=="") {
        e.preventDefault()
        addTodo({
            id: uuidv4(),
            text:input,
            isChecked:false
        })
        setInput('')
    }}

    const handleChange=(e)=>{
       
        if (e.target.value.trim()) {
            setDisable(false)
        }    else{
            setDisable(true)
        }
       
        setInput(e.target.value)
        console.log(input)
    } 

    return (
        <form  onSubmit={handleSubmit}>
           <input className='input'
           placeholder='todo'
           value={input}
           onChange={handleChange}
           />



           <button  className='glow-on-hover' disabled={disable} >Add Todo</button>
        </form>
    )
}

export default TodoForm
