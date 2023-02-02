import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [tasks, setTasks] = useState([
    { title: "Estudar programação", id: 1, completed: false },
    { title: "Ler livros", id: 2, completed: false },
  ]);

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

  return (
    <>
      <Header />
      <div className="container">
        <Main
          tasks={tasks}
          handleTaskAddition={handleTaskAddition}
          handleTaskClick={handleTaskClick}
        />
      </div>
    </>
  );
}

export default App;
