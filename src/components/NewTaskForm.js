import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState('')
  const [selCategory, setSelCategory] = useState('');


  const filterOutAll = categories.filter(cat=>cat !=="All")

  const categoryOptions = filterOutAll.map(cat=>{
    return <option value={cat} key={cat}>{cat}</option>
  })


  function handleSubmit(e){
    e.preventDefault();

    console.log(selCategory)
    const newTask = {
      category: selCategory,
      text: details
    }
    
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={e=>setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={selCategory} onChange={e=>setSelCategory(e.target.value)}>
        {categoryOptions} 
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;