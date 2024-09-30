import { useState } from "react"
export default function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props

    return (
        <header>
            <input value={todoValue} onChange={(e)=> {
               /*wiring for adding a new todo action */ 
                setTodoValue(e.target.value)
            }} placeholder= "Enter To-Do..." />
            <button onClick={()=>{
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add </button>
        </header>
    )
}