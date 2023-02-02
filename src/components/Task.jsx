import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import "../css/Task.css";

const Task = ({ task }) => {
  return (
    <div
      className={task.completed ? "task-container completed" : "task-container"}
    >
      <div className="task-title">{task.title}</div>
      <div className="buttons-container">
        <button className="see-task-details-button">
          <CgInfo />
        </button>
        <button className="remove-task-button">
          <CgClose />
        </button>
      </div>
    </div>
  );
  // return <div className="task-container">{task.title}</div>;
};

export default Task;
