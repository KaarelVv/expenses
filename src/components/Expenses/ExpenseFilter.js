import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    const expenseFilterHandler = (event) => {
props.onChangeYear(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select
                    value={props.selectedYear}
                    onChange={expenseFilterHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;