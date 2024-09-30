import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos} = props
  return (
    <ul className = 'main'>
        {todos.map((todo, todoIndex) => {
            return (
                /* ToDo card parent element and todo child element which is the paragraph */
                <TodoCard {...props} key={todoIndex} index = 
                {todoIndex}> 
                    <p>{todo}</p>
                </TodoCard>
            )   
        })}
    </ul>
  )
}
