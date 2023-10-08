import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

const [tasks, setTasks] = useState(TASKS);
const [categories, setCats] = useState(CATEGORIES);

const [selBtn, setSelBtn] = useState('All');

function handleBtnFilter(category){
  // console.log(category)
  setSelBtn(category)
};


function handleDelete(deletedText){
  // console.log(taskDel)
  const newTasks = tasks.filter((element)=>{
    return element.text !== deletedText
  })
  setTasks(newTasks)
}

function onTaskFormSubmit(newTask){
  console.log(newTask)
  setTasks([...tasks, newTask])
}

const filteredTasksByBtn = tasks.filter(task=>task.category===selBtn || selBtn === "All")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} handleBtnFilter={handleBtnFilter} selBtn={selBtn}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList handleDelete={handleDelete} tasks={filteredTasksByBtn} />
    </div>
  );
}

export default App;