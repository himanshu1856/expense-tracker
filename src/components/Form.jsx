import React from "react";

const Form = () => {
  return (
    <form>
    <h1>Track Your Expenses</h1>
      <div className="form-element">
        <label for="title">Title</label>
        <input id="title" />
      </div>
      <div className="form-element">
        <label for="category">Category</label>
        <input id="category" />
      </div>
      <div className="form-element">
        <label for="amount">Amount</label>
        <input id="amount" />
      </div>
      <button>Add</button>
    </form>
  );
};

export default Form;
