import './ExpenseItem.css';
import ExpensDate from './ExpenseDate';
import Card from "../UI/Card";



const ExpenseItem = (props) => {
    // console.log(props);
    //    console.log(props.data);


    return (
        <Card className='expense-item'>
            <ExpensDate date={props.data.date} />
            <div className='expense-item__description'>
                <h2> {props.data.title} </h2>
                <div className='expense-item__price'> 
                    {props.data.price}
                </div>
            </div>
        </Card>)
}

export default ExpenseItem