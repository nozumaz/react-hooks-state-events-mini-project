import React from "react";

function Task({text, category,  handleDelete}) {



  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={(e)=>handleDelete(text)} className="delete">X</button>
    </div>
  );
}

export default Task;