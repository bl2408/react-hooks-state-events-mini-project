import React, { useState } from "react";
import Task from "./Task";

function TaskList({tasks, removeTask}) {

  const displayTasks = tasks.map(({text, category})=>{
    return <Task key={text} text={text} category={category} removeTask={removeTask} />
  });

  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
