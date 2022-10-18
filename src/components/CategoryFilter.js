import React from "react";

function CategoryFilter({categories, selectedCategory, handleCategoryChange}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(cat=>{
        return <button key={cat} className={selectedCategory===cat ? "selected" : null} onClick={()=>handleCategoryChange(cat)}>{cat}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
