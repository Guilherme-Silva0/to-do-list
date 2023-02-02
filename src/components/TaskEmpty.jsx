import React from "react";
import FolderSimpleDotted from "../assets/FolderSimpleDotted.png";
import "../css/TasksEmpty.css";

const TasksEmpty = () => {
  return (
    <div className="tasks-empty-container">
      <img src={FolderSimpleDotted} alt="icone de pasta" />
      <h2>A SUA LISTA DE TAREFAS ESTÁ VAZIA</h2>
      <p>Adicione uma nova tarefa e comece a organizar o seu dia</p>
    </div>
  );
};

export default TasksEmpty;
