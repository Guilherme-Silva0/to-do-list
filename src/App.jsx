import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import EditTask from "./components/EditTask";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saveTasks = sessionStorage.getItem("saveTasks");
    if (saveTasks != null) setTasks(JSON.parse(saveTasks));
    console.log(saveTasks);
  }, []);

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

  const handleTaskUpdate = (newTaskTitle, id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: newTaskTitle,
        };
      }
    });
    sessionStorage.setItem("saveTasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Main
                tasks={tasks}
                handleTaskAddition={handleTaskAddition}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
                handleTaskUpdate={handleTaskUpdate}
              />
            }
          />

          <Route path="/modifying/:taskTitle" exact element={<EditTask />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
