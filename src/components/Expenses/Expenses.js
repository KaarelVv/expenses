import './Expenses.css'
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {

    // Keep track of which year is being filtered
    const [filteredYear, setFilteredYear] = useState('2023');

    // Callback to update the filtered year
    const expensesFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log("Filtered Year: ", selectedYear);
    }

    // props.expenses.map((expense) => {
    //     console.log(expense)
    // })
    // console.log(props)


    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear}
                onChangeYear={expensesFilterChangeHandler} />
            {props.expenses.map((expense) => (
                <ExpenseItem key={expense.id} data={expense} />
            ))}

        </Card>
    )
}

export default Expenses