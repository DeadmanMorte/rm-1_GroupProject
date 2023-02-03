import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import TodoList from './components/toDoList';

function App() {
 
  return (
<<<<<<< HEAD

    <main>
      <h1>My To Do List !</h1>
      <h2>{numberComplete}/{numberTotal} Complete</h2>
      
      
      <TaskForm onAdd={addTask} />
      {tasks.map((task,index) => (
        <Task {...task}
              onRename={newName => renameTask(index,newName)}
              onTrash={() => removeTask(index)}
              onToggle={done => updateTaskDone(index, done)} />
      ))}
    </main>

=======
    <Router>
    <div className="App">
      <div className="MyCheckLists">
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
      </Routes>
      </div>
    </div>
    </Router>
>>>>>>> af6bbb39cc4e401e0326896255ffd22d9a0fedca
  );
}

export default App;

