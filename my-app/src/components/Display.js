import React, { useState, useEffect } from 'react';
import ToDoList from './toDoList';
import ToDoEdit from './toDoEdit';
import CustomForm from './CustomForm';

const DisplayComponent = () => {
    const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [showForm, setShowForm] = useState(false);
  
    useEffect(() => {
        // Fetch todos from your backend using fetch or Axios
        fetch('your_backend_url/todos')
          .then(res => res.json())
          .then(data => {
            setTodos(data);
          })
          .catch(err => console.error(err));
      }, []);