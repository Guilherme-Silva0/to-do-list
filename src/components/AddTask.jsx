import React, { useState } from "react";

import Button from "./Button";

import "../css/AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    if (inputData === "" || inputData === null || inputData === undefined)
      return;
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        className="add-task-input"
        placeholder="Descreva a tarefa aqui"
        id="input"
        onChange={handleInputChange}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAddTaskClick();
          }
        }}
        value={inputData}
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Criar tarefa</Button>
      </div>
    </div>
  );
};

export default AddTask;
