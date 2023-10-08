import React from "react";

function CategoryFilter({categories, handleBtnFilter, selBtn}) {

  const btnElements = categories.map((category)=>{
    return <button 
    onClick={()=>handleBtnFilter(category)} 
    key={category}
    className={category===selBtn ? "selected" : null}
    >
      {category}
    </button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btnElements}
    </div>
  );
}

export default CategoryFilter;