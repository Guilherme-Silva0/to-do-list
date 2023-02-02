import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [tasks, setTasks] = useState([
    { title: "Estudar programação", id: 1, completed: false },
    { title: "Ler livros", id: 2, completed: true },
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

  return (
    <>
      <Header />
      <div className="container">
        <Main tasks={tasks} handleTaskAddition={handleTaskAddition} />
      </div>
    </>
  );
}

export default App;
