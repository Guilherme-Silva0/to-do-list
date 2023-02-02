import React from "react";

import Button from "./Button";

import "../css/AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  return (
    <div className="add-task-container">
      <input
        type="text"
        className="add-task-input"
        placeholder="Descreva a tarefa aqui"
      />
      <div className="add-task-button-container">
        <Button>Criar tarefa</Button>
      </div>
    </div>
  );
};

export default AddTask;
