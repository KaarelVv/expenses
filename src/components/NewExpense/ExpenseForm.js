import { useRef } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const titleInputRef = useRef()
    const amountInputRef = useRef()
    const dateInputRef = useRef()
    console.log(titleInputRef)

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredAmount = amountInputRef.current.value
        const enteredDate = dateInputRef.current.value

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData)
        props.onSaveExpenseData(expenseData)

        //Clear input fields
        titleInputRef.current.value = ''
        amountInputRef.current.value = ''
        dateInputRef.current.value = ''

    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"

                        ref={titleInputRef}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01"
                        ref={amountInputRef}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-11-12" max="2026-01-31"
                        ref={dateInputRef}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm