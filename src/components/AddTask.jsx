import React, { useState } from "react";
import "../css/AddTask.css";

const AddTask = () => {
  return (
    <div className="add-task-container">
      <input type="text" className="add-task-input" />
      <div className="add-task-button-container"></div>
    </div>
  );
};

export default AddTask;
