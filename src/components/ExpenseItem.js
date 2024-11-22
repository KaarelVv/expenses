import './ExpenseItem.css';
import ExpensDate from './ExpenseDate';

const ExpenseItem = (props) => {
   console.log(props);
   console.log(props.data);

   
    return (
    <div className='expense-item'>
       <ExpensDate date ={props.data.date} />
        <div className='expense-item__description'>
            <h2>{props.data.title} </h2>
            <div className='expense-item__price'>{props.data.price} </div>
        </div>
    </div>)
}

export default ExpenseItem