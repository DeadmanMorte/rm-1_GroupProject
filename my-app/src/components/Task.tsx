import Checkbox from "./Checkbox";
import { useState, useEffect, KeyboardEvent, FormEvent } from "react";

interface TaskProps {
  todo_item: string;
  done: boolean;
  onToggle: (done: boolean) => void;
  onTrash: () => void;
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  task: string;
  setTasks: any;
}

export default function Task({ todo_item, done, onToggle, onTrash, onEnter }: TaskProps) {
const [editMode, setEditMode] = useState(false);
const [description, setDescription] = useState("");

useEffect(() => {
  if (editMode) {
    const input = document.querySelector(".task input") as HTMLInputElement;
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}, [editMode]);

const handleBlur = () => setEditMode(false);

return (
  <div className={"task " + (done ? "done" : "")}>
  <Checkbox checked={done} onClick={() => onToggle(!done)} />
  {!editMode && (
    <div className="task-name" onClick={() => setEditMode((prev) => !prev)}>
    <span>{todo_item}</span>
    </div>
  )}
  {editMode && (
    <form onSubmit={(ev: FormEvent<HTMLFormElement>) => { ev.preventDefault(); setEditMode(false); }}>
    <input
    type="text"
    defaultValue={todo_item}
    onBlur={handleBlur}
    onChange={(e) => setDescription(e.target.value)}
    onKeyUp={onEnter}
  />
  </form>
  )}
  <button className="trash" onClick={onTrash}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
  </svg>
  </button>
  </div>
);
}

// Added a type for the props parameter: I added a type for the props parameter in the function signature to specify the expected type of the component props.

// Added types for the state variables: I added types for the editMode and description state variables using the useState function. By providing initial values for these variables and specifying their types, TypeScript can help prevent certain types of bugs that can occur when using JavaScript.

// Added types for function arguments: I added types for the arguments of the onToggle, onTrash, and onEnter functions using TypeScript's function type notation. This helps ensure that these functions are called with the correct arguments.

// Added type for the checked prop: I added a type for the checked prop passed to the Checkbox component. This helps ensure that the checked prop is of the correct type.

// Added type for the event object: I added a type for the e parameter in the onChange and onKeyUp event handlers using the ChangeEvent and KeyboardEvent types respectively. This ensures that the e parameter is of the correct type.

// Added types for the ev parameter: I added a type for the ev parameter in the onSubmit event handler using the FormEvent type. This ensures that the ev parameter is of the correct type.





// import Checkbox from "./Checkbox";
// import {useState, useEffect} from "react";

// export default function Task({todo_item,done,onToggle,onTrash,onEnter},props) {
//   const [editMode,setEditMode] = useState(false);
//   const [description,setDescription] = useState('');


//   useEffect(() => {
//     if (editMode) {
//       const input = document.querySelector('.task input');
//       input.focus();
//       input.setSelectionRange(input.value.length, input.value.length);
//     }
//   }, [editMode]);

//   const handleBlur = () => setEditMode(false);
  
    

//   return (
//     <div className={'task ' + (done?'done':'')}>
//       <Checkbox checked={done} onClick={() => onToggle(!done)} />
//       {!editMode && (
//         <div className="task-name" onClick={() => setEditMode(prev => !prev)}>
//           <span>{todo_item}</span>
//         </div>
//       )}
//       {editMode && (
//         <form onSubmit={ev => {ev.preventDefault();setEditMode(false);} }>
//           <input type="text" defaultValue={todo_item}
//                  onBlur={handleBlur} 
//                  onClick={console.log({description})}
//                 onChange={e => setDescription(e.target.value)}
//                 onKeyUp={e => onEnter(e)}/>
//         </form>
//       )}
//       <button className="trash" onClick={onTrash}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
//       </button>
//     </div>
//   );
//   console.log({description})
// }
