import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "./Button";

import "../css/EditTask.css";

const EditTask = () => {
  const params = useParams();
  const navigate = useNavigate();
  var taskId;

  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  useEffect(() => {
    const taskTitle = params.taskTitle;
    setInputData(taskTitle);
  }, []);

  const handleModTaskClick = () => {
    sessionStorage.setItem("confirmModId", sessionStorage.getItem("taskId"));
    sessionStorage.setItem("titleMod", inputData);
    sessionStorage.removeItem("taskId");
    navigate(-1);
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="edit-container">
      <div className="edit-area-container">
        <input
          type="text"
          className="edit-task-input"
          id="input"
          onChange={handleInputChange}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleModTaskClick();
            }
          }}
          value={inputData}
        />
        <div className="container-buttons">
          <Button onClick={handleBackButtonClick}>Voltar</Button>
          <Button
            style={{ backgroundColor: "tomato" }}
            onClick={handleModTaskClick}
          >
            Modificar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
