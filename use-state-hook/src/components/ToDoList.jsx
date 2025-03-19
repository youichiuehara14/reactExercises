import React, { useState } from 'react';

// const initialToDos = [
//   { id: 1, text: 'Walk the dog', completed: true },
//   { id: 2, text: 'Walk the cat', completed: false },
//   { id: 3, text: 'Walk the rabbit', completed: true },
//   { id: 4, text: 'Walk the parrot', completed: false },
//   { id: 5, text: 'Walk the turtle', completed: true },
// ];

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}
  return (
    <div className="to-do-list">
      <h1>To Do List </h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default ToDoList;
