import './App.css';
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import { useEffect, useState } from "react";

interface TaskItem {
  todo_id: number;
  todo_item: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [description, setDescription] = useState<string>('');

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>, id: number) => {
    if (e.key === 'Enter') {
      renameTask(description, id);
    }
  }

  // Read
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:3001/todo');
      const jsonData = await response.json();
      setTasks(jsonData);
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getTodos();
  }, []);


  // Create
  async function addTask(todo_item: string) {
    try {
      const body = { todo_item };
      const response = await fetch("http://localhost:3001/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location.href = '/';
    } catch (err) {
      console.log(err)
    }
  }

  // Delete
  async function deleteTodo(id: number) {
    try {
      const deleteTodo = await fetch(`http://localhost:3001/todo/${id}`, {
        method: "DELETE"
      });

      window.location.href = '/';
    } catch (err) {
      console.log(err)
    }
  }

  // Checking off tasks
  function updateTaskDone(index: number, newDone: boolean) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].done = newDone;
      return newTasks;
    });
  }

  // Tasks Completion List
  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;


  // Edit
  async function renameTask(newName: string, id: number) {
    const body = { newName }
    try {
      const response = await fetch(`http://localhost:3001/todo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      console.log(body, id)
      // window.location = '/'
    } catch (err) {

      console.log(err)
    }

  }


  return (

    <main>
      <h1>My To Do List !</h1>
      <h2>{numberComplete}/{numberTotal} Complete</h2>



      <TaskForm onAdd={addTask} />
      {tasks.map((task:any, index) => (
        <Task
          key={task.todo_id}
          description={description}
          setDescription={setDescription}
          task={task}
          setTasks={setTasks}
          onTrash={() => deleteTodo(task.todo_id)}
          onToggle={done => updateTaskDone(index, done)}
          onEnter={(e) => handleEnter(e, task.todo_id)} todo_item={''} done={false} />
      ))
      }
    </main>
  );
}

export default App;

// import './App.css';
// import TaskForm from "./components/TaskForm";
// import Task from "./components/Task";
// import {useEffect, useState} from "react";


// function App() {
  
//   const [tasks,setTasks] = useState([]);
//   const [description,setDescription] = useState('');

//   const handleEnter = (e) => {
//     console.log(this.todo_id)
//     if (e.key === 'Enter'){
//       renameTask(tasks.todo_id) 
//       console.log(this.todo_id)
//     } 
//     }

//   //Read

//   const getTodos = async (name) => {
//     try {
//       const response = await fetch('http://localhost:3001/todo');
//       const jsonData = await response.json();
//       setTasks(jsonData);
//     } catch (err) { 
//       console.error(err)
//     }
//   }

//   useEffect(() => {
//     getTodos()
//     }, []);


//   //Create
//   async function addTask(todo_item) {
//     try { 
//       const body = {todo_item};
//       const response = await fetch("http://localhost:3001/todo",{
//           method: "POST",
//           headers: {"Content-Type": "application/json"},
//           body: JSON.stringify(body)
//       });
      
//       window.location = '/'
//      } catch (err) {
//           console.log(err)
//   }}

//   //Delete
//     async function deleteTodo(id)   {
//       try{
//         const deleteTodo = await fetch(`http://localhost:3001/todo/${id}`, {
//           method: "DELETE"
//         });
  
//         window.location = '/'
//       } catch (err) {
//         console.log(err)
//       }
//     }
  
//       // Checking off tasks
//   function updateTaskDone(index, newDone) {
//     setTasks(prev => {
//       const newTasks = [...prev];
//       newTasks[index].done = newDone;
//       return newTasks;
//     });
//   }
//     // Tasks Completion List
//   const numberComplete = tasks.filter(t => t.done).length;
//   const numberTotal = tasks.length;


// // Edit
//   async function renameTask (newName, id) {
//       const body = {newName}
//       console.log(newName)
//       try {
//           const response =  await fetch(`http://localhost:3001/todo/${id}`,{
//               method: "PUT",
//               headers: {"Content-Type": "application/json"},
//               body: JSON.stringify(body)
//           });
       
//        console.log(body,id) 
//        //  window.location = '/'
//       } catch (err) {

//            console.log(err)
//       }
      
//    }


//   return (

//     <main>
//       <h1>My To Do List !</h1>
//       <h2>{numberComplete}/{numberTotal} Complete</h2>
      
      
      
//       <TaskForm onAdd={addTask} />
//       {tasks.map((task,index) => (
//         <Task description={description} setDescription = {setDescription}
//         task={task} setTasks={setTasks}
//           {...task}
//               // onRename={(newName) => renameTask(newName,task.todo_id)}
//               onTrash={() => deleteTodo(task.todo_id)}
//               onToggle={done => updateTaskDone(index, done)}
//               onEnter={(e)=> handleEnter(e,renameTask)} />
//       ))}

      

//       {/* <CustomForm />
//       <Display /> */}

//     </main>
//     //custom form component - <CustomForm /> - was taken out right above the closing tag of main- seems second custom form wasnt doing anything so i i removed the component from here, commented out the immport in taskForm and commented out all of navbar//

//   );
// }


// export default App;

