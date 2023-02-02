import React from "react";

import AddTask from "./AddTask";
import TaskBoard from "./TaskBoard";
import TasksEmpty from "./TaskEmpty";

import "../css/Main.css";

const Main = ({ tasks }) => {
  const handleTaskEmptyAddition = () => {
    if (tasks) {
      return <TasksEmpty />;
    }
  };

  console.log(tasks);

  return (
    <main>
      <div className="main-container">
        <AddTask />
        <TaskBoard />
        <TasksEmpty />
      </div>
    </main>
  );
};

export default Main;
