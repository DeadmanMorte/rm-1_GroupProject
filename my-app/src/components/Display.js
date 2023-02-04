import React, { useState, useEffect } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import AddButton from './addButton';

const DisplayComponent = () => {
  // State to hold the tasks
  const [tasks, setTasks] = useState([]);

  // Fetch the tasks from the backend when the component is mounted
  useEffect(() => {
    fetch('http://localhost:3001/todo')  //<backend_url>/tasks
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error(error));
  }, []);

  // Function to add a new task
  const addTask = async task => {
    // Make a post request to the backend to add the task
    await fetch('http://localhost:3001/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(response => response.json())
      .then(data => setTasks([...tasks, data]))
      .catch(error => console.error(error));
  };

  // Function to update a task
  const updateTask = task => {
    // Make a put request to the backend to update the task
    fetch(`http://localhost:3001/todo/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(() => {
        // Update the state with the updated task
        setTasks(tasks.map(t => (t.id === task.id ? task : t)));
      })
      .catch(error => console.error(error));
  };

  // Function to delete a task
  const deleteTask = id => {
    // Make a delete request to the backend to delete the task
    fetch(`http://localhost:3001/todo/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        // Update the state to remove the deleted task
        setTasks(tasks.filter(task => task.id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
      <AddButton />
    </div>
  );
};

export default DisplayComponent;
