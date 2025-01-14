import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')


    const titleChangehandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const priceChangehandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangehandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submithandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }
    return (
        <form onSubmit={submithandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text"
                        onChange={titleChangehandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense_control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01"
                        onChange={priceChangehandler}
                        value={enteredAmount}
                    />
                </div>
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" min="2024-11-12" max="2026-01-31"
                        onChange={dateChangehandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm