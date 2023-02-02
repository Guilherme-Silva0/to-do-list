import React from "react";

import TasksEmpty from "./TaskEmpty";
import AddTask from "./AddTask";

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
        <TasksEmpty />
      </div>
    </main>
  );
};

export default Main;
