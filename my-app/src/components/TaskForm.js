import {useState} from "react";

export default function TaskForm({onAdd}) {
  const [taskName,setTaskName] = useState('');
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input type="text"
             value={taskName}
             onChange={ev => setTaskName(ev.target.value)}
             required
                autoFocus
                maxLength={250}
                minLength={1}
             placeholder="Add List..."/>
      <button 
                className="btn"
                aria-label="Add Task"
                type="submit"
                >
                Add Task
                </button>
    </form>
  );
}

