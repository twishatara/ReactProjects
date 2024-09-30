import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

// Main Function
function App() {
  /*list for to do actions */
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')
  const [currentDate, setCurrentDate] = useState('')

  /*useEffect to set the current date when the component mounts */
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos:
      newList }))
  }

  /*add new todo action to bottom of existing list */
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  /* delete todo action by comparing index */
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  /* edit todo by saving todo, deleting and remaking */
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  /*take dependency array, listen to event - page refresh- and run code when page refresh happens */
  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    /*pass down for cleaner main file */
    <>
      <div className="date-display">
        <h2> <i class="fa-solid fa-calendar-days"></i> {currentDate}
        </h2>
      </div>
     <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
     <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>

  )
}

export default App
