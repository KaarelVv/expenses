import './Expenses.css'
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses = () => {

    // Keep track of which year is being filtered
    const [filteredYear, setFilteredYear] = useState('2023');

    // Callback to update the filtered year
    const expensesFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log("Filtered Year: ", selectedYear);
    };
    // console.log(props)
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
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear}
                onChangeYear={expensesFilterChangeHandler} />
            <ExpenseItem
                data={expenses[0]}
            />
            <ExpenseItem
                data={expenses[1]}
            />

        </Card>
    )
}

export default Expenses