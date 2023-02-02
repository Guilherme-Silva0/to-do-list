import React, { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [tasks, setTasks] = useState([
    { title: "Estudar programação", id: 1, completed: false },
    { title: "Ler livros", id: 1, completed: false },
  ]);

  return (
    <>
      <Header />
      <div className="container">
        <Main tasks={tasks} />
      </div>
    </>
  );
}

export default App;
