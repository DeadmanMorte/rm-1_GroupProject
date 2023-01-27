//parent component holds staet of the todo 
//contains 3 functions add deelte and edit which are passed own as props to the ToDolist Compoennt and toDoEdit component which should be able to change the state


import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoEdit from './ToDoEdit';

function ToDoApp() {
    const [todos, setTodos] = useState([]);

    function addToDo(newToDo) {
        setTodos([...todos, newToDo]);
    }

    function deleteToDo(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    function editToDo(index, newToDo) {
        const newTodos = [...todos];
        newTodos[index] = newToDo;
        setTodos(newTodos);
    }

    return (
        <div>
            <ToDoList todos={todos} deleteToDo={deleteToDo} editToDo={editToDo} />
            <ToDoEdit addToDo={addToDo} />
        </div>
    );
}

export default ToDoApp;
