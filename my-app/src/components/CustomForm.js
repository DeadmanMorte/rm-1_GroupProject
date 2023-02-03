import React, { useState } from "react";

const CustomForm = () => {
    const [description, setDescription] = useState("");

    const handleFormSubmit = async(e) => {
        e.preventDefault();
       try {
        const body = {description};
        const response = await fetch("http://localhost:5000/todos",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        window.location ='/'
        console.log(response);
       } catch (err) {

       }
    }
    return (
        <form
        className="todo"
        onSubmit={handleFormSubmit}
        >
            <div className="wrapper">
                <input
                type="text"
                id="task"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                autoFocus
                maxLength={250}
                placeholder="Enter Task"
                />
                </div>
                <button 
                className="btn"
                aria-label="Add Task"
                type="submit"
                >
                Add Task
                </button>
        </form>
    )
}
export default CustomForm