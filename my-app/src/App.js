import CustomForm from './components/CustomForm';
import Navbar from './components/Navbar';
import CheckLists from './components/CheckLists';
function App() {
  return (
    <div className="App">
      <div className="MyCheckLists">
      <h1>Let's Get Started</h1>
      <Navbar />
      <h1>My To-Do Lists</h1>
      <CustomForm />
      <CheckLists />
      </div>
    </div>
  );
}


export default App;

