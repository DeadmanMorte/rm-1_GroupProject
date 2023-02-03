import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import TodoList from './components/toDoList';

function App() {
 
  return (
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
  );
}

export default App;

