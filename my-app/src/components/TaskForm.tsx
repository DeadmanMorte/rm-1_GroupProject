import { useState, FormEvent } from "react";

type TaskFormProps = {
  onAdd: (todo_item: string) => Promise<void>;
};

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [description, setDescription] = useState<string>("");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:3001/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <button>+</button>
      <input
        type="text"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
        required
        autoFocus
        maxLength={250}
        minLength={1}
        placeholder="Add List..."
      />
      <button className="btn" aria-label="Add Task" type="submit">
        Add Task
      </button>
    </form>
  );
}






// import {useState} from "react";

// export default function TaskForm({onAdd}) {

//   const [description, setDescription] = useState("");

//   const handleFormSubmit = async e => {
//       e.preventDefault();
//      try { 
//       const body = {description};
//       const response = await fetch("http://localhost:3001/todo",{
//           method: "POST",
//           headers: {"Content-Type": "application/json"},
//           body: JSON.stringify(body)
//       });
      
//       window.location = '/'
//      } catch (err) {
//           console.log(err)
//      }
//   }

//   // const [taskName,setTaskName] = useState('');
//   // function handleSubmit(ev) {
//   //   ev.preventDefault();
//   //   onAdd(taskName);
//   //   setTaskName('');

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <button>+</button>
//       <input type="text"
//              value={description}
//              onChange={ev => setDescription(ev.target.value)}
//              required
//                 autoFocus
//                 maxLength={250}
//                 minLength={1}
//              placeholder="Add List..."/>
//       <button 
//                 className="btn"
//                 aria-label="Add Task"
//                 type="submit"
//                 >
//                 Add Task
//                 </button>
//     </form>
//   );
// }

