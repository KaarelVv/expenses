import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
const addExpenseHandler = (expense) => {
  console.log('In App.js')
  // console.log(expense)
}
const expenses = [
  {
      date: new Date(2022, 12, 12),
      title: "New Book",
      price: 30.99
  },
  {
      date: new Date(2022, 5, 5),
      title: "New Jeans",
      price: 30.99
  }
]

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App;
