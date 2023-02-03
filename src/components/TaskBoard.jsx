import React from "react";

import "../css/TaskBoard.css";

const TaskBoard = ({
  countIncompleteTasks,
  countCompletedTasks,
  countTasks,
}) => {
  return (
    <div className="task-board-container">
      <span className="pending-tasks">
        TAREFAS A FAZER{" "}
        <span className="emphasis">{countIncompleteTasks()}</span>
      </span>
      <span className="completed-tasks">
        CONCLUÍDAS{" "}
        <span className="emphasis">
          {countCompletedTasks()} de {countTasks()}
        </span>
      </span>
    </div>
  );
};

export default TaskBoard;
