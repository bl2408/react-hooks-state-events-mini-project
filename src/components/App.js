import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [tasksList, setTasksList] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const removeTask = (text)=>{
    setTasksList(tasks=>tasks.filter(task=>task.text !== text));
  };

  const handleCategoryChange =(cat)=>{
    setCategory(cate=>cat);
  };

  const tasksCategoryFilter = tasksList.filter(task=> category ==="All" ? true : task.category === category);

  const onTaskFormSubmit =(task)=>{
    setTasksList(tasks=> [...tasksList, task]);
  };


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} handleCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksCategoryFilter} removeTask={removeTask}/>
    </div>
  );
}

export default App;
