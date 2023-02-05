import React, { useState, useEffect } from "react";
// import ToDoEdit from "./toDoEdit";


const TodoList = () => {

  //delete todo function
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message)
    }
  }
  const [todos, setTodos] = useState([])

  const getTodos = async() => {
    try {
      const response = await fetch("http://localhost:3001/todos")
      const jsonData = await response.json()

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>My Tasks</h1>
      {todos.map(todo => (
      <ul key={todo.todo_id}>
      <li>{todo.description}</li>
      <li>
            {/* <TodoEdit todo={todo}/> */}
          <button onClick={() => deleteTodo(todo.todo_id)}>
            Delete
            </button>
        </li>
    </ul>))}
    
    </div>
  );
};

export default TodoList;