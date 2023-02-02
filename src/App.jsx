import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
      ...tasks,
    ];
    sessionStorage.setItem("saveTasks", JSON.stringify(newTask));
    setTasks(newTask);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    sessionStorage.setItem("saveTasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Main
          tasks={tasks}
          handleTaskAddition={handleTaskAddition}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      </div>
    </>
  );
}

export default App;
