import './ExpenseItem.css';
import ExpensDate from './ExpenseDate';
import Card from "../UI/Card";
import { useState } from 'react';



const ExpenseItem = (props) => {
    // console.log(props);
    //    console.log(props.data);
    
    const [title, setTitle] = useState(props.data.title);

    const clickHandler = () => {
        console.log("Clicked!");
        setTitle(`Updated by click ${title}`);
        
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpensDate date={props.data.date} />
            <div className='expense-item__description'>
                <h2> {props.data.title} </h2>
                <div className='expense-item__price'> 
                    {props.data.price}
                </div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>)
}

// const ExpenseItem = (props) => {
//     // Destructure props.data for clarity
//     const { date, title, price } = props.data;
  
//     const [updatedTitle, setUpdatedTitle] = useState(title);
  
//     const clickHandler = () => {
//       setUpdatedTitle(`Updated by click ${updatedTitle}`);
//       console.log(updatedTitle);
//     };
  
//     return (
//       <Card className='expense-item'>
//         <ExpensDate date={date} />
//         <div className='expense-item__description'>
//           <h2>{updatedTitle}</h2>
//           <div className='expense-item__price'>
//             {price}
//           </div>
//         </div>
//         <button onClick={clickHandler}>Click Me</button>
//       </Card>
//     );
//   };

export default ExpenseItem