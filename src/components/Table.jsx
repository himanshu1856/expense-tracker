import React from "react";

const Table = ({ expenseData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenseData.map(({title, category, amount, id}) => {
          return (
            <tr key={id}>
              <td>{title}</td>
              <td>{category}</td>
              <td>{amount}</td>
            </tr>
          );
        })}
        {/* <tr>
          <td>T-shirt</td>
          <td>Clothing</td>
          <td>50</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Table;
