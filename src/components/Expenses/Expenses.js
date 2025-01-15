import './Expenses.css'
import Card from "../UI/Card";
import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {

    // Keep track of which year is being filtered
    const [filteredYear, setFilteredYear] = useState('2024');

    // Callback to update the filtered year
    const expensesFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log("Filtered Year: ", selectedYear);
    }

    const showYear = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    console.log('List length->>> ' + showYear.length)

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onChangeYear={expensesFilterChangeHandler}
            />
           <ExpenseList expenses={showYear}></ExpenseList>

        </Card>
    )
}

export default Expenses