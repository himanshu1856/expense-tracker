import React, { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'

const App = () => {
  const[expenseData, setExpenseData] = useState([])

  const addNewExpense = (expense) => {
    setExpenseData(prev => [...prev, expense])
  }

  return (
    <main>
      <Form addNewExpense={addNewExpense}/>
      <Table expenseData={expenseData}/>
    </main>
  )
}

export default App