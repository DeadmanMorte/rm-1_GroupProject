import { useState } from "react"
import {TodoList} from "./toDoList"
const CheckLists = () => {
    const [lists, setLists] = useState([
      { ListName: 'To Do List', Task1: 'lorem ipsum...', Task2: 'lorem ipsum', Task3: 'lorem ipsum', Task4: 'lorem ipsum', id: 1 },
      { ListName: 'Shopping List', Task1: 'lorem ipsum...', Task2: 'lorem ipsum', Task3: 'lorem ipsum', Task4: 'lorem ipsum', id: 2 },
      { ListName: 'To Chat List', Task1: 'lorem ipsum...', Task2: 'lorem ipsum', Task3: 'lorem ipsum', Task4: 'lorem ipsum', id: 3 }
    ]);

    return(
        <div className="checklists">
            {lists.map(list => (
                <div className="ToDolist-preview" key={list.id}>
                    <h2>{list.ListName}</h2>
 <p><input type="checkbox" id="Task1" value="Task1"/>{list.Task1}</p>
  <p><input type="checkbox" id="Task2" value="Task2"/>{list.Task2}</p>
  <p><input type="checkbox" id="Task3" value="Task3"/>{list.Task3}</p>
  <p><input type="checkbox" id="Task4" value="Task4"/>{list.Task4}</p>
                <button>Delete List</button>
                <button>Edit List</button>
            </div>
            
            ))}
        </div>
        
    );
            }

    export default CheckLists;