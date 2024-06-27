import React from "react";

const Form = ({addNewExpense}) => {
  const handlehtmlFormSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target);
    getFormData(event.target)
    
  };

const getFormData = (form) => {
  const data = new FormData(form)
  let expense = {}
  for (let [key, value] of data.entries()){
    expense[key] = value
  }
  expense["id"] = crypto.randomUUID()
  addNewExpense(expense)
}

  return (

    <form onSubmit={handlehtmlFormSubmit}>
      <h1>Track Your Expenses</h1>
      <div className="htmlForm-element">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" required/>
      </div>
      <div className="htmlForm-element">
        <label htmlFor="category">Category</label>
        <input id="category" name="category" type="text" required/>
      </div>
      <div className="htmlForm-element">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" type="number" required />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
