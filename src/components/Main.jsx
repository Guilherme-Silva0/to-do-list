import React from "react";
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
        <TasksEmpty />
      </div>
    </main>
  );
};

export default Main;
