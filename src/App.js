import React, { useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  //setTasksList it is a method

  const addTaskshandles = () => {
    setTasksList([...tasksList, task]);
    setTask("");
  }

  const deleteClick = (id) => {
    setTasksList(tasksList.filter(task => task !== id));
  }


  const editClick = (id) => {
    let index = tasksList.findIndex(x => x === id);
    tasksList[index] = prompt("Enter New Task");
    setTasksList([...tasksList]);
  }

  return (
    <div id="app">
      <h1>My Tasks</h1>
      <div class="flex">
        <input type="text" id="add-task" placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button id="add-btn" onClick={addTaskshandles}>Add</button>
      </div>

      <ul id="task-list">

        {tasksList.map((task) => (
          <li class="flex" key={task}>
            <span> {task}</span>
            <div>
              <button onClick={() => editClick(task)}>Edit</button>
              <button onClick={() => deleteClick(task)}>Delete</button>
            </div>
          </li>
        ))
        }
      </ul >
    </div >
  );
}

export default App;
