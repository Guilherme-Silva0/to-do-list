import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useNavigate();
  const handleTaskEditClick = () => {
    history(`/modifying/${task.title}`);
    sessionStorage.setItem("taskId", task.id);
  };

  return (
    <div
      className={task.completed ? "task-container completed" : "task-container"}
    >
      <div className="check-box-contaier">
        <input
          type="checkbox"
          className="checkbox-input"
          onChange={() => {
            handleTaskClick(task.id);
          }}
          defaultChecked={task.completed ? "checked" : ""}
        />
      </div>
      <div className="task-title">{task.title}</div>
      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => {
            handleTaskDeletion(task.id);
          }}
        >
          <RiDeleteBin5Line />
        </button>
        <button className="edit-task-button" onClick={handleTaskEditClick}>
          <FaEdit />
        </button>
      </div>
    </div>
  );
  // return <div className="task-container">{task.title}</div>;
};

export default Task;
