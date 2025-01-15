import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
    return (
        <>
            {props.expenses.length === 0 ? (
                <p>No data</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseItem key={expense.id} data={expense} />
                ))
            )}
        </>
    )
}

export default ExpenseList