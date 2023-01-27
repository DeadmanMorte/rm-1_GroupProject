import React, { useState } from "react";

const TodoEdit = ({ todo, updateTodo }) => {
  const [text, setText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo({ ...todo, text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Update Todo</button>
    </form>
  );
};

export default TodoEdit;
