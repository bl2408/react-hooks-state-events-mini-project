import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const defaultForm ={
    text: "",
    category: "Code",
  };

  const [formData, setFormData ] = useState(defaultForm);

  const handleOnChange =(event)=>{
    const name = event.target.name;
    const value = event.target.value;

    setFormData(form=> ({
      ...formData,
      [name]: value
    }));
  };

  const handleOnSubmit = (event)=>{
    event.preventDefault();

    onTaskFormSubmit(formData);

    setFormData(defaultForm);

  };

  const displayCat =()=>{
    return categories
    .filter(cat=> cat !== "All" )
    .map(cat=><option key={cat} value={cat}>{cat}</option>);
  };

  return (
    <form className="new-task-form" onSubmit={handleOnSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleOnChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleOnChange}>
          {displayCat()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
