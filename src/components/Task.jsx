import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import "../css/Task.css";

const Task = ({ task }) => {
  return (
    <div
      className={task.completed ? "task-container completed" : "task-container"}
    >
      <div className="check-box-contaier">
        <input
          type="checkbox"
          className="checkbox-input"
          defaultChecked={task.completed ? "checked" : ""}
        />
      </div>
      <div className="task-title">{task.title}</div>
      <div className="buttons-container">
        <button className="remove-task-button">
          <RiDeleteBin5Line />
        </button>
        <button className="edit-task-button">
          <FaEdit />
        </button>
      </div>
    </div>
  );
  // return <div className="task-container">{task.title}</div>;
};

export default Task;
