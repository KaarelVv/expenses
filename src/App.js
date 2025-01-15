import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2024, 5, 5),
    title: "New Book",
    amount: 30.99
  },
  {
    id: 'id2',
    date: new Date(2024, 5, 5),
    title: "New Jeans",
    amount: 30.99
  },
  {
    id: 'id3',
    date: new Date(2025, 5, 5),
    title: "New Hat",
    amount: 30.99
  },
  {
    id: 'id4',
    date: new Date(2025, 5, 5),
    title: "New Bike",
    amount: 99.99
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {

    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App;
