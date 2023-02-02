import React from "react";

import AddTask from "./AddTask";
import TaskBoard from "./TaskBoard";
import TasksEmpty from "./TaskEmpty";
import Tasks from "./Tasks";

import "../css/Main.css";

const Main = ({
  tasks,
  handleTaskAddition,
  handleTaskClick,
  handleTaskDeletion,
}) => {
  const handleTaskEmptyAddition = () => {
    if (tasks.length === 0) {
      return <TasksEmpty />;
    }
  };

  return (
    <main>
      <div className="main-container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <TaskBoard />
        {handleTaskEmptyAddition()}
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      </div>
    </main>
  );
};

export default Main;
