import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
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
        <div className="expenses">
            
            <ExpenseItem
                data={expenses[0]}
            />
            <ExpenseItem
                data={expenses[1]}
            />
        </div>
    )
}

export default Expenses