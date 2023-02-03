import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import EditTask from "./components/EditTask";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saveTasks = localStorage.getItem("saveTasks");
    if (saveTasks != null) setTasks(JSON.parse(saveTasks));
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
    localStorage.setItem("saveTasks", JSON.stringify(newTask));
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
    localStorage.setItem("saveTasks", JSON.stringify(newTasks));
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
      return task;
    });
    localStorage.setItem("saveTasks", JSON.stringify(newTasks));
    return setTasks(newTasks);
  };

  const countTasks = () => {
    return tasks.length;
  };

  const countIncompleteTasks = () => {
    return tasks.filter((task) => !task.completed).length;
  };

  const countCompletedTasks = () => {
    return tasks.filter((task) => task.completed).length;
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
                countIncompleteTasks={countIncompleteTasks}
                countCompletedTasks={countCompletedTasks}
                countTasks={countTasks}
              />
            }
          />

          <Route
            path="/modifying/:taskTitle"
            exact
            element={<EditTask handleTaskUpdate={handleTaskUpdate} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
