import React, { useState, useEffect } from 'react';

const Display = () => {

  const [todos, setTodos] = useState([]);
  const [description,setDescription] = useState('')

  const deleteTodo = async (id) => {
    try{
      const deleteTodo = await fetch(`http://localhost:3001/todo/${id}`, {
        method: "DELETE"
      });

      window.location = '/'
    } catch (err) {
      console.log(err)
    }
  }

  const editTodo = async (id) => {
   try { 
    const updateTodo = window.prompt('What would you like to change the task to?')
    setDescription(updateTodo)
    const body = {description}

    const response = await fetch(`http://localhost:3001/todo/${id}`,{
        method: "PUT",
        // headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });
    console.log(body,id)

    //  window.location = '/'
   } catch (err) {
        console.log(err)
   }
}

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:3001/todo');
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) { 
      console.error(err)
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

return (
    <table className='ShowTodos'>
    <div>
      
      {todos.map(todo => (
      <ul key={todo.todo_id}>
      <li>{todo.todo_item}
          <button onClick={() => deleteTodo(todo.todo_id)}>
            Delete
            </button>
            <button 
                className="btn"
                aria-label="Edit Task"
                type="button"
                onClick={() => editTodo(todo.todo_id)}
                >
                Edit Task
                </button>
        </li>
      </ul>))}
      </div>
    </table>
)
}
export default Display
// import Task from './Task';
// import TaskForm from './TaskForm';
// import AddButton from './addButton';

// const DisplayComponent = () => {
//   // State to hold the tasks
//   const [tasks, setTasks] = useState([]);

//   // Fetch the tasks from the backend when the component is mounted
//   useEffect(() => {
//     fetch('http://localhost:3001/todo')  //<backend_url>/tasks
//       .then(response => response.json())
//       .then(data => setTasks(data))
//       .catch(error => console.error(error));
//   }, []);

//   // Function to add a new task
//   const addTask = async task => {
//     // Make a post request to the backend to add the task
//     await fetch('http://localhost:3001/todo', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(task)
//     })
//       .then(response => response.json())
//       .then(data => setTasks([...tasks, data]))
//       .catch(error => console.error(error));
//   };

//   // Function to update a task
//   const updateTask = task => {
//     // Make a put request to the backend to update the task
//     fetch(`http://localhost:3001/todo/${task.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(task)
//     })
//       .then(() => {
//         // Update the state with the updated task
//         setTasks(tasks.map(t => (t.id === task.id ? task : t)));
//       })
//       .catch(error => console.error(error));
//   };

//   // Function to delete a task
//   const deleteTask = id => {
//     // Make a delete request to the backend to delete the task
//     fetch(`http://localhost:3001/todo/${id}`, {
//       method: 'DELETE'
//     })
//       .then(() => {
//         // Update the state to remove the deleted task
//         setTasks(tasks.filter(task => task.id !== id));
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <TaskForm addTask={addTask} />
//       {tasks.map(task => (
//         <Task
//           key={task.id}
//           task={task}
//           updateTask={updateTask}
//           deleteTask={deleteTask}
//         />
//       ))}
//       <AddButton />
//     </div>
//   );
// };

// export default DisplayComponent;
