import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    
          

    const titleChangehandler = (event) => {
        
    }
    const priceChangehandler = (event) => {
       
    }
    const dateChangehandler = (event) => {
        
    }

    const submithandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }
        
    }
    return (
        <form onSubmit={submithandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text"
                        onChange={titleChangehandler}
                    />
                </div>
                <div className="new-expense_control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01"
                        onChange={priceChangehandler}
                    />
                </div>
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" min="2024-11-12" max="2026-01-31"
                        onChange={dateChangehandler}
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