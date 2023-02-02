import React from "react";

import "../css/TaskBoard.css";

const TaskBoard = () => {
  return (
    <div className="task-board-container">
      <span className="pending-tasks">
        TAREFAS A FAZER <span className="emphasis">0</span>
      </span>
      <span className="completed-tasks">
        CONCLUÍDAS <span className="emphasis">0 de 0</span>
      </span>
    </div>
  );
};

export default TaskBoard;
