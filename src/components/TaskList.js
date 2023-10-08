import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {


  const taskElements = tasks.map((task)=>{
    return <Task text={task.text} category={task.category} key={task.text} handleDelete={handleDelete}/>
  })

  return (

    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;