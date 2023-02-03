import React, { useEffect } from "react";

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
  handleTaskUpdate,
}) => {
  const handleTaskEmptyAddition = () => {
    if (tasks.length === 0) {
      return <TasksEmpty />;
    }
  };

  useEffect(() => {
    const confirmModId = sessionStorage.getItem("confirmModId");
    const titleMod = sessionStorage.getItem("titleMod");

    if (
      confirmModId != null &&
      titleMod != null &&
      confirmModId != undefined &&
      titleMod != undefined &&
      confirmModId != "" &&
      titleMod != "null"
    ) {
      handleTaskUpdate(titleMod, confirmModId);
    }
  }, []);

  return (
    <>
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
    </>
  );
};

export default Main;
